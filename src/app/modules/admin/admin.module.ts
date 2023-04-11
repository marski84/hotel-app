import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';
import { AdminComponent } from './admin/admin.component';
import { AdvertisementModule } from '../advertisement/advertisement.module';

@NgModule({
  declarations: [],
  imports: [
    CoreModule,
    // AdvertisementModule
  ],
  exports: [],
})
export class AdminModule {}
