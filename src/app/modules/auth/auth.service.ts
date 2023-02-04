import { Inject, Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  adminPassword: string = '';
  workerPassword: string = '';

  constructor(
    @Inject('adminPassword') private adminPasswordValue: string,
    @Inject('workerPassword') private workerPasswordValue: string,
    private toastService: ToastrService
  ) {
    this.adminPassword = adminPasswordValue;
    this.workerPassword = workerPasswordValue;
  }

  handleUserAuth(password: string) {
    if (password === this.adminPassword) {
      window.sessionStorage.setItem('authLevelToken', 'admin');
      return true;
    }

    if (password === this.workerPassword) {
      window.sessionStorage.setItem('authLevelToken', 'worker');
      return true;
    }
    this.toastService.error('Invalid login', 'Login error!');
    return false;
  }

  getUserAuthPriviliges() {
    return of(window.sessionStorage.getItem('authLevelToken'));
  }

  handleLogout() {
    window.sessionStorage.removeItem('authLevelToken');
  }
}
