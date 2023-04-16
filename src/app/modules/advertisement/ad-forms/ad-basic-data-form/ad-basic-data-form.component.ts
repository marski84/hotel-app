import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormGroup, UntypedFormControl } from '@angular/forms';
import { IadBasicDataForm } from '../models/IadBasicData.interface';

@Component({
  selector: 'app-ad-basic-data-form',
  templateUrl: './ad-basic-data-form.component.html',
  styleUrls: ['./ad-basic-data-form.component.scss'],
})
export class AdBasicDataFormComponent implements OnInit {
  @Input() formGroup!: FormGroup<IadBasicDataForm>;
  @Output() formDataEmitted = new EventEmitter<any>();

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
