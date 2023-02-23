import { Inject, Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable, of } from 'rxjs';
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
    // @Inject('adminPassword') private adminPasswordValue: string,
    // @Inject('workerPassword') private workerPasswordValue: string,
    private apiService: ApiHandlerService,
    private toastService: ToastrService
  ) {}

  handleUserAuth(password: string) {
    if (password === this.adminPassword) {
      this.apiService.handleAuthSuccess(AuthLevel.ADMIN).subscribe();
      return true;
    }

    if (password === this.workerPassword) {
      this.apiService.handleAuthSuccess(AuthLevel.WORKER).subscribe();
      return true;
    }
    this.toastService.error('Invalid login', 'Login error!');
    return false;
  }

  getUserAuthPriviliges() {
    return of(this.apiService.getAuthLevel());
  }

  handleLogout() {
    this.apiService.logOutUser().subscribe();
  }
}
