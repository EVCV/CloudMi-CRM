const db = require('../models');
const FileDBApi = require('./file');
const crypto = require('crypto');
const Utils = require('../utils');

const Sequelize = db.Sequelize;
const Op = Sequelize.Op;

module.exports = class AnalyticsDBApi {
  static async create(data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const analytics = await db.analytics.create(
      {
        id: data.id || undefined,

        metric_name: data.metric_name || null,
        value: data.value || null,
        recorded_at: data.recorded_at || null,
        importHash: data.importHash || null,
        createdById: currentUser.id,
        updatedById: currentUser.id,
      },
      { transaction },
    );

    await analytics.setOrganization(currentUser.organization.id || null, {
      transaction,
    });

    return analytics;
  }

  static async bulkImport(data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    // Prepare data - wrapping individual data transformations in a map() method
    const analyticsData = data.map((item, index) => ({
      id: item.id || undefined,

      metric_name: item.metric_name || null,
      value: item.value || null,
      recorded_at: item.recorded_at || null,
      importHash: item.importHash || null,
      createdById: currentUser.id,
      updatedById: currentUser.id,
      createdAt: new Date(Date.now() + index * 1000),
    }));

    // Bulk create items
    const analytics = await db.analytics.bulkCreate(analyticsData, {
      transaction,
    });

    // For each item created, replace relation files

    return analytics;
  }

  static async update(id, data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const analytics = await db.analytics.findByPk(id, {}, { transaction });

    await analytics.update(
      {
        metric_name: data.metric_name || null,
        value: data.value || null,
        recorded_at: data.recorded_at || null,
        updatedById: currentUser.id,
      },
      { transaction },
    );

    await analytics.setOrganization(currentUser.organization.id || null, {
      transaction,
    });

    return analytics;
  }

  static async remove(id, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const analytics = await db.analytics.findByPk(id, options);

    await analytics.update(
      {
        deletedBy: currentUser.id,
      },
      {
        transaction,
      },
    );

    await analytics.destroy({
      transaction,
    });

    return analytics;
  }

  static async findBy(where, options) {
    const transaction = (options && options.transaction) || undefined;

    const analytics = await db.analytics.findOne({ where }, { transaction });

    if (!analytics) {
      return analytics;
    }

    const output = analytics.get({ plain: true });

    output.organization = await analytics.getOrganization({
      transaction,
    });

    return output;
  }

  static async findAll(filter, globalAccess, options) {
    var limit = filter.limit || 0;
    var offset = 0;
    const currentPage = +filter.page;

    offset = currentPage * limit;

    var orderBy = null;

    const transaction = (options && options.transaction) || undefined;
    let where = {};
    let include = [
      {
        model: db.organizations,
        as: 'organization',
      },
    ];

    if (filter) {
      if (filter.id) {
        where = {
          ...where,
          ['id']: Utils.uuid(filter.id),
        };
      }

      if (filter.metric_name) {
        where = {
          ...where,
          [Op.and]: Utils.ilike('analytics', 'metric_name', filter.metric_name),
        };
      }

      if (filter.valueRange) {
        const [start, end] = filter.valueRange;

        if (start !== undefined && start !== null && start !== '') {
          where = {
            ...where,
            value: {
              ...where.value,
              [Op.gte]: start,
            },
          };
        }

        if (end !== undefined && end !== null && end !== '') {
          where = {
            ...where,
            value: {
              ...where.value,
              [Op.lte]: end,
            },
          };
        }
      }

      if (filter.recorded_atRange) {
        const [start, end] = filter.recorded_atRange;

        if (start !== undefined && start !== null && start !== '') {
          where = {
            ...where,
            recorded_at: {
              ...where.recorded_at,
              [Op.gte]: start,
            },
          };
        }

        if (end !== undefined && end !== null && end !== '') {
          where = {
            ...where,
            recorded_at: {
              ...where.recorded_at,
              [Op.lte]: end,
            },
          };
        }
      }

      if (
        filter.active === true ||
        filter.active === 'true' ||
        filter.active === false ||
        filter.active === 'false'
      ) {
        where = {
          ...where,
          active: filter.active === true || filter.active === 'true',
        };
      }

      if (filter.organization) {
        var listItems = filter.organization.split('|').map((item) => {
          return Utils.uuid(item);
        });

        where = {
          ...where,
          organizationId: { [Op.or]: listItems },
        };
      }

      if (filter.createdAtRange) {
        const [start, end] = filter.createdAtRange;

        if (start !== undefined && start !== null && start !== '') {
          where = {
            ...where,
            ['createdAt']: {
              ...where.createdAt,
              [Op.gte]: start,
            },
          };
        }

        if (end !== undefined && end !== null && end !== '') {
          where = {
            ...where,
            ['createdAt']: {
              ...where.createdAt,
              [Op.lte]: end,
            },
          };
        }
      }
    }

    let { rows, count } = options?.countOnly
      ? {
          rows: [],
          count: await db.analytics.count({
            where: globalAccess ? {} : where,
            include,
            distinct: true,
            limit: limit ? Number(limit) : undefined,
            offset: offset ? Number(offset) : undefined,
            order:
              filter.field && filter.sort
                ? [[filter.field, filter.sort]]
                : [['createdAt', 'desc']],
            transaction,
          }),
        }
      : await db.analytics.findAndCountAll({
          where: globalAccess ? {} : where,
          include,
          distinct: true,
          limit: limit ? Number(limit) : undefined,
          offset: offset ? Number(offset) : undefined,
          order:
            filter.field && filter.sort
              ? [[filter.field, filter.sort]]
              : [['createdAt', 'desc']],
          transaction,
        });

    //    rows = await this._fillWithRelationsAndFilesForRows(
    //      rows,
    //      options,
    //    );

    return { rows, count };
  }

  static async findAllAutocomplete(query, limit, globalAccess, organizationId) {
    let where = {};

    if (!globalAccess && organizationId) {
      where.organizationId = organizationId;
    }

    if (query) {
      where = {
        [Op.or]: [
          { ['id']: Utils.uuid(query) },
          Utils.ilike('analytics', 'metric_name', query),
        ],
      };
    }

    const records = await db.analytics.findAll({
      attributes: ['id', 'metric_name'],
      where,
      limit: limit ? Number(limit) : undefined,
      orderBy: [['metric_name', 'ASC']],
    });

    return records.map((record) => ({
      id: record.id,
      label: record.metric_name,
    }));
  }
};
