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
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  constructor(
    private router: Router,
    private authService: AuthService,
    private toastService: ToastrService
  ) {}
  authLevelToken = window.sessionStorage.getItem('authLevelToken');
  adminPriviliges = this.authService.adminPassword;
  workerPriviliges = this.authService.workerPassword;

  canActivate(): boolean {
    if (
      this.authLevelToken !== this.adminPriviliges &&
      this.authLevelToken !== this.workerPriviliges
    ) {
      this.toastService.error('Please log in.', 'Login error');
      console.log('ok');

      this.router.navigate(['']);

      return false;
    }
    return true;
  }

  // canLoad(route: Route): boolean {
  //   if (
  //     route.path === 'dashboard' &&
  //     this.authLevelToken === this.adminPriviliges
  //   ) {
  //     console.log('canload');

  //     return true;
  //   }

  //   console.log('canload false');

  //   return false;
  // }
}
