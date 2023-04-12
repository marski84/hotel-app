import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'app-ad-basic-data-form',
  templateUrl: './ad-basic-data-form.component.html',
  styleUrls: ['./ad-basic-data-form.component.scss'],
})
export class AdBasicDataFormComponent implements OnInit {
  @Input() formGroup!: UntypedFormGroup;
  @Output() formDataEmitted = new EventEmitter<any>();

  // get adTitleCtrl() {
  //   return this.formName.get('adTitle') as UntypedFormControl;
  // }

  get adDescriptionCtrl() {
    return this.formGroup.get('adDescription') as UntypedFormControl;
  }

  get campaignDurationCtrl() {
    return this.formGroup.get('campaignDuration') as UntypedFormGroup;
  }

  get campaignDurationStartDateCtrl() {
    return this.campaignDurationCtrl.get('start') as UntypedFormControl;
  }

  get campaignDurationEndDateCtrl() {
    return this.campaignDurationCtrl.get('end') as UntypedFormControl;
  }

  constructor() {}

  ngOnInit(): void {}

  handleSubmit() {
    if (!this.formGroup.valid) {
      return;
    }
    const formValue = this.formGroup.value;
    formValue.stepNumber = 1;
    this.formDataEmitted.emit(formValue);
  }
}
