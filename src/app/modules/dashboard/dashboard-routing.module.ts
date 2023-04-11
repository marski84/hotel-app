import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardFn } from '../auth/auth/auth-guard.fn';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [AuthGuardFn],
    // redirectTo: 'rooms-list',
  },
  { path: '', redirectTo: 'rooms-list', pathMatch: 'full' },
  {
    path: '',
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
