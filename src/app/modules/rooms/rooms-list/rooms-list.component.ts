import { Component, OnInit } from '@angular/core';
import { RoomsService } from '../rooms.service';
import { AuthLevel } from '../../shared/models/auth-level.enum';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss'],
})
export class RoomsListComponent implements OnInit {
  hotelRoomsObservable$ = this.roomsService.data$;
  AuthLevel = AuthLevel;

  constructor(private roomsService: RoomsService) {}

  ngOnInit(): void {
    this.roomsService.getData();
  }

  handleRoomStateChange(updatedRoomState: any) {
    this.roomsService.updateRoomData(updatedRoomState);
  }
}
