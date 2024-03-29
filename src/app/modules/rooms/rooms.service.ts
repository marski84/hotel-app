import { Injectable } from '@angular/core';
import { RoomInterface } from '../shared/models/room.interface';
import { RoomStateEnum } from '../shared/models/room-state.enum';
import { Observable, of } from 'rxjs';
import { AbstractApiHandlerService } from '../../abstract-api-handler-service';

@Injectable({
  providedIn: 'root',
})
export class RoomsService extends AbstractApiHandlerService {
  hotelRooms: RoomInterface[] = [
    {
      roomNumber: '1',
      pricePerDay: '100',
      roomState: RoomStateEnum.CLEAN,
      markedForCheck: false,
      roomAds: [],
    },
    {
      roomNumber: '2',
      pricePerDay: '250',
      roomState: RoomStateEnum.DIRTY,
      markedForCheck: true,
      roomAds: [],
    },
    {
      roomNumber: '3',
      pricePerDay: '400',
      roomState: RoomStateEnum.NEEDS_INSPECTION,
      markedForCheck: false,
      roomAds: [],
    },
    {
      roomNumber: '4',
      pricePerDay: '150',
      roomState: RoomStateEnum.NEEDS_INSPECTION,
      markedForCheck: false,
      roomAds: [],
    },
    {
      roomNumber: '5',
      pricePerDay: '800',
      roomState: RoomStateEnum.RESERVED,
      markedForCheck: false,
      roomAds: [],
    },
    {
      roomNumber: '6',
      pricePerDay: '700',
      roomState: RoomStateEnum.CLEAN,
      markedForCheck: false,
      roomAds: [],
    },
    {
      roomNumber: '7',
      pricePerDay: '600',
      roomState: RoomStateEnum.DIRTY,
      markedForCheck: false,
      roomAds: [],
    },
    {
      roomNumber: '8',
      pricePerDay: '300',
      roomState: RoomStateEnum.RESERVED,
      markedForCheck: false,
      roomAds: [],
    },
    {
      roomNumber: '9',
      pricePerDay: '220',
      roomState: RoomStateEnum.CLEAN,
      markedForCheck: false,
      roomAds: [],
    },
    {
      roomNumber: '10',
      pricePerDay: '175',
      roomState: RoomStateEnum.RESERVED,
      markedForCheck: false,
      roomAds: [],
    },
    {
      roomNumber: '11',
      pricePerDay: '1000',
      roomState: RoomStateEnum.RESERVED,
      markedForCheck: false,
      roomAds: [],
    },
  ];

  constructor() {
    super();
  }

  getData(): void {
    const roomsData = window.localStorage.getItem('hotel-rooms'); // TODO: hotel-rooms => const lub enum
    if (roomsData) {
      this.data.next(JSON.parse(roomsData));
      return;
    }
    this.saveData(this.hotelRooms);
  }

  saveData(data: RoomInterface[]): Observable<boolean> {
    // console.log(data);
    const rooms = JSON.stringify(data);

    window.localStorage.setItem('hotel-rooms', rooms);
    return of(true);
  }

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

  updateRoomAds(updateData: RoomInterface) {
    console.log(updateData);

    const roomIndex = this.findRoomIndex(updateData);
    if (roomIndex === -1) {
      throw new Error('Room not found');
    }
    this.hotelRooms[roomIndex].roomAds = updateData.roomAds;
    this.saveData(this.hotelRooms);
  }

  protected findRoomIndex(updateData: RoomInterface) {
    return this.hotelRooms.findIndex(
      (room) => room.roomNumber === updateData.roomNumber
    );
  }

  protected updateRoomState(roomIndex: number, updateData: RoomInterface) {
    this.hotelRooms[roomIndex].roomState = updateData.roomState;
    this.saveData(this.hotelRooms);
  }
}
