import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { RoomsListComponent } from './rooms-list/rooms-list.component';
import { RoomViewComponent } from './room-view/room-view.component';
import { RoomsRoutingModule } from './rooms-routing.module';

@NgModule({
  declarations: [RoomsListComponent, RoomViewComponent],
  imports: [SharedModule, RoomsRoutingModule, CoreModule],
  exports: [RoomsListComponent],
})
export class RoomsModule {}
