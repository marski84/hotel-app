import { Injectable } from '@angular/core';
import { ApiHandlerService } from './api-handler.service';
import { of } from 'rxjs';

@Injectable()
export class ApiHandlerServiceStub extends ApiHandlerService {
  constructor() {
    super();
  }

  override getAuthLevel() {
    return window.sessionStorage.getItem('authLevelToken');
  }

  override logOutUser() {
    window.sessionStorage.removeItem('authLevelToken');
    return of(true);
  }

  override handleAuthSuccess(authLevel: string) {
    window.sessionStorage.setItem('authLevelToken', authLevel);

    return of(true);
  }
}
