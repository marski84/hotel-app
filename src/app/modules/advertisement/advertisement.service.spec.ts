import { TestBed } from '@angular/core/testing';
import { RoomsService } from '../rooms/rooms.service';
import { AdvertisementService } from './advertisement.service';
import { BehaviorSubject, Subject, of } from 'rxjs';
import { RoomStateEnum } from '../shared/models/room-state.enum';
import { RoomInterface } from '../shared/models/room.interface';

describe('advertisement service unit test', () => {
  let service: AdvertisementService;

  const validMockData: RoomInterface[] = [
    {
      roomNumber: '1',
      pricePerDay: '100',
      roomState: RoomStateEnum.CLEAN,
      markedForCheck: false,
      roomAds: [],
    },
  ];
  const roomServiceDataMock$ = new Subject();

  let mockRoomService = {
    getData: jest.fn(),
    saveData: jest.fn(),
    hotelRooms: [validMockData],
    updateRoomData: jest.fn(),
    updateRoomAds: jest.fn(),
    findRoomIndex: jest.fn(),
    updateRoomState: jest.fn().mockReturnValue(of(validMockData)),
    data: new BehaviorSubject(validMockData),
    data$: new BehaviorSubject(validMockData),
  };
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AdvertisementService,
        { provide: RoomsService, useValue: mockRoomService },
      ],
    });

    service = TestBed.inject(AdvertisementService);
  });

  it('initially it should create adService instance', () => {
    expect(service).toBeTruthy();
    expect(service).toBeInstanceOf(AdvertisementService);
  });

  it('should getRoomsData provide roomsData', () => {
    // given
    mockRoomService.getData.mockReturnValue(
      mockRoomService.data$.next(validMockData)
    );
    // when
    service.getRoomsData();
    // then
    expect(service.roomsList$.getValue()).toEqual(validMockData);
  });

  it('should updateRoomAds update ad data', () => {
    // given
    const updatedData = {
      roomNumber: '1',
      pricePerDay: '100',
      roomState: RoomStateEnum.CLEAN,
      markedForCheck: false,
      roomAds: [
        {
          adBasicDataForm: {
            adTitle: 'fsdf',
            adDescription: 'sf',
            campaignDuration: {
              start: '2023-06-13T22:00:00.000Z',
              end: '2023-06-15T22:00:00.000Z',
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
    };

    mockRoomService.getData.mockReturnValue(
      mockRoomService.data$.next(validMockData)
    );
    // when
    service.getRoomsData();
    service.updateRoomAds(updatedData);
    // then
    expect(service.roomsList$.getValue()).toEqual([updatedData]);
  });

  it('should updateRoomAds throw when updated room is not found', () => {
    // given
    const updatedData = {
      roomNumber: '1111',
      pricePerDay: '100',
      roomState: RoomStateEnum.CLEAN,
      markedForCheck: false,
      roomAds: [
        {
          adBasicDataForm: {
            adTitle: 'fsdf',
            adDescription: 'sf',
            campaignDuration: {
              start: '2023-06-13T22:00:00.000Z',
              end: '2023-06-15T22:00:00.000Z',
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
    };

    mockRoomService.getData.mockReturnValue(
      mockRoomService.data$.next(validMockData)
    );
    // when
    service.getRoomsData();
    // then
    expect(() => service.updateRoomAds(updatedData)).toThrowError(
      'Room not found'
    );
  });

  it('should updateRoomAds throw error when getData is no called initialy', () => {
    // given
    const updatedData = {
      roomNumber: '1111',
      pricePerDay: '100',
      roomState: RoomStateEnum.CLEAN,
      markedForCheck: false,
      roomAds: [
        {
          adBasicDataForm: {
            adTitle: 'fsdf',
            adDescription: 'sf',
            campaignDuration: {
              start: '2023-06-13T22:00:00.000Z',
              end: '2023-06-15T22:00:00.000Z',
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
    };
    service.resetRoomsData();
    // then
    expect(() => service.updateRoomAds(updatedData)).toThrowError(
      'No valid rooms list!'
    );
  });

  it('should resetRoomsData reset roomsList', () => {
    // given
    mockRoomService.getData.mockReturnValue(
      mockRoomService.data$.next(validMockData)
    );
    service.getRoomsData();
    // when
    service.resetRoomsData();
    // then
    expect(service.roomsList$.getValue()).toEqual([]);
  });

  it('should postRoomsWithAds update room ads', () => {
    // given
    mockRoomService.getData.mockReturnValue(
      mockRoomService.data$.next(validMockData)
    );
    service.getRoomsData();
    // when
    const roomsData = service.roomsList$.getValue();
    service.postRoomsWithAds(roomsData);
    // then

    expect(mockRoomService.updateRoomAds).toHaveBeenCalled();
  });

  // it('should updateRoomAds be called and return nothing', () => {
  //   // given
  //   const spy = jest.spyOn(service, 'updateRoomAds');
  //   // when
  //   service.updateRoomAds();
  //   // then
  //   expect(spy).toBeUndefined();
  // });
});
