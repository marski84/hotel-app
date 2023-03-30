import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { RoomsService } from '../../rooms/rooms.service';
import { filter, tap } from 'rxjs';
import { RoomStateEnum } from '../../shared/models/room-state.enum';
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
      google: [''],
      bing: [''],
      amazon: [''],
      facebook: [''],
      booking: [''],
    },
    { validators: [requireCheckboxesToBeCheckedValidator()] }
  );

  get adTitleCtrl() {
    return this.basicAdData.get('adTitle') as FormControl;
  }

  get adDescriptionCtrl() {
    return this.basicAdData.get('adDescription') as FormControl;
  }

  get campaignDurationStartDateCtrl() {
    return this.basicAdData.get(['campaignDuration', 'start']) as FormControl;
  }

  get campaignDurationEndDateCtrl() {
    return this.basicAdData.get(['campaignDuration', 'end']) as FormControl;
  }

  get adTargetCtrl() {
    return this.targetAdServices as FormGroup;
  }

  get googleCtrl() {
    return this.targetAdServices.get('google') as FormControl;
  }
  get bingCtrl() {
    return this.targetAdServices.get('bing') as FormControl;
  }
  get amazonCtrl() {
    return this.targetAdServices.get('amazon') as FormControl;
  }
  get facebookCtrl() {
    return this.targetAdServices.get('facebook') as FormControl;
  }
  get bookingCtrl() {
    return this.targetAdServices.get('booking') as FormControl;
  }

  constructor(
    private fb: FormBuilder,
    private adService: AdvertisementService
  ) {}
  ngOnInit(): void {
    console.log('oninit');
    this.adService.getRoomsData();
  }

  log() {
    console.log(this.basicAdData.value['campaignDuration']);
  }
}
