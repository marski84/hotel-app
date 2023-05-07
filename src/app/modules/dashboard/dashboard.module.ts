import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { CoreModule } from '../core/core.module';
import NAV_CONF from '../shared/NAV_CONF';
import { DASHBOARD_NAV } from './dashboard/DASHBOARD_NAV_CONF';

@NgModule({
  declarations: [DashboardComponent],
  imports: [SharedModule, DashboardRoutingModule, CoreModule],
  exports: [],
  providers: [
    {
      provide: NAV_CONF,
      useValue: DASHBOARD_NAV,
    },
  ],
})
export class DashboardModule {}
