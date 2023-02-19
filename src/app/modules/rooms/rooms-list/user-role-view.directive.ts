import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { filter, map, tap } from 'rxjs';
import { AuthLevel } from '../../shared/models/auth-level.enum';

@Directive({
  selector: '[appUserRoleView]',
})
export class UserRoleViewDirective {
  constructor(
    private authService: AuthService,
    private viewContainerRef: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) {}

  private userPermissionLevel!: AuthLevel;

  @Input()
  set appUserRoleView(val: AuthLevel) {
    this.userPermissionLevel = val;
    this.handleUserView();
  }

  ngOnInit(): void {}

  handleUserView() {
    this.authService
      .getUserAuthPriviliges()
      .pipe(
        filter((value) => value !== null),
        map((value) => this.checkUserPermissions(value)),
        map((result) => this.updateView(result))
      )
      .subscribe();
  }

  private checkUserPermissions(AuthLevel: string | null) {
    console.log(AuthLevel);
    return AuthLevel === this.userPermissionLevel;
  }

  private updateView(permissionCheckResul: boolean) {
    if (permissionCheckResul) {
      return this.viewContainerRef.createEmbeddedView(this.templateRef);
    }
    return this.viewContainerRef.clear();
  }
}
