import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree,
} from '@angular/router';
import { AuthService } from './auth.service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService {
  constructor(
    private router: Router,
    private authService: AuthService,
    private toastService: ToastrService
  ) {}
  authLevelToken = window.sessionStorage.getItem('authLevelToken');
  adminPriviliges = this.authService.adminPassword;
  workerPriviliges = this.authService.workerPassword;

  canActivate(): UrlTree | boolean {
    if (
      this.authLevelToken !== this.adminPriviliges &&
      this.authLevelToken !== this.workerPriviliges
    ) {
      this.toastService.error('Please log in.', 'Login error');
      console.log('ok');

      this.router.navigate(['']);

      return new UrlTree();
    }
    return true;
  }
}
