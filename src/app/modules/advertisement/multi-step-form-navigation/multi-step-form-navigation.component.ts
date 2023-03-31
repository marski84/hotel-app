import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-multi-step-form-navigation',
  templateUrl: './multi-step-form-navigation.component.html',
  styleUrls: ['./multi-step-form-navigation.component.scss'],
})
export class MultiStepFormNavigationComponent implements OnInit {
  @Input() canNavigateBack?: boolean = true;
  @Input() canNavigateForward?: boolean = true;
  @Input() data?: FormGroup;

  constructor() {}

  ngOnInit(): void {}

  handleFormDataSave() {
    console.log(this.data);
  }
}
