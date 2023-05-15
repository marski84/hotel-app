import { AdvertisementService } from './advertisement.service';
import { RoomsService } from '../rooms/rooms.service';

// import { AdminActionsComponent } from './admin-actions.component';

describe('AdvertisementService', () => {
  let adService: AdvertisementService;
  const provide = (mock: any): any => mock;

  beforeEach(() => {
    adService = new AdvertisementService(provide(RoomsService));
  });

  it('should create', () => {
    expect(adService).toBeTruthy();
  });
});
