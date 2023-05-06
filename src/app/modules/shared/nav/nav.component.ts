import { Component, Inject, Input, OnInit } from '@angular/core';
import NAV_CONF from '../NAV_CONF';
import { InavConfiguration } from '../models/nav-config.interface';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  hasOnClick;

  constructor(@Inject(NAV_CONF) public navConf: InavConfiguration) {
    console.log(navConf);
  }

  ngOnInit() {
    // this.hasOnClick = this.navConf.hasOnClick;
    console.log(this.hasOnClick);
  }
}
