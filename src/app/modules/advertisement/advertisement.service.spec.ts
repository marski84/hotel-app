import { AdvertisementService } from './advertisement.service';
import { RoomsService } from '../rooms/rooms.service';
import { RoomInterface } from '../shared/models/room.interface';
import { RoomStateEnum } from '../shared/models/room-state.enum';
import { TestBed } from '@angular/core/testing';

// import { AdminActionsComponent } from './admin-actions.component';
import { AbstractApiHandlerService } from '../../abstract-api-handler-service';
import { ApiHandlerService } from '../auth/api-handler.service';
import { BehaviorSubject, Subject } from 'rxjs';
jest.mock('../rooms/rooms.service.ts');

const mockData: RoomInterface[] = [
  {
    roomNumber: '1',
    pricePerDay: '100',
    roomState: RoomStateEnum.CLEAN,
    markedForCheck: false,
    roomAds: [],
  },
];

describe('AdvertisementService', () => {
  let adService: AdvertisementService;
  let mockRoomServiceSpy: AbstractApiHandlerService;

  const provide = (mock: any): any => mock;

  // let http = {
  //   get: jest.fn(() => Observable.of(mockData)),
  // };

  beforeEach(() => {
    let mockRoomServiceSpy: any = {
      data$: new BehaviorSubject(mockData),
      getData: jest.fn(),
      data: new BehaviorSubject(mockData),
      saveData: jest.fn(),
    };

    adService = new AdvertisementService(mockRoomServiceSpy as RoomsService);
  });

  it('initially it should create adService instance', () => {
    expect(adService).toBeTruthy();
    expect(adService).toBeInstanceOf(AdvertisementService);
  });

  it('it should call getRoomsData method, subscribe to BehaviourSubject and recieve mockData', () => {
    let resp: RoomInterface[] = [];
    const adServiceSpy = jest.spyOn(adService, 'getRoomsData');
    adService.getRoomsData();
    adService.roomsList$.subscribe((val) => (resp = val));
    expect(adServiceSpy).toHaveBeenCalled();
    expect(resp).toEqual(mockData);
  });

  it('it should call updateRoomAds method and return unchanged data', () => {
    jest.spyOn(adService, 'updateRoomAds');
    adService.getRoomsData();
    adService.updateRoomAds({
      roomNumber: '999999',
      pricePerDay: '100',
      roomState: RoomStateEnum.CLEAN,
      markedForCheck: false,
      roomAds: [],
    });

    let resp: RoomInterface[] = [];
    adService.roomsList$.subscribe((data) => (resp = data));

    expect(resp).toEqual(mockData);
  });

  it('it should call updateRoomAds method and update ad data', () => {
    const mockedData = [
      {
        roomNumber: '1',
        pricePerDay: '100',
        roomState: RoomStateEnum.CLEAN,
        markedForCheck: false,
        roomAds: [
          {
            adBasicDataForm: {
              adTitle: 'fdsf',
              adDescription: 'sdfsdf',
              campaignDuration: {
                start: '2023-05-01T22:00:00.000Z',
                end: '2023-05-01T22:00:00.000Z',
              },
            },
            targetAdServicesForm: {
              google: false,
              bing: false,
              amazon: false,
              facebook: true,
              booking: true,
            },
          },
        ],
      },
    ];

    jest.spyOn(adService, 'updateRoomAds');
    adService.getRoomsData();
    adService.updateRoomAds(mockedData[0]);
    let resp: RoomInterface[] = [];
    adService.roomsList$.subscribe((data) => (resp = data));

    expect(mockData[0].roomAds).toEqual(resp[0].roomAds);
  });
});
