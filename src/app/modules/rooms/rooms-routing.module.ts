import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { RoomsListComponent } from './rooms-list/rooms-list.component';
import { AdminComponent } from '../admin/admin/admin-advertisement.component';
import { AdminGuardFn } from '../auth/auth/admin-guard.fn';

// domena/dashboard/rooms-list/advertisement-form
const routes: Route[] = [
  {
    path: '',
    component: RoomsListComponent,
  },
  {
    path: 'advertisement-form',
    component: AdminComponent,
    canActivate: [AdminGuardFn], // lazy loading | standaloneComponent +  guard
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoomsRoutingModule {}
