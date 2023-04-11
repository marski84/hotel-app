import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { RoomsListComponent } from './rooms-list/rooms-list.component';
import { AdminComponent } from '../admin/admin/admin.component';
import { AdvertisementAuthGuardService } from '../auth/auth/advertisement-auth-guard.service';

const routes: Route[] = [
  { path: 'rooms-list', component: RoomsListComponent },
  {
    path: 'rooms-list/advertisement-form',
    component: AdminComponent,
    canActivate: [AdvertisementAuthGuardService], // lazy loading | standaloneComponent +  guard
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoomsRoutingModule {}
