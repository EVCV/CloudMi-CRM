const db = require('../models');
const FileDBApi = require('./file');
const crypto = require('crypto');
const Utils = require('../utils');

const Sequelize = db.Sequelize;
const Op = Sequelize.Op;

module.exports = class AppointmentsDBApi {
  static async create(data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const appointments = await db.appointments.create(
      {
        id: data.id || undefined,

        start_time: data.start_time || null,
        end_time: data.end_time || null,
        importHash: data.importHash || null,
        createdById: currentUser.id,
        updatedById: currentUser.id,
      },
      { transaction },
    );

    await appointments.setLead(data.lead || null, {
      transaction,
    });

    await appointments.setUser(data.user || null, {
      transaction,
    });

    await appointments.setOrganization(currentUser.organization.id || null, {
      transaction,
    });

    return appointments;
  }

  static async bulkImport(data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    // Prepare data - wrapping individual data transformations in a map() method
    const appointmentsData = data.map((item, index) => ({
      id: item.id || undefined,

      start_time: item.start_time || null,
      end_time: item.end_time || null,
      importHash: item.importHash || null,
      createdById: currentUser.id,
      updatedById: currentUser.id,
      createdAt: new Date(Date.now() + index * 1000),
    }));

    // Bulk create items
    const appointments = await db.appointments.bulkCreate(appointmentsData, {
      transaction,
    });

    // For each item created, replace relation files

    return appointments;
  }

  static async update(id, data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const appointments = await db.appointments.findByPk(
      id,
      {},
      { transaction },
    );

    await appointments.update(
      {
        start_time: data.start_time || null,
        end_time: data.end_time || null,
        updatedById: currentUser.id,
      },
      { transaction },
    );

    await appointments.setLead(data.lead || null, {
      transaction,
    });

    await appointments.setUser(data.user || null, {
      transaction,
    });

    await appointments.setOrganization(currentUser.organization.id || null, {
      transaction,
    });

    return appointments;
  }

  static async remove(id, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const appointments = await db.appointments.findByPk(id, options);

    await appointments.update(
      {
        deletedBy: currentUser.id,
      },
      {
        transaction,
      },
    );

    await appointments.destroy({
      transaction,
    });

    return appointments;
  }

  static async findBy(where, options) {
    const transaction = (options && options.transaction) || undefined;

    const appointments = await db.appointments.findOne(
      { where },
      { transaction },
    );

    if (!appointments) {
      return appointments;
    }

    const output = appointments.get({ plain: true });

    output.lead = await appointments.getLead({
      transaction,
    });

    output.user = await appointments.getUser({
      transaction,
    });

    output.organization = await appointments.getOrganization({
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
        model: db.leads,
        as: 'lead',
      },

      {
        model: db.users,
        as: 'user',
      },

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

      if (filter.calendarStart && filter.calendarEnd) {
        where = {
          ...where,
          [Op.or]: [
            {
              start_time: {
                [Op.between]: [filter.calendarStart, filter.calendarEnd],
              },
            },
            {
              end_time: {
                [Op.between]: [filter.calendarStart, filter.calendarEnd],
              },
            },
          ],
        };
      }

      if (filter.start_timeRange) {
        const [start, end] = filter.start_timeRange;

        if (start !== undefined && start !== null && start !== '') {
          where = {
            ...where,
            start_time: {
              ...where.start_time,
              [Op.gte]: start,
            },
          };
        }

        if (end !== undefined && end !== null && end !== '') {
          where = {
            ...where,
            start_time: {
              ...where.start_time,
              [Op.lte]: end,
            },
          };
        }
      }

      if (filter.end_timeRange) {
        const [start, end] = filter.end_timeRange;

        if (start !== undefined && start !== null && start !== '') {
          where = {
            ...where,
            end_time: {
              ...where.end_time,
              [Op.gte]: start,
            },
          };
        }

        if (end !== undefined && end !== null && end !== '') {
          where = {
            ...where,
            end_time: {
              ...where.end_time,
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

      if (filter.lead) {
        var listItems = filter.lead.split('|').map((item) => {
          return Utils.uuid(item);
        });

        where = {
          ...where,
          leadId: { [Op.or]: listItems },
        };
      }

      if (filter.user) {
        var listItems = filter.user.split('|').map((item) => {
          return Utils.uuid(item);
        });

        where = {
          ...where,
          userId: { [Op.or]: listItems },
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
          count: await db.appointments.count({
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
      : await db.appointments.findAndCountAll({
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
          Utils.ilike('appointments', 'start_time', query),
        ],
      };
    }

    const records = await db.appointments.findAll({
      attributes: ['id', 'start_time'],
      where,
      limit: limit ? Number(limit) : undefined,
      orderBy: [['start_time', 'ASC']],
    });

    return records.map((record) => ({
      id: record.id,
      label: record.start_time,
    }));
  }
};
