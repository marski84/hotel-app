import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { MaterialModule } from '../material/material.module';
import { AdFormContainerComponent } from './ad-form-container/ad-form-container.component';
import { AdMultistepFormComponent } from './ad-multistep-form/ad-multistep-form.component';
import { AdBasicDataFormComponent } from './ad-forms/ad-basic-data-form/ad-basic-data-form.component';
import { AdConfirmFormComponent } from './ad-forms/ad-confirm-form/ad-confirm-form.component';
import { AdSelectRoomFormComponent } from './ad-forms/ad-select-room-form/ad-select-room-form.component';
import { AdTargetDataFormComponent } from './ad-forms/ad-target-data-form/ad-target-data-form.component';

@NgModule({
  declarations: [
    AdFormContainerComponent,
    AdMultistepFormComponent,
    AdBasicDataFormComponent,
    AdTargetDataFormComponent,
    AdSelectRoomFormComponent,
    AdConfirmFormComponent,
  ],
  imports: [CoreModule, MaterialModule],
  exports: [AdFormContainerComponent],
})
export class AdvertisementModule {}
