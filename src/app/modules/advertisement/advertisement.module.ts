import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { MaterialModule } from '../material/material.module';
import { AdFormContainerComponent } from './ad-form-container/ad-form-container.component';
import { AdMultistepFormComponent } from './ad-multistep-form/ad-multistep-form.component';
import { AdBasicInfoComponent } from './forms/ad-basic-info/ad-basic-info.component';

@NgModule({
  declarations: [AdFormContainerComponent, AdMultistepFormComponent, AdBasicInfoComponent],
  imports: [CoreModule, MaterialModule],
  exports: [AdFormContainerComponent],
})
export class AdvertisementModule {}
