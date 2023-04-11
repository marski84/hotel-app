import { CanActivateFn, Router, UrlTree } from '@angular/router';
import { inject } from '@angular/core';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { AuthService } from '../auth.service';

export const AdsGuardFn: CanActivateFn = (): boolean | UrlTree => {
  const router = inject(Router);
  const toastrService = inject(ToastrService);
  const authService = inject(AuthService);

  const authLevelToken = window.sessionStorage.getItem('authLevelToken');
  const adminPrivPass = authService.adminPassword;

  if (authLevelToken !== adminPrivPass) {
    toastrService.error(
      'You are not authorised to use the module!',
      'Permission denied'
    );
    router.navigate(['dashboard']);
    return new UrlTree();
  }
  return true;
};
