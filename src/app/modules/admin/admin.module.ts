import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';
import { AdminComponent } from './admin/admin.component';
import { AdvertisementModule } from '../advertisement/advertisement.module';

@NgModule({
  declarations: [AdminComponent],
  imports: [CoreModule, AdvertisementModule],
  exports: [AdminComponent],
})
export class AdminModule {}
