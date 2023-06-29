import { Injectable } from '@angular/core';
import { RoomsService } from '../rooms/rooms.service';
import { BehaviorSubject, first, map, tap } from 'rxjs';
import { RoomStateEnum } from '../shared/models/room-state.enum';
import { RoomInterface } from '../shared/models/room.interface';

@Injectable({
  providedIn: 'root',
})
export class AdvertisementService {
  readonly roomsList$: BehaviorSubject<RoomInterface[]> = new BehaviorSubject(
    [] as any
  );

  // TODO: co tu sie staneło
  private readonly dataChanged$ = this.roomService.data$
    .pipe(
      map((data) => this.handleFilterRoomList(data)),
      tap((filteredData) => this.roomsList$.next(filteredData))
    )
    .subscribe();

  readonly selectedAdProviders$: BehaviorSubject<any> = new BehaviorSubject([]);

  constructor(private roomService: RoomsService) {}

  getRoomsData() {
    this.roomService.getData();
  }

  updateRoomAds(room: RoomInterface) {
    // if (!room) {
    //   return;
    // }

    const roomsList = this.roomsList$.getValue();

    if (roomsList.length === 0) {
      throw new Error('No valid rooms list!');
    }

    const roomIndex = roomsList.findIndex(
      (roomInList) => roomInList.roomNumber === room.roomNumber
    );

    if (roomIndex === -1) {
      throw new Error('Room not found');
    }

    roomsList[roomIndex] = room;
    return this.roomsList$.next(roomsList);
  }

  private handleFilterRoomList(roomList: RoomInterface[]) {
    const result = roomList.filter(
      (room) => room.roomState === RoomStateEnum.CLEAN
    );
    return result;
  }

  resetRoomsData() {
    this.roomsList$.next([]);
    this.getRoomsData();
    this.selectedAdProviders$.next([]);
  }

  postRoomsWithAds(roomList: RoomInterface[]) {
    roomList.forEach((room) => this.roomService.updateRoomAds(room));
  }
}
