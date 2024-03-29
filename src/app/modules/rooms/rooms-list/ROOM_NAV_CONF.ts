import { InavConfiguration } from '../../shared/models/nav-config.interface';

export const ROOM_NAV: InavConfiguration = {
  canLogout: true,
  buttons: [
    {
      buttonName: 'Return to dashboard',
      routerLink: '/dashboard',
      icon: 'dashboard',
    },
    {
      buttonName: 'Advertisement form',
      routerLink: 'advertisement-form',
      icon: 'assignment',
    },
  ],
};
