import { Injectable } from '@angular/core';
import { RoomInterface } from '../shared/models/room.interface';
import { RoomStateEnum } from '../shared/models/room-state.enum';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RoomsService {
  hotelRooms: RoomInterface[] = [
    { roomNumber: '1', pricePerDay: '100', roomState: RoomStateEnum.CLEAN },
    { roomNumber: '2', pricePerDay: '250', roomState: RoomStateEnum.DIRTY },
    {
      roomNumber: '3',
      pricePerDay: '400',
      roomState: RoomStateEnum.NEEDS_INSPECTION,
    },
    {
      roomNumber: '4',
      pricePerDay: '150',
      roomState: RoomStateEnum.NEEDS_INSPECTION,
    },
    { roomNumber: '5', pricePerDay: '800', roomState: RoomStateEnum.RESERVED },
    { roomNumber: '6', pricePerDay: '700', roomState: RoomStateEnum.CLEAN },
    { roomNumber: '7', pricePerDay: '600', roomState: RoomStateEnum.DIRTY },
    { roomNumber: '8', pricePerDay: '300', roomState: RoomStateEnum.RESERVED },
    { roomNumber: '9', pricePerDay: '220', roomState: RoomStateEnum.CLEAN },
    { roomNumber: '10', pricePerDay: '175', roomState: RoomStateEnum.RESERVED },
    {
      roomNumber: '11',
      pricePerDay: '1000',
      roomState: RoomStateEnum.RESERVED,
    },
  ];

  constructor() {}

  getHotelRooms() {
    return of(this.hotelRooms);
  }
}
