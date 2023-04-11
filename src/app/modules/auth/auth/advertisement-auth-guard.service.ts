import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root',
})
export class AdvertisementAuthGuardService {
  constructor(
    private router: Router,
    private authService: AuthService,
    private toastService: ToastrService
  ) {}
  authLevelToken = window.sessionStorage.getItem('authLevelToken');
  adminPriviliges = this.authService.adminPassword;

  canActivate(): UrlTree | boolean {
    if (this.authLevelToken !== this.adminPriviliges) {
      this.toastService.error(
        'You are not authorized to use this module!',
        'Acess denied'
      );

      this.router.navigate(['dashboard']);

      return new UrlTree();
    }
    return true;
  }
}
