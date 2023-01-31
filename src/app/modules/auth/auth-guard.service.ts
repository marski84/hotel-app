import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { AuthService } from './auth.service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  constructor(
    private router: Router,
    private authService: AuthService,
    private toastService: ToastrService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const authLevel = window.sessionStorage.getItem('authLevel');
    console.log(authLevel);

    const adminPriviliges = this.authService.adminPassword;
    const workerPriviliges = this.authService.workerPassword;

    console.log(this.authService.adminPassword);

    if (authLevel !== adminPriviliges && authLevel !== workerPriviliges) {
      // alert('You are not allowed to view this page');
      this.toastService.error('Please log in.', 'Login error');
      console.log('ok');

      this.router.navigate(['']);

      return false;
    }
    return true;
  }
}
