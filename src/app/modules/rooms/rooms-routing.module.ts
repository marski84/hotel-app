import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { RoomsListComponent } from './rooms-list/rooms-list.component';

const routes: Route[] = [{ path: 'rooms-list', component: RoomsListComponent }];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoomsRoutingModule {}
