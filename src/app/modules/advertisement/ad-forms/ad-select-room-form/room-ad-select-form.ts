import { Component, Input, OnInit } from '@angular/core';
import { RoomInterface } from '../../../shared/models/room.interface';
import { Observable, map, tap } from 'rxjs';
import { AdvertisementService } from '../../advertisement.service';
import { FormGroup } from '@angular/forms';
import { IadBasicDataForm } from '../models/IadBasicDataForm.interface';
import { ItargetAdServicesForm } from '../models/ItargetAdServicesForm.interface';
import { ItargetAdServices } from '../models/ItargetAdServices.interface';
import { IadvertisementForm } from '../models/IadvertisementForm.interface';
import { IroomAds } from 'src/app/modules/shared/models/roomAds.interface';

@Component({
  selector: 'app-room-ad-select-form',
  templateUrl: './room-ad-select-form.html',
  styleUrls: ['./room-ad-select-form.scss'],
})
export class AdRoomSelectFormComponent implements OnInit {
  @Input() mainForm!: FormGroup<IadvertisementForm>;

  roomsData$: Observable<RoomInterface[]> = this.adService.roomsList$;
  selectedAdProviders$!: Observable<string[]>;

  roomAdPresent = false;

  constructor(private adService: AdvertisementService) {}

  ngOnInit(): void {
    this.mainForm.valueChanges
      // .pipe(tap((value) => console.log(value)))
      .subscribe();

    this.selectedAdProviders$ =
      this.mainForm.controls.targetAdServicesForm.valueChanges.pipe(
        // tap((value) => console.log(value)),
        map((adProvidersData) =>
          this.prepareSelectedAdProviders(adProvidersData)
        )
      );
  }

  private prepareSelectedAdProviders(providers: Partial<ItargetAdServices>) {
    const selectedAds = Object.keys(providers).filter(
      (key) => providers[key] === true
    );

    return selectedAds;
  }

  handlePublishAds(room: RoomInterface) {
    if (this.mainForm.value) {
      room.roomAds.push(this.mainForm.value as IroomAds);
      this.adService.updateRoomAds(room);
      if (!this.roomAdPresent) {
        this.roomAdPresent = true;
      }
    }
  }

  handleSubmit() {}
}
