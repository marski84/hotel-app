import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RoomsModule } from '../rooms/rooms.module';
import { RoomsComponent } from '../rooms/rooms/rooms.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { AuthGuardService } from '../auth/auth-guard.service';

@NgModule({
  declarations: [DashboardComponent],
  imports: [SharedModule, RoomsModule, DashboardRoutingModule],
  exports: [DashboardComponent],
  providers: [],
})
export class DashboardModule {}
