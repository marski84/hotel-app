import { Inject, Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
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

    console.log(this.adminPassword);
    console.log(this.workerPassword);
  }

  handleUserAuth(password: string) {
    if (password === this.adminPassword) {
      window.sessionStorage.setItem('authLevel', 'admin');
      return true;
    }

    if (password === this.workerPassword) {
      window.sessionStorage.setItem('authLevel', 'worker');
      return true;
    }
    this.toastService.error('Invalid login', 'Login error!');
    return false;
  }

  handleLogout() {
    window.sessionStorage.removeItem('authLevel');
  }
}
