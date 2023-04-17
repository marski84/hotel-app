import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  Validators,
} from '@angular/forms';

import { AdvertisementService } from '../advertisement.service';
import { requireCheckboxesToBeCheckedValidator } from '../ad-forms/custom-validators/requireCheckboxesToBeCheckedValidator';
import { IadBasicDataForm } from '../ad-forms/models/IadBasicDataForm.interface';
import { IadBasicData } from '../ad-forms/models/IadBasicData.interface';
import { ItargetAdServices } from '../ad-forms/models/ItargetAdServices.interface';
import { ItargetAdServicesForm } from '../ad-forms/models/ItargetAdServicesForm.interface';

@Component({
  selector: 'app-ad-multistep-form',
  templateUrl: './ad-multistep-form.component.html',
  styleUrls: ['./ad-multistep-form.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { showError: true },
    },
  ],
})
export class AdMultistepFormComponent implements OnInit {
  // * Pierwszy wymagany krok: tytuł reklamy, opis, czas trwania reklamy. Czas trwania podajemy od-do za pomocą materialowych kontrolek z sensowną walidacją.

  roomsList!: any;

  basicAdData: FormGroup<IadBasicDataForm> = this.fb.group({
    adTitle: ['', Validators.required],
    adDescription: ['', Validators.required],

    campaignDuration: this.fb.group({
      start: ['', Validators.required],
      end: ['', Validators.required],
    }),
  });

  targetAdServices: FormGroup<ItargetAdServicesForm> = this.fb.group(
    {
      google: [false],
      bing: [false],
      amazon: [false],
      facebook: [false],
      booking: [false],
    },
    { validators: [requireCheckboxesToBeCheckedValidator()] }
  );

  roomAdSelection = this.fb.group({});

  get roomAdSelectionCtrl() {
    return this.roomAdSelection as FormGroup;
  }

  constructor(
    private fb: NonNullableFormBuilder,
    private adService: AdvertisementService
  ) {}
  ngOnInit(): void {
    console.log('oninit');
    this.adService.getRoomsData();
  }

  handleFormDataSubmit(formData: {
    stepNumber: number;
    adBasicData?: IadBasicData;
    providers?: ItargetAdServices;
  }) {
    console.log(formData);
    this.adService.handleFormSubmit(formData);
  }

  handleRoomDataReset() {
    console.log('reset');
    this.adService.resetRoomsData();
  }
}
