import { Component, OnInit } from '@angular/core';
import { RoomsService } from '../rooms.service';
import { AuthService } from '../../auth/auth.service';
import { tap } from 'rxjs';
import { AuthLevel } from '../../shared/models/auth-level.enum';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss'],
})
export class RoomsListComponent implements OnInit {
  hotelRoomsObservable$ = this.roomsService.getHotelRooms();
  AuthLevel = AuthLevel;

  constructor(
    private roomsService: RoomsService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {}

  handleRoomStateChange(updatedRoomState: any) {
    console.log(updatedRoomState);

    this.roomsService.updateRoomData(updatedRoomState);
  }
}
