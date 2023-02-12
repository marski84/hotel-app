import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of, switchMap } from 'rxjs';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { AuthLevel } from '../shared/models/auth-level.enum';

@Injectable({
  providedIn: 'root',
})
export class AuthPreloadStrategy implements PreloadingStrategy {
  constructor(private authService: AuthService) {}

  preload(route: Route, fn: () => Observable<any>): Observable<any> {
    const preloadStrategy = this.authService
      .getUserAuthPriviliges()
      .pipe(
        switchMap((result) => {
          // iif()
          if (
            result === AuthLevel.ADMIN &&
            route.data &&
            route.data['preloaded']
          ) {
            console.log('admin preload');

            return of(fn());
          }
          return of(null);
        })
      )
      .subscribe();

    return of(preloadStrategy);
  }
}
