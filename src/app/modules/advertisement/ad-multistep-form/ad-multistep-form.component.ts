import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component, OnInit } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';

import { AdvertisementService } from '../advertisement.service';
import { requireCheckboxesToBeCheckedValidator } from '../ad-forms/ad-target-data-form/requireCheckboxesToBeCheckedValidator';

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

  basicAdData = this.fb.group({
    adTitle: ['', Validators.required],
    adDescription: ['', Validators.required],

    campaignDuration: this.fb.group({
      start: ['', Validators.required],
      end: ['', Validators.required],
    }),
  });

  targetAdServices = this.fb.group(
    {
      google: [false],
      bing: [false],
      amazon: [false],
      facebook: [false],
      booking: [false],
    },
    { validators: [requireCheckboxesToBeCheckedValidator()] }
  );

  get adTitleCtrl() {
    return this.basicAdData.get('adTitle') as UntypedFormControl;
  }

  get adDescriptionCtrl() {
    return this.basicAdData.get('adDescription') as UntypedFormControl;
  }

  get campaignDurationStartDateCtrl() {
    return this.basicAdData.get(['campaignDuration', 'start']) as UntypedFormControl;
  }

  get campaignDurationEndDateCtrl() {
    return this.basicAdData.get(['campaignDuration', 'end']) as UntypedFormControl;
  }

  get adTargetCtrl() {
    return this.targetAdServices as UntypedFormGroup;
  }

  get googleCtrl() {
    return this.targetAdServices.get('google') as UntypedFormControl;
  }
  get bingCtrl() {
    return this.targetAdServices.get('bing') as UntypedFormControl;
  }
  get amazonCtrl() {
    return this.targetAdServices.get('amazon') as UntypedFormControl;
  }
  get facebookCtrl() {
    return this.targetAdServices.get('facebook') as UntypedFormControl;
  }
  get bookingCtrl() {
    return this.targetAdServices.get('booking') as UntypedFormControl;
  }

  constructor(
    private fb: UntypedFormBuilder,
    private adService: AdvertisementService
  ) {}
  ngOnInit(): void {
    console.log('oninit');
    this.adService.getRoomsData();
  }

  log() {
    console.log(this.basicAdData.value['campaignDuration']);
  }

  handleFormDataSubmit(formData: any) {
    console.log(formData);
    this.adService.handleFormSubmit(formData);
  }
}
