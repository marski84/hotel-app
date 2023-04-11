import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { AdvertisementModule } from '../../advertisement/advertisement.module';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  // providers: [
  //   {
  //     provide: STEPPER_GLOBAL_OPTIONS,
  //     useValue: { showError: true },
  //   },
  // ],
  standalone: true,
  imports: [AdvertisementModule],
})
export class AdminComponent implements OnInit {
  constructor(private fb: UntypedFormBuilder) {}

  ngOnInit(): void {}
}
