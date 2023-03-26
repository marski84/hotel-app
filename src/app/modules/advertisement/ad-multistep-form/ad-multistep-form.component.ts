import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

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

  basicAdData = this.fb.group({
    adTitle: ['', Validators.required],
    adDescription: ['', Validators.required],

    campaignDuration: this.fb.group({
      start: ['', Validators.required],
      end: ['', Validators.required],
    }),
  });

  secondFormGroup = this.fb.group({
    secondCtrl: ['', Validators.required],
  });

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

  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {}

  log() {
    console.log(this.basicAdData.value['campaignDuration']);
  }
}
