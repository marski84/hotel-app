import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule } from './modules/auth/auth.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { CoreModule } from './modules/core/core.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CoreModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AuthModule,
    DashboardModule,
  ],
  // providers: [
  //   { provide: 'adminPassword', useValue: 'admin' },
  //   { provide: 'workerPassword', useValue: 'worker' },
  // ],
  bootstrap: [AppComponent],
})
export class AppModule {}
