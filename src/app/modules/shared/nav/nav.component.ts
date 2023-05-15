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
  constructor(
    private router: Router,
    @Inject(NAV_CONF) public navConf: InavConfiguration,
    //SessionStorageService
  ) {}
  // spy => sessionStorage
  // const sessionStorageMock = { removeItem: jest.fn() };

  ngOnInit() {}

  handleLogout() {
    // SessionStorageService
    window.sessionStorage.removeItem('authLevelToken');//kłopot z testami
    this.router.navigate(['']);
  }
}



// given
// when
// then router.navigate.wasCalledOnceWith([''])

