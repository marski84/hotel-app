import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { RoomsListComponent } from './rooms-list/rooms-list.component';
import { RoomViewComponent } from './room-view/room-view.component';
import { RoomsRoutingModule } from './rooms-routing.module';
import { AdminActionsComponent } from './rooms-list/admin-actions/admin-actions.component';
import { WorkerActionsComponent } from './rooms-list/worker-actions/worker-actions.component';
import { RoomsService } from './rooms.service';
import { AbstractApiHandlerService } from 'src/app/abstract-api-handler-service';
import { UserRoleViewDirective } from '../auth/user-role-view.directive';
import { ViewSelectedAdsPipe } from '../advertisement/pipes/view-selected-ads.pipe';
import NAV_CONF from '../shared/NAV_CONF';
import { ROOM_NAV } from './rooms-list/ROOM_NAV_CONF';

@NgModule({
  declarations: [
    RoomsListComponent,
    RoomViewComponent,
    AdminActionsComponent,
    WorkerActionsComponent,
  ],
  providers: [
    { provide: AbstractApiHandlerService, useClass: RoomsService },
    { provide: NAV_CONF, useValue: ROOM_NAV },
  ],
  imports: [
    SharedModule,
    RoomsRoutingModule,
    CoreModule,
    UserRoleViewDirective,
    ViewSelectedAdsPipe,
  ],
})
export class RoomsModule {}
