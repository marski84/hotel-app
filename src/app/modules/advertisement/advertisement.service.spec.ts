import { AdvertisementService } from './advertisement.service';
import { RoomsService } from '../rooms/rooms.service';
import { RoomInterface } from '../shared/models/room.interface';
import { RoomStateEnum } from '../shared/models/room-state.enum';
import { TestBed } from '@angular/core/testing';
import RoomServiceStub from './RoomService.stub';

const mockData: RoomInterface[] = [
  {
    roomNumber: '1',
    pricePerDay: '100',
    roomState: RoomStateEnum.CLEAN,
    markedForCheck: false,
    roomAds: [],
  },
];

describe('AdvertisementService unit tests', () => {
  let adService: AdvertisementService;
  let roomsService: RoomsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AdvertisementService,
        { provide: RoomsService, useClass: RoomServiceStub },
      ],
    });

    adService = TestBed.get(AdvertisementService);
    roomsService = TestBed.get(RoomsService);
  });

  it('initially it should create adService instance', () => {
    expect(adService).toBeTruthy();
    expect(adService).toBeInstanceOf(AdvertisementService);
  });

  it('it should call getRoomsData method, subscribe to BehaviourSubject and receive mockData', () => {
    const mockRoomsData: RoomInterface[] = [
      {
        roomNumber: '1',
        pricePerDay: '100',
        roomState: RoomStateEnum.CLEAN,
        markedForCheck: false,
        roomAds: [],
      },
    ];

    let resp: RoomInterface[] = [];
    const adServiceSpy = jest.spyOn(adService, 'getRoomsData');
    adService.getRoomsData();

    adService.roomsList$.subscribe((val) => (resp = val));

    expect(adServiceSpy).toHaveBeenCalled();
    expect(resp).toEqual(mockRoomsData);
  });

  it('it should call updateRoomAds method and return unchanged data', () => {
    jest.spyOn(adService, 'updateRoomAds');
    adService.getRoomsData();
    try {
      adService.updateRoomAds({
        roomNumber: '999999',
        pricePerDay: '100',
        roomState: RoomStateEnum.CLEAN,
        markedForCheck: false,
        roomAds: [],
      });
    } catch (err) {
      let resp: RoomInterface[] = [];
      adService.roomsList$.subscribe((data) => (resp = data));

      expect(resp).toEqual(mockData);
    }
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

  it('it should call resetRoomsData and selectedAdProviders$ observable should emit empty array', () => {
    const methodSpy = jest.spyOn(adService, 'resetRoomsData');
    adService.getRoomsData();
    adService.resetRoomsData();
    expect(methodSpy).toHaveBeenCalled();

    let resp;
    adService.selectedAdProviders$.subscribe((data) => (resp = data));

    expect(resp).toEqual([]);
  });
});
