import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';

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
];
@NgModule({
  declarations: [],
  imports: [materialModules],
  exports: [materialModules],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'pl-PL' }],
})
export class MaterialModule {}
