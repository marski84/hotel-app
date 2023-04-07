import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { MatLegacySelectModule as MatSelectModule } from '@angular/material/legacy-select';
import { MatStepperModule } from '@angular/material/stepper';
import { MatLegacyCheckboxModule as MatCheckboxModule } from '@angular/material/legacy-checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
  MatNativeDateModule,
} from '@angular/material/core';
import { DatepickerMaskDirective } from './datepicker-mask.directive';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatDividerModule } from '@angular/material/divider';

const materialModules = [
  ReactiveFormsModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatCardModule,
  MatSelectModule,
  MatStepperModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatMomentDateModule,
  MatDividerModule,
];
@NgModule({
  declarations: [DatepickerMaskDirective],
  imports: [materialModules],
  exports: [materialModules, DatepickerMaskDirective],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'pl-PL' },

    {
      provide: MAT_DATE_FORMATS,
      useValue: {
        parse: {
          dateInput: 'DD/MM/YYYY',
        },
        display: {
          dateInput: 'DD/MM/YYYY',
          monthYearLabel: 'MM YYYY',
          dateA11yLabel: 'DD/MM/YYYY',
          monthYearA11yLabel: 'MM YYYY',
        },
      },
    },
  ],
})
export class MaterialModule {}
