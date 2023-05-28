import { TestBed, inject } from '@angular/core/testing';
import { ApiHandlerService } from './api-handler.service';
describe('TokenService', () => {
  let service: ApiHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiHandlerService],
    });
    service = TestBed.get(ApiHandlerService);
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
    expect(result).toEqual(true);

    const authToken = service.getAuthLevel();
    expect(authToken).toEqual('admin');
  });
});
