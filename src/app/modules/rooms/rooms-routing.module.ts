import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { RoomsListComponent } from './rooms-list/rooms-list.component';
import { AdminComponent } from '../admin/admin/admin.component';
import { AdsGuardFn } from '../auth/auth/ads-guard.fn';

// domena/dashboard/rooms-list/advertisement-form
const routes: Route[] = [
  {
    path: '',
    component: RoomsListComponent,
  },
  {
    path: 'advertisement-form',
    component: AdminComponent,
    canActivate: [AdsGuardFn], // lazy loading | standaloneComponent +  guard
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoomsRoutingModule {}
