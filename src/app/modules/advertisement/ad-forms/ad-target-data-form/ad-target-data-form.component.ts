import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  UntypedFormControl,
  UntypedFormGroup,
  FormGroup,
} from '@angular/forms';
import { ItargetAdServicesForm } from '../models/ItargetAdServicesForm.interface';

@Component({
  selector: 'app-ad-target-data-form',
  templateUrl: './ad-target-data-form.component.html',
  styleUrls: ['./ad-target-data-form.component.scss'],
})
export class AdTargetDataFormComponent implements OnInit {
  @Input() formGroup!: FormGroup<ItargetAdServicesForm>;
  @Output() formDataEmitted = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  handleSubmit() {
    // if (!this.formName.valid) {
    //   return;
    // }

    const formValue = this.formGroup.value;

    const adServices = new Object({ stepNumber: 2, providers: formValue });

    this.formDataEmitted.emit(adServices);
  }
}
