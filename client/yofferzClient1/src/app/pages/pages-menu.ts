import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'nb-home',
    link: '/pages/dashboard',
    home: true,
  },  
  {
    title: 'My Profile',
    icon: 'nb-person',
    link: '/pages/ui-features',
    children: [
      {
        title: 'General',
        link: '/pages/ui-features/buttons',
      },
      {
        title: 'Images',
        link: '/pages/ui-features/grid',
      },
      {
        title: 'Outlets',
        link: '/pages/ui-features/icons',
      },
      {
        title: 'Amenities',
        link: '/pages/ui-features/modals',
      }
    ],
  },
  {
    title: 'My Deals',
    icon: 'ion-ios-briefcase-outline',
    link: '/pages/deals/deals-list'    
  },
  {
    title: 'Download Deal',
    icon: 'ion-ios-download-outline',
    link: '/pages/tables/smart-table'    
  },
  {
    title: 'Settings',
    icon: 'nb-gear',
    children: [
      {
        title: 'Change Password',
        link: '/pages/forms/layouts',
      }
    ],
  },  
  {
    title: 'Add Money',
    icon :'nb-plus-circled'
  },
  {
    title: 'Auth',
    icon: 'nb-locked',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },
];
