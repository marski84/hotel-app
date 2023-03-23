import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ad-form-container',
  templateUrl: './ad-form-container.component.html',
  styleUrls: ['./ad-form-container.component.scss'],
})
export class AdFormContainerComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log(this.router.url);
  }

  onReturn() {
    this.router.navigate(['dashboard/rooms-list/']);
  }
}
