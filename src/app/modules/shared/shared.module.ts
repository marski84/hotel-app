import { NgModule } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { ToastrModule } from 'ngx-toastr';
import { NavComponent } from './nav/nav.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [NavComponent],
  imports: [MaterialModule, CoreModule, ToastrModule.forRoot()],
  exports: [MaterialModule, NavComponent],
})
export class SharedModule {}
