const db = require('../models');
const Users = db.users;

const Analytics = db.analytics;

const Appointments = db.appointments;

const Campaigns = db.campaigns;

const Courses = db.courses;

const Leads = db.leads;

const Messages = db.messages;

const Organizations = db.organizations;

const AnalyticsData = [
  {
    metric_name: 'No one tells me shit',

    value: 83.63,

    recorded_at: new Date('2023-05-22'),

    // type code here for "relation_one" field
  },

  {
    metric_name: 'Might be DQ time',

    value: 55.74,

    recorded_at: new Date('2023-05-06'),

    // type code here for "relation_one" field
  },

  {
    metric_name: 'Standby',

    value: 71.25,

    recorded_at: new Date('2023-11-04'),

    // type code here for "relation_one" field
  },

  {
    metric_name: 'I want my damn cart back',

    value: 28.38,

    recorded_at: new Date('2023-04-22'),

    // type code here for "relation_one" field
  },

  {
    metric_name: 'I got that scurvy',

    value: 80.15,

    recorded_at: new Date('2023-05-05'),

    // type code here for "relation_one" field
  },
];

const AppointmentsData = [
  {
    start_time: new Date('2023-09-03'),

    end_time: new Date('2023-11-29'),

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    start_time: new Date('2023-07-19'),

    end_time: new Date('2023-08-24'),

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    start_time: new Date('2023-05-22'),

    end_time: new Date('2023-08-06'),

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    start_time: new Date('2023-05-20'),

    end_time: new Date('2023-10-20'),

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    start_time: new Date('2024-03-30'),

    end_time: new Date('2023-12-03'),

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },
];

const CampaignsData = [
  {
    name: 'Emil Kraepelin',

    start_date: new Date('2023-12-05'),

    end_date: new Date('2024-03-30'),

    status: 'planning',

    // type code here for "relation_many" field

    // type code here for "relation_one" field
  },

  {
    name: 'Rudolf Virchow',

    start_date: new Date('2024-03-13'),

    end_date: new Date('2024-02-06'),

    status: 'paused',

    // type code here for "relation_many" field

    // type code here for "relation_one" field
  },

  {
    name: 'Rudolf Virchow',

    start_date: new Date('2024-01-01'),

    end_date: new Date('2023-12-24'),

    status: 'planning',

    // type code here for "relation_many" field

    // type code here for "relation_one" field
  },

  {
    name: 'Ludwig Boltzmann',

    start_date: new Date('2023-09-27'),

    end_date: new Date('2023-10-08'),

    status: 'planning',

    // type code here for "relation_many" field

    // type code here for "relation_one" field
  },

  {
    name: 'Alfred Binet',

    start_date: new Date('2023-10-02'),

    end_date: new Date('2023-05-29'),

    status: 'planning',

    // type code here for "relation_many" field

    // type code here for "relation_one" field
  },
];

const CoursesData = [
  {
    title: 'That damn Bill Stull',

    description: 'That is why you fail.',

    // type code here for "relation_many" field

    // type code here for "relation_one" field
  },

  {
    title: "Y'all never listen to me",

    description: 'Younglings, younglings gather ’round.',

    // type code here for "relation_many" field

    // type code here for "relation_one" field
  },

  {
    title: "That's messed up",

    description: 'Difficult to see. Always in motion is the future...',

    // type code here for "relation_many" field

    // type code here for "relation_one" field
  },

  {
    title: 'Come on now',

    description: 'That is why you fail.',

    // type code here for "relation_many" field

    // type code here for "relation_one" field
  },

  {
    title: 'That damn Bill Stull',

    description: 'Not if anything to say about it I have',

    // type code here for "relation_many" field

    // type code here for "relation_one" field
  },
];

const LeadsData = [
  {
    first_name: 'Might be DQ time',

    last_name: 'Texas!',

    email: 'orlando.schmitt@koss-nader.info',

    status: 'new',

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    first_name: 'Texas!',

    last_name: "That's messed up",

    email: 'bobbi@hane-buckridge.co',

    status: 'contacted',

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    first_name: 'I tell you what',

    last_name: 'Might be DQ time',

    email: 'dulce_kutch@kihn-weissnat.name',

    status: 'lost',

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    first_name: "Goin' hog huntin'",

    last_name: "C'mon Naomi",

    email: 'many@krajcik-brekke.io',

    status: 'lost',

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    first_name: 'That damn gimble',

    last_name: 'Standby',

    email: 'robin@macgyver.org',

    status: 'qualified',

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },
];

const MessagesData = [
  {
    content: 'Good relations with the Wookiees, I have.',

    channel: 'sms',

    sent_at: new Date('2024-03-27'),

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    content:
      'Through the Force, things you will see. Other places. The future - the past. Old friends long gone.',

    channel: 'sms',

    sent_at: new Date('2024-02-06'),

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    content: 'Difficult to see. Always in motion is the future...',

    channel: 'sms',

    sent_at: new Date('2024-01-30'),

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    content:
      'Pain, suffering, death I feel. Something terrible has happened. Young Skywalker is in pain. Terrible pain',

    channel: 'social_media',

    sent_at: new Date('2024-02-21'),

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    content:
      'Like fire across the galaxy the Clone Wars spread. In league with the wicked Count Dooku, more and more planets slip. Against this threat, upon the Jedi Knights falls the duty to lead the newly formed army of the Republic. And as the heat of war grows, so, to, grows the prowess of one most gifted student of the Force.',

    channel: 'email',

    sent_at: new Date('2023-10-18'),

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },
];

const OrganizationsData = [
  {
    name: 'Neils Bohr',
  },

  {
    name: 'Sheldon Glashow',
  },

  {
    name: 'Max Delbruck',
  },

  {
    name: 'Alfred Kinsey',
  },

  {
    name: 'Paul Dirac',
  },
];

// Similar logic for "relation_many"

async function associateUserWithOrganization() {
  const relatedOrganization0 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const User0 = await Users.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (User0?.setOrganization) {
    await User0.setOrganization(relatedOrganization0);
  }

  const relatedOrganization1 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const User1 = await Users.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (User1?.setOrganization) {
    await User1.setOrganization(relatedOrganization1);
  }

  const relatedOrganization2 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const User2 = await Users.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (User2?.setOrganization) {
    await User2.setOrganization(relatedOrganization2);
  }

  const relatedOrganization3 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const User3 = await Users.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (User3?.setOrganization) {
    await User3.setOrganization(relatedOrganization3);
  }

  const relatedOrganization4 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const User4 = await Users.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (User4?.setOrganization) {
    await User4.setOrganization(relatedOrganization4);
  }
}

async function associateAnalyticWithOrganization() {
  const relatedOrganization0 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Analytic0 = await Analytics.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Analytic0?.setOrganization) {
    await Analytic0.setOrganization(relatedOrganization0);
  }

  const relatedOrganization1 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Analytic1 = await Analytics.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Analytic1?.setOrganization) {
    await Analytic1.setOrganization(relatedOrganization1);
  }

  const relatedOrganization2 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Analytic2 = await Analytics.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Analytic2?.setOrganization) {
    await Analytic2.setOrganization(relatedOrganization2);
  }

  const relatedOrganization3 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Analytic3 = await Analytics.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Analytic3?.setOrganization) {
    await Analytic3.setOrganization(relatedOrganization3);
  }

  const relatedOrganization4 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Analytic4 = await Analytics.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (Analytic4?.setOrganization) {
    await Analytic4.setOrganization(relatedOrganization4);
  }
}

async function associateAppointmentWithLead() {
  const relatedLead0 = await Leads.findOne({
    offset: Math.floor(Math.random() * (await Leads.count())),
  });
  const Appointment0 = await Appointments.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Appointment0?.setLead) {
    await Appointment0.setLead(relatedLead0);
  }

  const relatedLead1 = await Leads.findOne({
    offset: Math.floor(Math.random() * (await Leads.count())),
  });
  const Appointment1 = await Appointments.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Appointment1?.setLead) {
    await Appointment1.setLead(relatedLead1);
  }

  const relatedLead2 = await Leads.findOne({
    offset: Math.floor(Math.random() * (await Leads.count())),
  });
  const Appointment2 = await Appointments.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Appointment2?.setLead) {
    await Appointment2.setLead(relatedLead2);
  }

  const relatedLead3 = await Leads.findOne({
    offset: Math.floor(Math.random() * (await Leads.count())),
  });
  const Appointment3 = await Appointments.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Appointment3?.setLead) {
    await Appointment3.setLead(relatedLead3);
  }

  const relatedLead4 = await Leads.findOne({
    offset: Math.floor(Math.random() * (await Leads.count())),
  });
  const Appointment4 = await Appointments.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (Appointment4?.setLead) {
    await Appointment4.setLead(relatedLead4);
  }
}

async function associateAppointmentWithUser() {
  const relatedUser0 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Appointment0 = await Appointments.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Appointment0?.setUser) {
    await Appointment0.setUser(relatedUser0);
  }

  const relatedUser1 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Appointment1 = await Appointments.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Appointment1?.setUser) {
    await Appointment1.setUser(relatedUser1);
  }

  const relatedUser2 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Appointment2 = await Appointments.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Appointment2?.setUser) {
    await Appointment2.setUser(relatedUser2);
  }

  const relatedUser3 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Appointment3 = await Appointments.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Appointment3?.setUser) {
    await Appointment3.setUser(relatedUser3);
  }

  const relatedUser4 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Appointment4 = await Appointments.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (Appointment4?.setUser) {
    await Appointment4.setUser(relatedUser4);
  }
}

async function associateAppointmentWithOrganization() {
  const relatedOrganization0 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Appointment0 = await Appointments.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Appointment0?.setOrganization) {
    await Appointment0.setOrganization(relatedOrganization0);
  }

  const relatedOrganization1 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Appointment1 = await Appointments.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Appointment1?.setOrganization) {
    await Appointment1.setOrganization(relatedOrganization1);
  }

  const relatedOrganization2 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Appointment2 = await Appointments.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Appointment2?.setOrganization) {
    await Appointment2.setOrganization(relatedOrganization2);
  }

  const relatedOrganization3 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Appointment3 = await Appointments.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Appointment3?.setOrganization) {
    await Appointment3.setOrganization(relatedOrganization3);
  }

  const relatedOrganization4 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Appointment4 = await Appointments.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (Appointment4?.setOrganization) {
    await Appointment4.setOrganization(relatedOrganization4);
  }
}

// Similar logic for "relation_many"

async function associateCampaignWithOrganization() {
  const relatedOrganization0 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Campaign0 = await Campaigns.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Campaign0?.setOrganization) {
    await Campaign0.setOrganization(relatedOrganization0);
  }

  const relatedOrganization1 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Campaign1 = await Campaigns.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Campaign1?.setOrganization) {
    await Campaign1.setOrganization(relatedOrganization1);
  }

  const relatedOrganization2 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Campaign2 = await Campaigns.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Campaign2?.setOrganization) {
    await Campaign2.setOrganization(relatedOrganization2);
  }

  const relatedOrganization3 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Campaign3 = await Campaigns.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Campaign3?.setOrganization) {
    await Campaign3.setOrganization(relatedOrganization3);
  }

  const relatedOrganization4 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Campaign4 = await Campaigns.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (Campaign4?.setOrganization) {
    await Campaign4.setOrganization(relatedOrganization4);
  }
}

// Similar logic for "relation_many"

async function associateCourseWithOrganization() {
  const relatedOrganization0 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Course0 = await Courses.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Course0?.setOrganization) {
    await Course0.setOrganization(relatedOrganization0);
  }

  const relatedOrganization1 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Course1 = await Courses.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Course1?.setOrganization) {
    await Course1.setOrganization(relatedOrganization1);
  }

  const relatedOrganization2 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Course2 = await Courses.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Course2?.setOrganization) {
    await Course2.setOrganization(relatedOrganization2);
  }

  const relatedOrganization3 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Course3 = await Courses.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Course3?.setOrganization) {
    await Course3.setOrganization(relatedOrganization3);
  }

  const relatedOrganization4 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Course4 = await Courses.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (Course4?.setOrganization) {
    await Course4.setOrganization(relatedOrganization4);
  }
}

async function associateLeadWithUser() {
  const relatedUser0 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Lead0 = await Leads.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Lead0?.setUser) {
    await Lead0.setUser(relatedUser0);
  }

  const relatedUser1 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Lead1 = await Leads.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Lead1?.setUser) {
    await Lead1.setUser(relatedUser1);
  }

  const relatedUser2 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Lead2 = await Leads.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Lead2?.setUser) {
    await Lead2.setUser(relatedUser2);
  }

  const relatedUser3 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Lead3 = await Leads.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Lead3?.setUser) {
    await Lead3.setUser(relatedUser3);
  }

  const relatedUser4 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Lead4 = await Leads.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (Lead4?.setUser) {
    await Lead4.setUser(relatedUser4);
  }
}

async function associateLeadWithOrganization() {
  const relatedOrganization0 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Lead0 = await Leads.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Lead0?.setOrganization) {
    await Lead0.setOrganization(relatedOrganization0);
  }

  const relatedOrganization1 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Lead1 = await Leads.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Lead1?.setOrganization) {
    await Lead1.setOrganization(relatedOrganization1);
  }

  const relatedOrganization2 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Lead2 = await Leads.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Lead2?.setOrganization) {
    await Lead2.setOrganization(relatedOrganization2);
  }

  const relatedOrganization3 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Lead3 = await Leads.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Lead3?.setOrganization) {
    await Lead3.setOrganization(relatedOrganization3);
  }

  const relatedOrganization4 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Lead4 = await Leads.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (Lead4?.setOrganization) {
    await Lead4.setOrganization(relatedOrganization4);
  }
}

async function associateMessageWithUser() {
  const relatedUser0 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Message0 = await Messages.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Message0?.setUser) {
    await Message0.setUser(relatedUser0);
  }

  const relatedUser1 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Message1 = await Messages.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Message1?.setUser) {
    await Message1.setUser(relatedUser1);
  }

  const relatedUser2 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Message2 = await Messages.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Message2?.setUser) {
    await Message2.setUser(relatedUser2);
  }

  const relatedUser3 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Message3 = await Messages.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Message3?.setUser) {
    await Message3.setUser(relatedUser3);
  }

  const relatedUser4 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Message4 = await Messages.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (Message4?.setUser) {
    await Message4.setUser(relatedUser4);
  }
}

async function associateMessageWithOrganization() {
  const relatedOrganization0 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Message0 = await Messages.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Message0?.setOrganization) {
    await Message0.setOrganization(relatedOrganization0);
  }

  const relatedOrganization1 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Message1 = await Messages.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Message1?.setOrganization) {
    await Message1.setOrganization(relatedOrganization1);
  }

  const relatedOrganization2 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Message2 = await Messages.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Message2?.setOrganization) {
    await Message2.setOrganization(relatedOrganization2);
  }

  const relatedOrganization3 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Message3 = await Messages.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Message3?.setOrganization) {
    await Message3.setOrganization(relatedOrganization3);
  }

  const relatedOrganization4 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Message4 = await Messages.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (Message4?.setOrganization) {
    await Message4.setOrganization(relatedOrganization4);
  }
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await Analytics.bulkCreate(AnalyticsData);

    await Appointments.bulkCreate(AppointmentsData);

    await Campaigns.bulkCreate(CampaignsData);

    await Courses.bulkCreate(CoursesData);

    await Leads.bulkCreate(LeadsData);

    await Messages.bulkCreate(MessagesData);

    await Organizations.bulkCreate(OrganizationsData);

    await Promise.all([
      // Similar logic for "relation_many"

      await associateUserWithOrganization(),

      await associateAnalyticWithOrganization(),

      await associateAppointmentWithLead(),

      await associateAppointmentWithUser(),

      await associateAppointmentWithOrganization(),

      // Similar logic for "relation_many"

      await associateCampaignWithOrganization(),

      // Similar logic for "relation_many"

      await associateCourseWithOrganization(),

      await associateLeadWithUser(),

      await associateLeadWithOrganization(),

      await associateMessageWithUser(),

      await associateMessageWithOrganization(),
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('analytics', null, {});

    await queryInterface.bulkDelete('appointments', null, {});

    await queryInterface.bulkDelete('campaigns', null, {});

    await queryInterface.bulkDelete('courses', null, {});

    await queryInterface.bulkDelete('leads', null, {});

    await queryInterface.bulkDelete('messages', null, {});

    await queryInterface.bulkDelete('organizations', null, {});
  },
};
