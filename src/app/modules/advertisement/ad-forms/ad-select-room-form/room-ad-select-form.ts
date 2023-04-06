import {
  AfterViewInit,
  Component,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { RoomInterface } from '../../../shared/models/room.interface';
import { Observable } from 'rxjs';
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
    this.adService.formData.filter((data) => data.stepNumber === 2);
    console.log(this.adService.formData);
  }

  handlePublishAds(room: RoomInterface) {
    // console.log(roomNumber);
    room.roomAds = this.adService.formData;
    console.log(room);

    // this.adService.updateRoomAds(roomNumber);
  }

  // handleSubmit() {
  //   if (!this.formName.valid) {
  //     return;
  //   }
  //   console.log(this.formName.value);
  // }
}
