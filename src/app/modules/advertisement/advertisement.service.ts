import { Injectable } from '@angular/core';
import { RoomsService } from '../rooms/rooms.service';
import { filter, map, of, tap } from 'rxjs';
import { RoomStateEnum } from '../shared/models/room-state.enum';
import { RoomInterface } from '../shared/models/room.interface';

@Injectable({
  providedIn: 'root',
})
export class AdvertisementService {
  roomsList!: RoomInterface[];

  constructor(private roomService: RoomsService) {}

  getRoomsData() {
    console.log('ad servide getRooms');

    this.roomService.data$
      .pipe(
        map((data) => this.handleFilterRoomList(data)),
        tap((filteredData) => (this.roomsList = filteredData)),
        tap((data) => console.log(data))
      )
      .subscribe();
    this.roomService.getData();

    return of(this.roomsList);
  }

  handleFilterRoomList(roomList: RoomInterface[]) {
    const result = roomList.filter(
      (room) => room.roomState === RoomStateEnum.CLEAN
    );
    return result;
  }
}
