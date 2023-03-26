import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-ad-basic-data-form',
  templateUrl: './ad-basic-data-form.component.html',
  styleUrls: ['./ad-basic-data-form.component.scss'],
})
export class AdBasicDataFormComponent implements OnInit {
  @Input() formName: any;

  get adTitleCtrl() {
    return this.formName.get('adTitle') as FormControl;
  }

  get adDescriptionCtrl() {
    return this.formName.get('adDescription') as FormControl;
  }

  get campaignDurationCtrl() {
    return this.formName.get('campaignDuration') as FormGroup;
  }

  get campaignDurationStartDateCtrl() {
    return this.campaignDurationCtrl.get('start') as FormControl;
  }

  get campaignDurationEndDateCtrl() {
    return this.campaignDurationCtrl.get('end') as FormControl;
  }

  constructor() {}

  ngOnInit(): void {}

  handleSubmit(formName: any) {
    console.log(formName);
  }
}
