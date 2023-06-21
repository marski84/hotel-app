import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';
import { ApiHandlerService } from './api-handler.service';
import { ApiHandlerServiceStub } from './api-handler.service.stub';
import { ToastrService } from 'ngx-toastr';

describe('authService unit tests', () => {
  let authService: AuthService;
  let apiService: ApiHandlerService;
  // let toastService = jest.fn(() => {
  //   error: 'ok';
  // });
  const toastServiceMock = {
    error: jest.fn(),
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: ApiHandlerService, useClass: ApiHandlerServiceStub },
        { provide: ToastrService, useValue: toastServiceMock },
      ],
    });

    authService = TestBed.get(AuthService);
    apiService = TestBed.get(ApiHandlerService);
  });

  // should return UserAuthPriviliges after call
  it('given method getUserAuthPriviliges is called when it return data than is should return user piviliges data', () => {
    // given
    const authServiceSpy = jest.spyOn(authService, 'getUserAuthPriviliges');

    // when
    let result;
    authService.getUserAuthPriviliges().subscribe((resp) => (result = resp));

    // then
    expect(authServiceSpy).toHaveBeenCalled();
    expect(result).toEqual('admin');
  });

  it('given method handleUserAuth method is called when it returns than it should return true', () => {
    const methodSpy = jest.spyOn(authService, 'handleUserAuth');
    const apiHandlerSpy = jest.spyOn(apiService, 'handleAuthSuccess');

    const result = authService.handleUserAuth('admin');

    expect(methodSpy).toHaveBeenCalled();
    expect(apiHandlerSpy).toHaveBeenCalled();
    expect(result).toEqual(true);
  });

  it('given method logOutUser is called when it is called it should not throw error', () => {
    const methodSpy = jest.spyOn(authService, 'handleLogout');
    const apiHandlerService = jest.spyOn(apiService, 'logOutUser');

    authService.handleLogout();

    expect(methodSpy).toHaveBeenCalled();
    expect(apiHandlerService).toHaveBeenCalled();
  });

  it('given handleUserAuth is called with invalid credentials when it is called than it should return false', () => {
    const methodSpy = jest.spyOn(authService, 'handleUserAuth');
    const apiHandlerService = jest.spyOn(apiService, 'handleAuthSuccess');

    const result = authService.handleUserAuth('invalid');
    expect(methodSpy).toHaveBeenCalled();
    expect(result).toEqual(false);
    expect(apiHandlerService).not.toHaveBeenCalled();
    // expect(toastServiceMock.error).toHaveBeenCalled();
  });
});
