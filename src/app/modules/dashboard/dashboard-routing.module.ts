import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from '../auth/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    CanActivate: [AuthGuardService],
    // redirectTo: 'rooms-list',
  },
  { path: '', redirectTo: 'rooms-list', pathMatch: 'full' },
  {
    path: '',
    loadChildren: () =>
      import('../rooms/rooms.module').then((m) => m.RoomsModule),
    canActivate: [AuthGuardService],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
