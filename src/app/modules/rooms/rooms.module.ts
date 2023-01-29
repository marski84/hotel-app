import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { RoomsComponent } from './rooms/rooms.component';

@NgModule({
  declarations: [RoomsComponent],
  imports: [CoreModule, SharedModule],
  exports: [RoomsComponent],
})
export class RoomsModule {}
