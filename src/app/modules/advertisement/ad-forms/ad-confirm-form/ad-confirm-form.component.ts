import { Component, OnInit } from '@angular/core';
import { AdvertisementService } from '../../advertisement.service';
import { filter, map, take, tap } from 'rxjs';
import { RoomInterface } from 'src/app/modules/shared/models/room.interface';

@Component({
  selector: 'app-ad-confirm-form',
  templateUrl: './ad-confirm-form.component.html',
  styleUrls: ['./ad-confirm-form.component.scss'],
})
export class AdConfirmFormComponent implements OnInit {
  roomsWithAds$ = this.adService.roomsList$.pipe(
    // take(1),
    map((roomsList) => this.prepareRoomList(roomsList))
  );

  constructor(private adService: AdvertisementService) {}

  ngOnInit(): void {}

  private prepareRoomList(roomsList: RoomInterface[]) {
    return roomsList.filter((room: RoomInterface) => room.roomAds.length > 0);
  }

  handleSelectedRoomsAdUpdate() {
    this.adService.roomsList$
      .pipe(
        // take(1),
        map((roomsList) => this.prepareRoomList(roomsList)),
        map((roomsList) => this.adService.postRoomsWithAds(roomsList))
      )
      .subscribe();
  }
}
