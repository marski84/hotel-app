import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-ad-basic-data-form',
  templateUrl: './ad-basic-data-form.component.html',
  styleUrls: ['./ad-basic-data-form.component.scss'],
})
export class AdBasicDataFormComponent implements OnInit {
  @Input() formName!: FormGroup;
  @Output() formDataEmitted = new EventEmitter<any>();

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

  handleSubmit() {
    if (!this.formName.valid) {
      return;
    }
    const formValue = this.formName.value;
    formValue.stepNumber = 1;
    this.formDataEmitted.emit(formValue);
  }
}
