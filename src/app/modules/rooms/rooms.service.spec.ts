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

  it('it should call updateRoomData method and receive updated value', () => {
    const mockRoomSpy = jest.spyOn(mockRoomsService, 'updateRoomData');

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

    let updatedData;
    mockRoomsService.getHotelRooms().subscribe((data) => (updatedData = data));

    expect(updatedData).toEqual([updatedMockData]);
  });
});
