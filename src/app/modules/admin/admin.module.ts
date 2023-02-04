import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [AdminComponent],
  imports: [CoreModule],
})
export class AdminModule {}
