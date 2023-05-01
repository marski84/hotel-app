import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardFn } from '../auth/auth/auth-guard.fn';

// domena/dashboard
const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [AuthGuardFn],
  },
  {
    path: 'rooms-list',
    loadChildren: () =>
      import('../rooms/rooms.module').then((m) => m.RoomsModule),
    canActivate: [AuthGuardFn],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
