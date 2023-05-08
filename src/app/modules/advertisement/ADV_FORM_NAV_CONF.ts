import { InavConfiguration } from '../shared/models/nav-config.interface';

export const ADV_FORM_NAV: InavConfiguration = {
  canLogout: true,
  buttons: [
    {
      buttonName: 'Return',
      routerLink: '/dashboard/rooms-list',
      icon: 'navigate_before',
    },
  ],
};
