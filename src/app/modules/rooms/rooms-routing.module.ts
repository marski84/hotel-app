import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { RoomsListComponent } from './rooms-list/rooms-list.component';
import { AdminComponent } from '../admin/admin/admin.component';
import { AdFormContainerComponent } from '../advertisement/ad-form-container/ad-form-container.component';

const routes: Route[] = [
  { path: 'rooms-list', component: RoomsListComponent },
  {
    path: 'rooms-list/advertisement-form',
    component: AdFormContainerComponent, // lazy loading | standaloneComponent +  guard
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoomsRoutingModule {}
