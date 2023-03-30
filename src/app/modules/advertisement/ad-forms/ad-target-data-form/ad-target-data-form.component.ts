import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-ad-target-data-form',
  templateUrl: './ad-target-data-form.component.html',
  styleUrls: ['./ad-target-data-form.component.scss'],
})
export class AdTargetDataFormComponent implements OnInit {
  @Input() formName!: FormGroup;

  constructor() {}

  ngOnInit(): void {}

  get googleCtrl() {
    return this.formName.get('google') as FormControl;
  }
  get bingCtrl() {
    return this.formName.get('bing') as FormControl;
  }
  get amazonCtrl() {
    return this.formName.get('amazon') as FormControl;
  }
  get facebookCtrl() {
    return this.formName.get('facebook') as FormControl;
  }
  get bookingCtrl() {
    return this.formName.get('booking') as FormControl;
  }

  handleSubmit(formData) {
    if (this.formName.valid) {
      console.log(formData);
    }
  }
}
