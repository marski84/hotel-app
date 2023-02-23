import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RoomInterface } from '../../../shared/models/room.interface';
import { RoomStateEnum } from '../../../shared/models/room-state.enum';

@Component({
  selector: 'app-worker-actions',
  templateUrl: './worker-actions.component.html',
  styleUrls: ['./worker-actions.component.scss'],
})
export class WorkerActionsComponent implements OnInit {
  constructor() {}
  // * Pracownik widzi numer pokoju, jego stan oraz w pokojach których stan = brudny może powiadomić administratora o tym że należy sprawdzić wysprzątanie pokoju.

  RoomState = RoomStateEnum;
  @Input() room!: RoomInterface;
  // set room() { this.isDirty = room.state ===  handleRoomStateChange.Dirty}
  @Output() roomStateChangeEmitted: EventEmitter<RoomInterface> =
    new EventEmitter<RoomInterface>();

  ngOnInit(): void {}

  onRoomCheck() {
    this.room.markedForCheck = true;
    const roomCopy = JSON.parse(JSON.stringify(this.room));
    this.roomStateChangeEmitted.emit(roomCopy);
    console.log('ok');
  }
}
