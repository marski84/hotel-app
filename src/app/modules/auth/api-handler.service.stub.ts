import { Injectable } from '@angular/core';
import { ApiHandlerService } from './api-handler.service';
import { of } from 'rxjs';
import { AbstractSessionHandlerService } from './AbstractSessionHandlerService';

@Injectable()
export class ApiHandlerServiceStub implements AbstractSessionHandlerService {
  constructor() {}

  getAuthLevel() {
    // return window.sessionStorage.getItem('authLevelToken');
    return 'admin';
  }

  logOutUser() {
    // window.sessionStorage.removeItem('authLevelToken');
    return of(true);
  }

  handleAuthSuccess(authLevel: string) {
    // window.sessionStorage.setItem('authLevelToken', authLevel);
    return of(true);
  }
}
