import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { RouteConfigLoadStart, Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit, OnDestroy {
  loginForm = this.fb.group({
    password: ['admin', Validators.required],
  });

  get passwordCtrl() {
    return this.loginForm.get('password') as FormControl;
  }

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
    console.log('destroyed');

    // this.authService.handleLogout();
  }

  handleLogin() {
    const isValidPassword = this.authService.handleUserAuth(
      this.passwordCtrl.value
    );

    if (isValidPassword) {
      this.router.navigate(['dashboard']);
    }
  }
}
