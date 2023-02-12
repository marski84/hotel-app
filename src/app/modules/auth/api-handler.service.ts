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

  handleAuthSuccess(auttLevel: string) {
    window.sessionStorage.setItem('authLevelToken', auttLevel);

    return of(true);
  }
}
