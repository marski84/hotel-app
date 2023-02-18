import {
  ComponentFactoryResolver,
  Directive,
  ElementRef,
  Input,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { AdminActionsComponent } from './admin-actions/admin-actions.component';
import { AuthService } from '../../auth/auth.service';
import { map, tap } from 'rxjs';
import { AuthLevel } from '../../shared/models/auth-level.enum';
import { RoomInterface } from '../../shared/models/room.interface';
import { WorkerActionsComponent } from './worker-actions/worker-actions.component';
import { Renderer2 } from '@angular/core';

@Directive({
  selector: '[appUserRoleView]',
})
export class UserRoleViewDirective {
  constructor(
    private authService: AuthService,
    private renderer: Renderer2,
    private elementRef: ElementRef,
    private viewContainerRef: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) {}

  private userAuthToValidate!: AuthLevel;

  @Input()
  set appUserRoleView(val: AuthLevel) {
    this.userAuthToValidate = val;
    this.updateView();
  }

  ngOnInit(): void {
    console.log(this.userAuthToValidate);
  }

  checkUserRole() {
    // console.log(this.templateRef);

    this.authService
      .getUserAuthPriviliges()
      .pipe(map((value) => this.renderUserView(value)))
      .subscribe();
  }

  private checkUserPermissions() {}

  private updateView() {
    if (true) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainerRef.clear();
    }
  }

  renderUserView(value: string | null) {
    console.log(value);

    if (!value) {
      return;
    }

    if (value === AuthLevel.ADMIN) {
      console.log('ok');
    }

    if (value === AuthLevel.WORKER) {
    }
  }
}
