import { Component, OnInit } from '@angular/core';
import { RoomInterface } from '../../../shared/models/room.interface';
import { Observable, tap } from 'rxjs';
import { AdvertisementService } from '../../advertisement.service';

@Component({
  selector: 'app-room-ad-select-form',
  templateUrl: './room-ad-select-form.html',
  styleUrls: ['./room-ad-select-form.scss'],
})
export class AdRoomSelectFormComponent implements OnInit {
  roomsData$: Observable<RoomInterface[]> = this.adService.roomsList$;
  selectedAdProviders$ = this.adService.selectedAdProviders$;

  constructor(private adService: AdvertisementService) {}

  ngOnInit(): void {
    this.selectedAdProviders$
      .pipe(tap((value) => console.log(value)))
      .subscribe();
  }

  handlePublishAds(room: RoomInterface) {
    room.roomAds = this.adService.formData;
    console.log(room);
    this.adService.updateRoomAds(room);
  }
}
