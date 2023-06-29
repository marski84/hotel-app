import { RoomsService } from './rooms.service';
import { RoomStateEnum } from '../shared/models/room-state.enum';
import { RoomInterface } from '../shared/models/room.interface';
import { TestBed } from '@angular/core/testing';

describe('roomsService ', () => {
  let mockRoomsService: RoomsService;
  const mockData: RoomInterface[] = [
    {
      roomNumber: '1',
      pricePerDay: '100',
      roomState: RoomStateEnum.CLEAN,
      markedForCheck: false,
      roomAds: [],
    },
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RoomsService],
    });
    mockRoomsService = TestBed.inject(RoomsService);
    mockRoomsService.hotelRooms = mockData;
  });

  it('should call getHotelRooms method and receive value', () => {
    // given
    const mockRoomSpy = jest.spyOn(mockRoomsService, 'getHotelRooms');
    // when
    mockRoomsService.getHotelRooms();
    let data: RoomInterface[] = [];
    mockRoomsService.getHotelRooms().subscribe((resp) => (data = resp));
    // then
    expect(data).toEqual(mockData);
  });

  it('should updateRoomData be called', () => {
    // given
    const mockRoomSpy = jest.spyOn(mockRoomsService, 'updateRoomData');
    // when
    const updatedMockData = {
      roomNumber: '1',
      pricePerDay: '100',
      roomState: RoomStateEnum.DIRTY,
      markedForCheck: false,
      roomAds: [],
    };
    mockRoomsService.updateRoomData(updatedMockData);
    // then
    expect(mockRoomSpy).toHaveBeenCalled();
  });

  it('should updateRoomData return data', () => {
    // given
    const updatedMockData = {
      roomNumber: '1',
      pricePerDay: '100',
      roomState: RoomStateEnum.DIRTY,
      markedForCheck: false,
      roomAds: [],
    };
    // when
    mockRoomsService.updateRoomData(updatedMockData);
    mockRoomsService.getData();
    // then
    let updatedData;
    mockRoomsService.getHotelRooms().subscribe((data) => (updatedData = data));

    expect(updatedData).toEqual([updatedMockData]);
  });

  it('should updateRoomData method should be called and then return not updated data', () => {
    // give
    const mockRoomSpy = jest.spyOn(mockRoomsService, 'updateRoomData');
    const updatedMockData = {
      roomNumber: 'xxxx',
      pricePerDay: '100',
      roomState: RoomStateEnum.DIRTY,
      markedForCheck: false,
      roomAds: [],
    };
    // when
    mockRoomsService.updateRoomData(updatedMockData);
    expect(mockRoomSpy).toHaveBeenCalled();
    mockRoomsService.getData();
    // then
    let updatedData;
    mockRoomsService.getHotelRooms().subscribe((data) => (updatedData = data));

    expect(updatedData).not.toEqual([updatedMockData]);
  });

  it('should updateRoomAds method should return updated room data', () => {
    // given
    const mockRoomServiceSpy = jest.spyOn(mockRoomsService, 'updateRoomAds');

    const updatedMockData = {
      roomNumber: '1',
      pricePerDay: '100',
      roomState: RoomStateEnum.DIRTY,
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
    };
    // when
    mockRoomsService.updateRoomAds(updatedMockData);
    expect(mockRoomServiceSpy).toHaveBeenCalled();

    mockRoomsService.getData();
    // then
    let resp: RoomInterface[] = [];
    mockRoomsService.data$.subscribe((data) => (resp = data));

    expect(resp).toEqual([updatedMockData]);
  });

  it('should saveData method should be called', () => {
    const mockRoomServiceSpy = jest.spyOn(mockRoomsService, 'saveData');
    // when
    mockRoomsService.saveData(mockData);
    // then
    expect(mockRoomServiceSpy).toHaveBeenCalled();
  });

  it('given invalid data updateRoomAds should throw error', () => {
    // given
    const mockRoomServiceSpy = jest.spyOn(mockRoomsService, 'updateRoomAds');
    const invalidMockData = {
      roomNumber: '0000000',
      pricePerDay: '100',
      roomState: RoomStateEnum.DIRTY,
      markedForCheck: false,
      roomAds: [],
    };
    try {
      // when
      mockRoomsService.updateRoomAds(invalidMockData);
    } catch (error) {
      // then
      expect(mockRoomServiceSpy).toThrowError();
    }
  });
});
