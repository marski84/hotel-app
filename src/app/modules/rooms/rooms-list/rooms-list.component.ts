import { Component, OnInit } from '@angular/core';
import { RoomsService } from '../rooms.service';
import { AuthService } from '../../auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss'],
})
export class RoomsListComponent implements OnInit {
  hotelRoomsObservable$ = this.roomsService.getHotelRooms();
  authLevel!: Subscription;

  constructor(
    private roomsService: RoomsService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.authLevel = this.authService.getUserAuthPriviliges().subscribe();
  }
}
