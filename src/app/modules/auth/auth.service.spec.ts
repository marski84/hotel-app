import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';
import { ToastrService } from 'ngx-toastr';
import { ApiHandlerService } from './api-handler.service';
import {
  ApiHandlerServiceStub,
  AuthServiceStub,
} from './api-handler.service.stub';

describe('authService unit tests', () => {
  let authService: AuthService;
  let apiService: ApiHandlerService;
  let toastService: ToastrService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: ApiHandlerService, useClass: ApiHandlerServiceStub },
        { provide: ToastrService, useValue: jest.fn(() => {}) },
      ],
    });
  });
});
