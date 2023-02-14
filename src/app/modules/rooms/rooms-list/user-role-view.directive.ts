import {
  ComponentFactoryResolver,
  Directive,
  ElementRef,
  Input,
  Renderer2,
  ViewContainerRef,
} from '@angular/core';
import { AdminActionsComponent } from './admin-actions/admin-actions.component';
import { AuthService } from '../../auth/auth.service';
import { map, tap } from 'rxjs';
import { AuthLevel } from '../../shared/models/auth-level.enum';
import { RoomInterface } from '../../shared/models/room.interface';
import { WorkerActionsComponent } from './worker-actions/worker-actions.component';

@Directive({
  selector: '[appUserRoleView]',
})
export class UserRoleViewDirective {
  constructor(
    private authService: AuthService,
    private componentFactoryResolver: ComponentFactoryResolver,
    private viewContainerRef: ViewContainerRef
  ) {}

  @Input() room!: RoomInterface;

  ngOnInit(): void {
    this.checkUserRole();
  }

  checkUserRole() {
    const userAuth = this.authService
      .getUserAuthPriviliges()
      .pipe(map((value) => this.renderUserView(value)))
      .subscribe();
  }

  renderUserView(value: string | null) {
    console.log(value);

    if (!value) {
      return;
    }

    if (value === 'admin') {
      const adminActionsComponent =
        this.componentFactoryResolver.resolveComponentFactory(
          AdminActionsComponent
        );
      const componentRef = this.viewContainerRef.createComponent(
        adminActionsComponent
      );

      componentRef.instance.room = this.room;
    }

    if (value === 'worker') {
      const workerActionsComponent =
        this.componentFactoryResolver.resolveComponentFactory(
          WorkerActionsComponent
        );
      const componentRef = this.viewContainerRef.createComponent(
        workerActionsComponent
      );

      // componentRef. = this.room;
    }
  }
}
