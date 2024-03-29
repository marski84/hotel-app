import { NgModule } from '@angular/core';
import { AuthComponent } from './auth/auth.component';
import { AuthService } from './auth.service';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [AuthComponent],
  imports: [CoreModule, SharedModule],
  exports: [AuthComponent],
  providers: [
    AuthService,
    { provide: 'adminPassword', useValue: 'admin' },
    { provide: 'workerPassword', useValue: 'worker' },
  ],
})
export class AuthModule {}
