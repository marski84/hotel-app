import { Injectable } from '@angular/core';
import { RoomsService } from '../rooms/rooms.service';
import { filter, tap } from 'rxjs';
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
        // takeUntil(this.onDestroy$),
        filter((room) => room.roomState === RoomStateEnum.CLEAN),
        tap((data) => console.log(data)),
        tap((roomList) => (this.roomsList = roomList))
      )
      .subscribe();
    this.roomService.getData();
  }
}
