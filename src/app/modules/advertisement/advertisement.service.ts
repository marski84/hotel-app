import { Injectable } from '@angular/core';
import { RoomsService } from '../rooms/rooms.service';
import { BehaviorSubject, map, tap } from 'rxjs';
import { RoomStateEnum } from '../shared/models/room-state.enum';
import { RoomInterface } from '../shared/models/room.interface';

@Injectable({
  providedIn: 'root',
})
export class AdvertisementService {
  private roomsList!: RoomInterface[];

  readonly roomsList$: BehaviorSubject<RoomInterface[]> = new BehaviorSubject(
    this.roomsList
  );

  readonly selectedAdProviders$: BehaviorSubject<any> = new BehaviorSubject([]);

  constructor(private roomService: RoomsService) {}

  getRoomsData() {
    this.roomService.getData();
    this.roomService.data$
      .pipe(
        map((data) => this.handleFilterRoomList(data)),
        tap((filteredData) => (this.roomsList = filteredData)),
        tap(() => this.roomsList$.next(this.roomsList))
      )
      .subscribe();
  }

  updateRoomAds(room: RoomInterface) {
    if (!room) {
      return;
    }
    const roomIndex = this.roomsList.findIndex(
      (roomInList) => roomInList.roomNumber === room.roomNumber
    );
    this.roomService[roomIndex] = room;
    this.roomsList$.next(this.roomsList);

    console.log(this.roomsList);
  }

  private handleFilterRoomList(roomList: RoomInterface[]) {
    const result = roomList.filter(
      (room) => room.roomState === RoomStateEnum.CLEAN
    );
    return result;
  }

  resetRoomsData() {
    this.roomsList = [];
    this.getRoomsData();
    this.selectedAdProviders$.next([]);
  }

  postRoomsWithAds(roomList: RoomInterface[]) {
    roomList.forEach((room) => this.roomService.updateRoomAds(room));
  }
}
