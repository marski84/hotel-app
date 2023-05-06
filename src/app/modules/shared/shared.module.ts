import { NgModule } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { ToastrModule } from 'ngx-toastr';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [NavComponent],
  imports: [MaterialModule, ToastrModule.forRoot()],
  exports: [MaterialModule, NavComponent],
})
export class SharedModule {}
