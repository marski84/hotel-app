import { NgModule, TemplateRef } from '@angular/core';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { RoomsListComponent } from './rooms-list/rooms-list.component';
import { RoomViewComponent } from './room-view/room-view.component';
import { RoomsRoutingModule } from './rooms-routing.module';
import { AdminActionsComponent } from './rooms-list/admin-actions/admin-actions.component';
import { WorkerActionsComponent } from './rooms-list/worker-actions/worker-actions.component';
import { UserRoleViewDirective } from './rooms-list/user-role-view.directive';
import { RoomsService } from './rooms.service';
import { AbstractApiHandlerService } from 'src/app/abstract-api-handler-service';
import { AdminModule } from '../admin/admin.module';

@NgModule({
  declarations: [
    RoomsListComponent,
    RoomViewComponent,
    AdminActionsComponent,
    WorkerActionsComponent,
    UserRoleViewDirective,
  ],
  imports: [
    SharedModule,
    RoomsRoutingModule,
    CoreModule,
    AdminModule,
    // AdvertisementModule,
  ],
  exports: [RoomsListComponent],
  providers: [{ provide: AbstractApiHandlerService, useClass: RoomsService }],
})
export class RoomsModule {}
