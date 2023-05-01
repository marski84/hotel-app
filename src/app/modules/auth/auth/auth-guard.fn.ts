import { inject } from '@angular/core';
import {
  CanActivateFn,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { AuthService } from '../auth.service';
import { ToastrService } from 'ngx-toastr';

export const AuthGuardFn: CanActivateFn = (): UrlTree | boolean => {
  const router: Router = inject(Router);
  const authService = inject(AuthService);
  const toastService = inject(ToastrService);

  const authLevelToken = window.sessionStorage.getItem('authLevelToken');
  const adminPrivPass = authService.adminPassword;
  const workerPrivPass = authService.workerPassword;

  // warunek async
  if (authLevelToken !== adminPrivPass && authLevelToken !== workerPrivPass) {
    toastService.error('Please log in.', 'Login error');
    // router.navigate([]);
    return new UrlTree();
  }

  return true;
};
