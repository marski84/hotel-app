import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ItargetAdServicesForm } from '../models/ItargetAdServicesForm.interface';

@Component({
  selector: 'app-ad-target-data-form',
  templateUrl: './ad-target-data-form.component.html',
  styleUrls: ['./ad-target-data-form.component.scss'],
})
export class AdTargetDataFormComponent implements OnInit {
  @Input() formGroup!: FormGroup<ItargetAdServicesForm>;

  constructor() {}

  ngOnInit(): void {}
}
