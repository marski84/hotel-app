import { RoomsService } from '../rooms/rooms.service';
import { Injectable } from '@angular/core';
import { RoomStateEnum } from '../shared/models/room-state.enum';
import { RoomInterface } from '../shared/models/room.interface';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable()
export default class RoomServiceStub extends RoomsService {
  protected override data = new BehaviorSubject<any>([]);

  override readonly data$ = this.data.asObservable();

  constructor() {
    super();
  }

  override hotelRooms: RoomInterface[] = [
    {
      roomNumber: '1',
      pricePerDay: '100',
      roomState: RoomStateEnum.CLEAN,
      markedForCheck: false,
      roomAds: [],
    },
  ];

  override getData(): void {
    const roomsData = JSON.stringify(this.hotelRooms);
    if (roomsData) {
      this.data.next(JSON.parse(roomsData));
      return;
    }
    this.saveData(this.hotelRooms);
  }

  override saveData(data: RoomInterface[]): Observable<boolean> {
    // console.log(data);
    const rooms = JSON.stringify(data);

    window.localStorage.setItem('hotel-rooms', rooms);
    return of(true);
  }

  override getHotelRooms() {
    return of(this.hotelRooms);
  }

  override updateRoomData(updateData: RoomInterface) {
    console.log(updateData);

    const roomIndex = this.findRoomIndex(updateData);
    if (roomIndex === -1) {
      return;
    }
    this.updateRoomState(roomIndex, updateData);
  }

  override updateRoomAds(updateData: RoomInterface) {
    console.log(updateData);

    const roomIndex = this.findRoomIndex(updateData);
    if (roomIndex === -1) {
      throw new Error('Room not found');
    }
    this.hotelRooms[roomIndex].roomAds = updateData.roomAds;
    this.saveData(this.hotelRooms);
  }

  override findRoomIndex(updateData: RoomInterface) {
    return this.hotelRooms.findIndex(
      (room) => room.roomNumber === updateData.roomNumber
    );
  }

  override updateRoomState(roomIndex: number, updateData: RoomInterface) {
    this.hotelRooms[roomIndex].roomState = updateData.roomState;
    this.saveData(this.hotelRooms);
  }
}
