import { Injectable } from '@angular/core';
import { RoomsService } from '../rooms/rooms.service';
import { BehaviorSubject, filter, map, of, tap } from 'rxjs';
import { RoomStateEnum } from '../shared/models/room-state.enum';
import { RoomInterface } from '../shared/models/room.interface';

@Injectable({
  providedIn: 'root',
})
export class AdvertisementService {
  private roomsList!: RoomInterface[];

  formData: [] = [];

  readonly roomsList$: BehaviorSubject<RoomInterface[]> = new BehaviorSubject(
    this.roomsList
  );

  constructor(private roomService: RoomsService) {}

  getRoomsData() {
    console.log('ad servide getRooms');
    this.roomService.getData();
    this.roomService.data$
      .pipe(
        map((data) => this.handleFilterRoomList(data)),
        tap((filteredData) => (this.roomsList = filteredData)),
        tap(() => this.roomsList$.next(this.roomsList))
      )
      .subscribe();
  }

  private handleFilterRoomList(roomList: RoomInterface[]) {
    const result = roomList.filter(
      (room) => room.roomState === RoomStateEnum.CLEAN
    );
    return result;
  }
}
