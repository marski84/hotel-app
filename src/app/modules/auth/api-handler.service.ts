import { Inject, Injectable } from '@angular/core';
import { of } from 'rxjs';
import { AbstractSessionHandlerService } from './AbstractSessionHandlerService';
import { WINDOW } from '../shared/WINDOW_TOKEN';

@Injectable({
  providedIn: 'root',
})
export class ApiHandlerService implements AbstractSessionHandlerService {
  constructor(@Inject(WINDOW) private window: Window) {}

  getAuthLevel() {
    return this.window.sessionStorage.getItem('authLevelToken');
  }

  logOutUser() {
    this.window.sessionStorage.removeItem('authLevelToken');
  }

  handleAuthSuccess(authLevel: string) {
    this.window.sessionStorage.setItem('authLevelToken', authLevel);
  }
}
