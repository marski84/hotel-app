import { TestBed } from '@angular/core/testing';
import { ApiHandlerService } from './api-handler.service';
import { WINDOW } from '../shared/WINDOW_TOKEN';
describe('TokenService', () => {
  let serviceMock: ApiHandlerService;

  const windowMock = {
    sessionStorage: {
      setItem: jest.fn(),
      getItem: jest.fn(),
      removeItem: jest.fn(),
    },
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiHandlerService, { provide: WINDOW, useValue: windowMock }],
    });
    serviceMock = TestBed.inject(ApiHandlerService);
  });

  it('should create the service', () => {
    expect(serviceMock).toBeTruthy();
  });

  it('should getAuthLevel call sessionStorage.getItem', () => {
    // given
    windowMock.sessionStorage.getItem.mockReturnValue('wartosc_testowa');

    // when
    const authToken = serviceMock.getAuthLevel();

    // then
    expect(windowMock.sessionStorage.getItem).toHaveBeenCalledWith(
      'authLevelToken'
    );
    expect(authToken).toEqual('wartosc_testowa');
  });

  it('should logOutUser call sessionStorage.removeItem', () => {
    // given
    const windowSpy = windowMock.sessionStorage.removeItem;
    // when
    serviceMock.logOutUser();
    // then
    expect(windowSpy).toHaveBeenCalled();
  });

  it('should handleAuthSuccess call sessionStorage.setItem', () => {
    // given
    const windowSpy = windowMock.sessionStorage.setItem;
    // when
    serviceMock.handleAuthSuccess('test_value');
    // then
    expect(windowSpy).toHaveBeenCalledTimes(1);
  });
});
