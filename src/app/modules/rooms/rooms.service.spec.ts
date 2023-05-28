import { BehaviorSubject, of } from 'rxjs';
import { RoomsService } from './rooms.service';
import { RoomStateEnum } from '../shared/models/room-state.enum';
import { RoomInterface } from '../shared/models/room.interface';

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
    mockRoomsService = new RoomsService();
    mockRoomsService.hotelRooms = mockData;
  });

  it('it should call getHotelRooms method and receive value', () => {
    const mockRoomSpy = jest.spyOn(mockRoomsService, 'getHotelRooms');
    mockRoomsService.getHotelRooms();
    let data: RoomInterface[] = [];
    mockRoomsService.getHotelRooms().subscribe((resp) => (data = resp));
    expect(mockRoomSpy).toHaveBeenCalled();
    expect(data).toEqual(mockData);
  });

  it('updateRoomData given valid data should be called and then it should return valid data', () => {
    const mockRoomSpy = jest.spyOn(mockRoomsService, 'updateRoomData');
    const getDataSpy = jest.spyOn(mockRoomsService, 'saveData');

    const updatedMockData = {
      roomNumber: '1',
      pricePerDay: '100',
      roomState: RoomStateEnum.DIRTY,
      markedForCheck: false,
      roomAds: [],
    };

    mockRoomsService.updateRoomData(updatedMockData);
    expect(mockRoomSpy).toHaveBeenCalled();
    mockRoomsService.getData();
    expect(getDataSpy).toHaveBeenCalled();

    let updatedData;
    mockRoomsService.getHotelRooms().subscribe((data) => (updatedData = data));

    expect(updatedData).toEqual([updatedMockData]);
  });

  it('given fake data updateRoomData method should be called and then return not updated data', () => {
    const mockRoomSpy = jest.spyOn(mockRoomsService, 'updateRoomData');

    const updatedMockData = {
      roomNumber: 'xxxx',
      pricePerDay: '100',
      roomState: RoomStateEnum.DIRTY,
      markedForCheck: false,
      roomAds: [],
    };

    mockRoomsService.updateRoomData(updatedMockData);
    expect(mockRoomSpy).toHaveBeenCalled();
    mockRoomsService.getData();

    let updatedData;
    mockRoomsService.getHotelRooms().subscribe((data) => (updatedData = data));

    expect(updatedData).not.toEqual([updatedMockData]);
  });

  it('given valid roomAd data updateRoomAds method should be called and then it should return updated room data', () => {
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

    mockRoomsService.updateRoomAds(updatedMockData);
    expect(mockRoomServiceSpy).toHaveBeenCalled();

    mockRoomsService.getData();
    let resp: RoomInterface[] = [];
    mockRoomsService.data$.subscribe((data) => (resp = data));

    expect(resp).toEqual([updatedMockData]);
  });

  it('given valid data saveData method should be called', () => {
    const mockRoomServiceSpy = jest.spyOn(mockRoomsService, 'saveData');
    mockRoomsService.saveData(mockData);
    expect(mockRoomServiceSpy).toHaveBeenCalled();
  });

  it('given invalid data updateRoomAds should throw error', () => {
    const mockRoomServiceSpy = jest.spyOn(mockRoomsService, 'updateRoomAds');
    const invalidMockData = {
      roomNumber: '0000000',
      pricePerDay: '100',
      roomState: RoomStateEnum.DIRTY,
      markedForCheck: false,
      roomAds: [],
    };
    try {
      mockRoomsService.updateRoomAds(invalidMockData);
    } catch (error) {
      expect(mockRoomServiceSpy).toThrowError();
    }
  });
});
