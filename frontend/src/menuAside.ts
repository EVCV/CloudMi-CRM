import {
  mdiAccountCircle,
  mdiMonitor,
  mdiGithub,
  mdiLock,
  mdiAlertCircle,
  mdiSquareEditOutline,
  mdiTable,
  mdiViewList,
  mdiPalette,
  mdiVuejs,
  mdiFileCode,
} from '@mdi/js';
import { MenuAsideItem } from './interfaces';

const menuAside: MenuAsideItem[] = [
  {
    href: '/dashboard',
    icon: mdiMonitor,
    label: 'Dashboard',
  },

  {
    href: '/users/users-list',
    label: 'Users',
    icon: mdiTable,
    permissions: 'READ_USERS',
  },
  {
    href: '/analytics/analytics-list',
    label: 'Analytics',
    icon: mdiTable,
    permissions: 'READ_ANALYTICS',
  },
  {
    href: '/appointments/appointments-list',
    label: 'Appointments',
    icon: mdiTable,
    permissions: 'READ_APPOINTMENTS',
  },
  {
    href: '/campaigns/campaigns-list',
    label: 'Campaigns',
    icon: mdiTable,
    permissions: 'READ_CAMPAIGNS',
  },
  {
    href: '/courses/courses-list',
    label: 'Courses',
    icon: mdiTable,
    permissions: 'READ_COURSES',
  },
  {
    href: '/leads/leads-list',
    label: 'Leads',
    icon: mdiTable,
    permissions: 'READ_LEADS',
  },
  {
    href: '/messages/messages-list',
    label: 'Messages',
    icon: mdiTable,
    permissions: 'READ_MESSAGES',
  },
  {
    href: '/roles/roles-list',
    label: 'Roles',
    icon: mdiTable,
    permissions: 'READ_ROLES',
  },
  {
    href: '/permissions/permissions-list',
    label: 'Permissions',
    icon: mdiTable,
    permissions: 'READ_PERMISSIONS',
  },
  {
    href: '/organizations/organizations-list',
    label: 'Organizations',
    icon: mdiTable,
    permissions: 'READ_ORGANIZATIONS',
  },
  {
    href: '/profile',
    label: 'Profile',
    icon: mdiAccountCircle,
  },
  {
    href: '/api-docs',
    target: '_blank',
    label: 'Swagger API',
    icon: mdiFileCode,
    permissions: 'READ_API_DOCS',
  },
];

export default menuAside;
