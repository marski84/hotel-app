import { Component, Inject, Input, OnInit } from '@angular/core';
import NAV_CONF from '../NAV_CONF';
import { InavConfiguration } from '../models/nav-config.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  hasOnClick;

  constructor(
    private router: Router,
    @Inject(NAV_CONF) public navConf: InavConfiguration
  ) {
    console.log(navConf);
  }

  ngOnInit() {}

  handleLogout() {
    window.sessionStorage.removeItem('authLevelToken');
    this.router.navigate(['']);
  }
}
