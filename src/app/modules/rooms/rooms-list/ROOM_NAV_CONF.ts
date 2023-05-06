import { InavConfiguration } from '../../shared/models/nav-config.interface';

export const ROOM_NAV: InavConfiguration = {
  canLogout: true,
  buttons: [
    {
      buttonName: 'rooms',
      routerLink: 'rooms-list',
    },
  ],
};
