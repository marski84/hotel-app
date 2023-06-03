import { TestBed } from '@angular/core/testing';
import { ApiHandlerService } from './api-handler.service';
describe('TokenService', () => {
  let service: ApiHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiHandlerService],
    });
    service = TestBed.inject(ApiHandlerService);
    sessionStorage.clear();
  });
  it('should create the service', () => {
    expect(service).toBeTruthy();
  });

  it('given authLevel was set it should return value when getAuthLevel has been called', () => {
    const spy = jest.spyOn(service, 'getAuthLevel');
    sessionStorage.setItem('authLevelToken', 'admin');
    const authToken = service.getAuthLevel();
    expect(spy).toHaveBeenCalled();
    expect(authToken).toEqual('admin');
  });

  it('given authLevel was no set it should return undefined when getAuthLevel has been called', () => {
    const spy = jest.spyOn(service, 'getAuthLevel');
    const authToken = service.getAuthLevel();
    expect(spy).toHaveBeenCalled();
    expect(authToken).toBe(null);
  });

  it('given authToken it should set it in storage and return observable === true', () => {
    const getAuthSpy = jest.spyOn(service, 'getAuthLevel');
    const handleSuccessSpy = jest.spyOn(service, 'handleAuthSuccess');

    let result: boolean = false;
    service.handleAuthSuccess('admin').subscribe((value) => (result = value));
    expect(handleSuccessSpy).toHaveBeenCalledTimes(1);
    expect(result).toEqual(true);

    const authToken = service.getAuthLevel();
    expect(getAuthSpy).toHaveBeenCalledTimes(1);

    expect(authToken).toEqual('admin');
  });

  it('given logOutUser is called it should log out user, remove login data from session service and getAuthLevel method should return null', () => {
    const logOutSpy = jest.spyOn(service, 'logOutUser');
    const getAuthSpy = jest.spyOn(service, 'getAuthLevel');

    service.handleAuthSuccess('admin');
    service.logOutUser();
    expect(logOutSpy).toHaveBeenCalledTimes(1);

    const result = service.getAuthLevel();

    expect(getAuthSpy).toHaveBeenCalledTimes(1);
    expect(result).toEqual(null);
  });
});
