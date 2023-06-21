import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { ApiHandlerService } from './api-handler.service';
import { AuthLevel } from '../shared/models/auth-level.enum';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  adminPassword: AuthLevel.ADMIN = AuthLevel.ADMIN;
  workerPassword: AuthLevel.WORKER = AuthLevel.WORKER;

  constructor(
    private apiService: ApiHandlerService,
    private toastService: ToastrService
  ) {}

  handleUserAuth(password: string) {
    if (password === this.adminPassword) {
      this.apiService.handleAuthSuccess(AuthLevel.ADMIN);
      return true;
    }

    if (password === this.workerPassword) {
      this.apiService.handleAuthSuccess(AuthLevel.WORKER);
      return true;
    }
    this.toastService.error('Invalid login', 'Login error!');

    return false;
  }

  getUserAuthPriviliges() {
    return of(this.apiService.getAuthLevel());
  }

  handleLogout() {
    this.apiService.logOutUser();
  }
}
