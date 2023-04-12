import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'app-ad-target-data-form',
  templateUrl: './ad-target-data-form.component.html',
  styleUrls: ['./ad-target-data-form.component.scss'],
})
export class AdTargetDataFormComponent implements OnInit {
  @Input() formGroup!: UntypedFormGroup;
  @Output() formDataEmitted = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  get googleCtrl() {
    return this.formGroup.get('google') as UntypedFormControl;
  }
  get bingCtrl() {
    return this.formGroup.get('bing') as UntypedFormControl;
  }
  get amazonCtrl() {
    return this.formGroup.get('amazon') as UntypedFormControl;
  }
  get facebookCtrl() {
    return this.formGroup.get('facebook') as UntypedFormControl;
  }
  get bookingCtrl() {
    return this.formGroup.get('booking') as UntypedFormControl;
  }

  handleSubmit() {
    // if (!this.formName.valid) {
    //   return;
    // }
    const formValue = this.formGroup.value;
    formValue.stepNumber = 2;
    this.formDataEmitted.emit(formValue);
  }
}
