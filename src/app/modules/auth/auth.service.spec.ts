import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';
import { ApiHandlerService } from './api-handler.service';
import { ApiHandlerServiceStub } from './api-handler.service.stub';
import { ToastrService } from 'ngx-toastr';
// import { ToastrService } from 'ngx-toastr';

describe('authService unit tests', () => {
  let authService: AuthService;
  let apiService: ApiHandlerService;
  let toastService = jest.fn(() => {});

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: ApiHandlerService, useClass: ApiHandlerServiceStub },
        // { provide: ToastrService, useValue: toastService },
      ],
    });

    authService = TestBed.get(AuthService);
    apiService = TestBed.get(ApiHandlerService);
    toastService = TestBed.get(ToastrService);
  });

  it('when called getUserAuthPriviliges method should return user piviliges data', () => {
    const authServiceSpy = jest.spyOn(authService, 'getUserAuthPriviliges');

    let result;
    authService.getUserAuthPriviliges().subscribe((resp) => (result = resp));

    expect(authServiceSpy).toHaveBeenCalled();
    expect(result).toEqual('admin');
  });
});
