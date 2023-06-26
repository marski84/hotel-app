import { TestBed } from '@angular/core/testing';
import { RoomsService } from '../rooms/rooms.service';
import RoomServiceStub from './RoomService.stub';
import { AdvertisementService } from './advertisement.service';
import { BehaviorSubject, of } from 'rxjs';
import { RoomStateEnum } from '../shared/models/room-state.enum';
import { RoomInterface } from '../shared/models/room.interface';

describe('advertisement service unit test', () => {
  let mockAdService: AdvertisementService;

  const validMockData: RoomInterface[] = [
    {
      roomNumber: '1',
      pricePerDay: '100',
      roomState: RoomStateEnum.CLEAN,
      markedForCheck: false,
      roomAds: [],
    },
  ];

  let mockRoomService = {
    getData: jest.fn(),
    saveData: jest.fn(),
    hotelRooms: [validMockData],
    getHotelRooms: jest.fn(),
    updateRoomData: jest.fn(),
    updateRoomAds: jest.fn(),
    findRoomIndex: jest.fn(),
    updateRoomState: jest.fn(),
    data: new BehaviorSubject([]),
    data$: of(validMockData),
  };
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AdvertisementService,
        { provide: RoomsService, useValue: mockRoomService },
      ],
    });

    mockAdService = TestBed.inject(AdvertisementService);
  });

  it('initially it should create adService instance', () => {
    expect(mockAdService).toBeTruthy();
    expect(mockAdService).toBeInstanceOf(AdvertisementService);
  });

  it('should call getRoomsData', () => {
    // given
    const adSericeSpy = jest.spyOn(mockAdService, 'getRoomsData');
    // when
    mockAdService.getRoomsData();
    // then
    expect(adSericeSpy).toHaveBeenCalled();
  });

  it('should called getRoomsData provide roomData', () => {
    //  when
    mockAdService.getRoomsData();
    // then
    mockAdService.roomsList$.subscribe((value) =>
      expect(value).toEqual(validMockData)
    );
  });

  it('should called getRoomsData not emit data', () => {
    // given
    const invalidMockData: RoomInterface[] = [
      {
        roomNumber: '1',
        pricePerDay: '100',
        roomState: RoomStateEnum.DIRTY,
        markedForCheck: false,
        roomAds: [],
      },
    ];
    mockRoomService.data$ = of(invalidMockData);
    // when
    mockAdService.getRoomsData();
    // then
    mockAdService.roomsList$.subscribe((value) =>
      expect(value).not.toEqual(validMockData)
    );
  });

  it('should updateRooms return updated room data', () => {
    // when
    mockRoomService.updateRoomAds(validMockData);
    // then
    mockAdService.roomsList$.subscribe((value) =>
      expect(value).toEqual(validMockData)
    );
  });

  it('should updateRooms throw error', () => {
    // given
    const mockAdServiceSpy = jest.spyOn(mockAdService, 'updateRoomAds');
    const invalidMockData: RoomInterface[] = [
      {
        roomNumber: '99',
        pricePerDay: '100',
        roomState: RoomStateEnum.CLEAN,
        markedForCheck: false,
        roomAds: [],
      },
    ];
    // when
    try {
      mockRoomService.updateRoomAds(invalidMockData);
    } catch (err) {
      // then
      expect(mockAdServiceSpy).toThrowError('Room not found');
    }
  });

  it('should resest roomsList', () => {
    // when
    mockAdService.resetRoomsData();
    // then
    expect(mockRoomService.data$.subscribe((data) => expect(data).toEqual([])));
  });

  it('should resetRoomsData should call selectedAdProviders$ subject and emit empty array', () => {
    // when
    mockAdService.resetRoomsData();
    // then
    mockAdService.selectedAdProviders$.subscribe((data) =>
      expect(data).toEqual([])
    );
  });

  it('should postRoomsWithAds call updateRoomsAds', () => {
    //given
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
    // when
    mockAdService.postRoomsWithAds(mockedData);
    // then
    expect(mockRoomService.updateRoomAds).toHaveBeenCalled();
  });
});
