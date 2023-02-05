import { Component, Input, OnInit } from '@angular/core';
import { RoomInterface } from '../../shared/models/room.interface';

@Component({
  selector: 'app-room-view',
  templateUrl: './room-view.component.html',
  styleUrls: ['./room-view.component.scss'],
})
export class RoomViewComponent implements OnInit {
  @Input() room!: RoomInterface;

  constructor() {}

  ngOnInit(): void {}
}
