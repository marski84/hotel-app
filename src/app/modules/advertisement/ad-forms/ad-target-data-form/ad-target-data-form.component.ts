import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'app-ad-target-data-form',
  templateUrl: './ad-target-data-form.component.html',
  styleUrls: ['./ad-target-data-form.component.scss'],
})
export class AdTargetDataFormComponent implements OnInit {
  @Input() formName!: UntypedFormGroup;
  @Output() formDataEmitted = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  get googleCtrl() {
    return this.formName.get('google') as UntypedFormControl;
  }
  get bingCtrl() {
    return this.formName.get('bing') as UntypedFormControl;
  }
  get amazonCtrl() {
    return this.formName.get('amazon') as UntypedFormControl;
  }
  get facebookCtrl() {
    return this.formName.get('facebook') as UntypedFormControl;
  }
  get bookingCtrl() {
    return this.formName.get('booking') as UntypedFormControl;
  }

  handleSubmit() {
    if (!this.formName.valid) {
      return;
    }
    const formValue = this.formName.value;
    formValue.stepNumber = 2;
    this.formDataEmitted.emit(formValue);
  }
}



