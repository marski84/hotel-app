import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';
import { MaterialModule } from '../material/material.module';
import { AdFormContainerComponent } from './ad-form-container/ad-form-container.component';
import { AdMultistepFormComponent } from './ad-multistep-form/ad-multistep-form.component';
import { AdBasicDataFormComponent } from './ad-forms/ad-basic-data-form/ad-basic-data-form.component';
import { AdConfirmFormComponent } from './ad-forms/ad-confirm-form/ad-confirm-form.component';
import { AdTargetDataFormComponent } from './ad-forms/ad-target-data-form/ad-target-data-form.component';
import { MultiStepFormNavigationComponent } from './multi-step-form-navigation/multi-step-form-navigation.component';
import { AdRoomSelectFormComponent } from './ad-forms/ad-select-room-form/room-ad-select-form';
import { ViewSelectedAdsPipe } from './pipes/view-selected-ads.pipe';

@NgModule({
  declarations: [
    AdFormContainerComponent,
    AdMultistepFormComponent,
    AdBasicDataFormComponent,
    AdTargetDataFormComponent,
    AdRoomSelectFormComponent,
    AdConfirmFormComponent,
    MultiStepFormNavigationComponent,
    ViewSelectedAdsPipe,
  ],
  imports: [CoreModule, MaterialModule],
  exports: [AdFormContainerComponent],
})
export class AdvertisementModule {}
