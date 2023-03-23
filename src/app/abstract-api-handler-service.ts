import { BehaviorSubject, Observable } from 'rxjs';

export abstract class AbstractApiHandlerService {
  protected data = new BehaviorSubject<any>([]);

  readonly data$ = this.data.asObservable();

  constructor() {}

  abstract getData(): void;
  abstract saveData(data: any): Observable<boolean>;
}
