import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  UntypedFormControl,
  UntypedFormGroup,
  FormGroup,
} from '@angular/forms';
import { ItargetAdServices } from '../models/ItargetAdServices.interface';

@Component({
  selector: 'app-ad-target-data-form',
  templateUrl: './ad-target-data-form.component.html',
  styleUrls: ['./ad-target-data-form.component.scss'],
})
export class AdTargetDataFormComponent implements OnInit {
  @Input() formGroup!: FormGroup<ItargetAdServices>;
  @Output() formDataEmitted = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  handleSubmit() {
    // if (!this.formName.valid) {
    //   return;
    // }
    const formValue = this.formGroup.value;
    formValue.stepNumber = 2;
    this.formDataEmitted.emit(formValue);
  }
}
