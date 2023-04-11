import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './modules/auth/auth/auth.component';
import { AuthGuardService } from './modules/auth/auth-guard.service';
import { AuthPreloadStrategy } from './modules/auth/auth-preload-strategy';

const routes: Routes = [
  { path: '', component: AuthComponent },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./modules/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
    canActivate: [AuthGuardService],
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./modules/admin/admin/admin.component').then(
        (m) => m.AdminComponent
      ),

    // loadChildren: () =>
    // import('./modules/admin/admin.module').then((m) => m.AdminModule),
    data: {
      preloaded: true,
    },
    canActivate: [AuthGuardService],
  },

  // {
  //   path: 'dashboard',
  //   loadChildren: () =>
  //     import('./modules/rooms/rooms.module').then((m) => m.RoomsModule),
  //   canActivate: [AuthGuardService],
  // },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: AuthPreloadStrategy,
    }),
  ],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
