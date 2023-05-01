import { Component, Input, OnInit } from '@angular/core';
import { RoomInterface } from '../../../shared/models/room.interface';
import { Observable, map, tap } from 'rxjs';
import { AdvertisementService } from '../../advertisement.service';
import { FormGroup } from '@angular/forms';
import { IadBasicDataForm } from '../models/IadBasicDataForm.interface';
import { ItargetAdServicesForm } from '../models/ItargetAdServicesForm.interface';
import { ItargetAdServices } from '../models/ItargetAdServices.interface';
import { IadvertisementForm } from '../models/IadvertisementForm.interface';

@Component({
  selector: 'app-room-ad-select-form',
  templateUrl: './room-ad-select-form.html',
  styleUrls: ['./room-ad-select-form.scss'],
})
export class AdRoomSelectFormComponent implements OnInit {
  @Input() formGroup!: FormGroup; // otypuj na konkretny formGroup
  @Input() mainForm!: IadvertisementForm;
  @Input() basicAdDataForm!: FormGroup<IadBasicDataForm>; // otypuj na konkretny formGroup
  @Input() adTargetDataForm!: FormGroup<ItargetAdServicesForm>; // otypuj na konkretny formGroup
  roomsData$: Observable<RoomInterface[]> = this.adService.roomsList$;
  selectedAdProviders$!: Observable<string[]>;

  roomAdPresent = false;

  constructor(private adService: AdvertisementService) {}

  ngOnInit(): void {
    this.basicAdDataForm.valueChanges
      .pipe(tap((value) => console.log(value)))
      .subscribe();

    this.selectedAdProviders$ = this.adTargetDataForm.valueChanges.pipe(
      tap((value) => console.log(value)),
      map((adProvidersData) => this.prepareSelectedAdProviders(adProvidersData))
    );

    // formGroupFirstStep.filter(isValid).subscribe
  }

  private prepareSelectedAdProviders(providers: Partial<ItargetAdServices>) {
    const selectedAds = Object.keys(providers).filter(
      (key) => providers[key] === true
    );

    return selectedAds;
  }

  handlePublishAds(room: RoomInterface) {
    // room.roomAds = this.adService.formData;
    this.adService.updateRoomAds(room);
    if (!this.roomAdPresent) {
      this.roomAdPresent = true;
    }
  }

  handleSubmit() {}
}
