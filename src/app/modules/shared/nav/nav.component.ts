import { Component, Inject, Input, OnInit } from '@angular/core';
import NAV_CONF from '../NAV_CONF';
import { InavConfiguration } from '../models/nav-config.interface';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  constructor(@Inject(NAV_CONF) private navConf: InavConfiguration) {
    console.log(navConf);
  }

  ngOnInit() {}
}
