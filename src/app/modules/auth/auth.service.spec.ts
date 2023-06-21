import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';
import { ApiHandlerService } from './api-handler.service';
import { ToastrService } from 'ngx-toastr';

describe('authService unit tests', () => {
  let authServiceMock: AuthService;
  let apiServiceMock: ApiHandlerService;

  const toastServiceMock = {
    error: jest.fn(),
  };

  const apiHandlerServiceMock = {
    getAuthLevel: jest.fn(),
    logOutUser: jest.fn(),
    handleAuthSuccess: jest.fn(),
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: ApiHandlerService, useValue: apiHandlerServiceMock },
        { provide: ToastrService, useValue: toastServiceMock },
      ],
    });

    authServiceMock = TestBed.inject(AuthService);
    apiServiceMock = TestBed.inject(ApiHandlerService);
  });
  it('should getUserAuthPriviliges call apiServiceMock.getAuthLevel', () => {
    authServiceMock.getUserAuthPriviliges();
    // then
    expect(apiServiceMock.getAuthLevel).toHaveBeenCalled();
  });

  it('should handleLogout call apiServiceMock.logOutUser', () => {
    // when
    authServiceMock.handleLogout();
    // then
    expect(apiHandlerServiceMock.logOutUser).toHaveBeenCalled();
  });

  it('should handleUserAuth called with valid credentials call apiServiceMock. handleAuthSuccess', () => {
    // when
    authServiceMock.handleUserAuth('admin');
    // then
    expect(apiServiceMock.handleAuthSuccess).toHaveBeenCalledWith('admin');
  });

  it('should handleUserAuth called with invalid credentials call toastServiceMock.error', () => {
    // when
    authServiceMock.handleUserAuth('invalid_credentials');
    // then
    expect(toastServiceMock.error).toHaveBeenCalled();
  });
});
