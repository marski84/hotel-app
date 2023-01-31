import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { AuthGuardService } from '../auth/auth-guard.service';

const routes = [
  { path: '', component: DashboardComponent, CanActivate: [AuthGuardService] },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}

// const routes: Routes = [{ path: '', component: StatisticsContainerComponent }];

// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule],
// })
// export class StatisticsRoutingModule {}
