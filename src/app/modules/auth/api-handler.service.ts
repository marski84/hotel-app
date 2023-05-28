import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiHandlerService {

  constructor() {}

  getAuthLevel() {
    return window.sessionStorage.getItem('authLevelToken');
  }

  logOutUser() {
    window.sessionStorage.removeItem('authLevelToken');
    return of(true);
  }

  handleAuthSuccess(authLevel: string) {
    window.sessionStorage.setItem('authLevelToken', authLevel);

    return of(true);
  }
}
