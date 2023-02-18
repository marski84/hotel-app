import { Injectable } from '@angular/core';
import { RoomInterface } from '../shared/models/room.interface';
import { RoomStateEnum } from '../shared/models/room-state.enum';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RoomsService {
  hotelRooms: RoomInterface[] = [
    {
      roomNumber: '1',
      pricePerDay: '100',
      roomState: RoomStateEnum.CLEAN,
      markedForCheck: false,
    },
    {
      roomNumber: '2',
      pricePerDay: '250',
      roomState: RoomStateEnum.DIRTY,
      markedForCheck: false,
    },
    {
      roomNumber: '3',
      pricePerDay: '400',
      roomState: RoomStateEnum.NEEDS_INSPECTION,
      markedForCheck: false,
    },
    {
      roomNumber: '4',
      pricePerDay: '150',
      roomState: RoomStateEnum.NEEDS_INSPECTION,
      markedForCheck: false,
    },
    {
      roomNumber: '5',
      pricePerDay: '800',
      roomState: RoomStateEnum.RESERVED,
      markedForCheck: false,
    },
    {
      roomNumber: '6',
      pricePerDay: '700',
      roomState: RoomStateEnum.CLEAN,
      markedForCheck: false,
    },
    {
      roomNumber: '7',
      pricePerDay: '600',
      roomState: RoomStateEnum.DIRTY,
      markedForCheck: false,
    },
    {
      roomNumber: '8',
      pricePerDay: '300',
      roomState: RoomStateEnum.RESERVED,
      markedForCheck: false,
    },
    {
      roomNumber: '9',
      pricePerDay: '220',
      roomState: RoomStateEnum.CLEAN,
      markedForCheck: false,
    },
    {
      roomNumber: '10',
      pricePerDay: '175',
      roomState: RoomStateEnum.RESERVED,
      markedForCheck: false,
    },
    {
      roomNumber: '11',
      pricePerDay: '1000',
      roomState: RoomStateEnum.RESERVED,
      markedForCheck: false,
    },
  ];

  constructor() {}

  getHotelRooms() {
    return of(this.hotelRooms);
  }

  updateRoomData(updateData: RoomInterface) {
    console.log(updateData);
    const roomIndex = this.findRoomIndex(updateData);
    if (roomIndex === -1) {
      return;
    }
    this.updateRoomState(roomIndex, updateData);
  }

  private findRoomIndex(updateData: RoomInterface) {
    return this.hotelRooms.findIndex(
      (room) => room.roomNumber === updateData.roomNumber
    );
  }

  private updateRoomState(roomIndex: number, updateData: RoomInterface) {
    this.hotelRooms[roomIndex].roomState = updateData.roomState;
  }
}
