import { InavConfiguration } from '../../shared/models/nav-config.interface';

export const DASHBOARD_NAV: InavConfiguration = {
  canLogout: true,
  buttons: [
    {
      buttonName: 'Go to rooms List',
      routerLink: 'rooms-list',
      icon: 'list_alt',
    },
  ],
};
