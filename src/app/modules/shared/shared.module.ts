import { NgModule } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [],
  imports: [MaterialModule, ToastrModule.forRoot()],
  exports: [MaterialModule],
})
export class SharedModule {}
