import { Component, OnInit } from '@angular/core';
import { RouteConfigLoadStart, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    // this.router.navigate(['dashboard/rooms-list']);
  }

  handleLogout() {
    window.sessionStorage.removeItem('authLevelToken');
    this.router.navigate(['']);
  }
}
