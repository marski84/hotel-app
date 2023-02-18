import {
  AfterViewInit,
  Component,
  ContentChild,
  ContentChildren,
  HostListener,
  Input,
  OnInit,
  QueryList,
} from '@angular/core';
import { RoomInterface } from '../../shared/models/room.interface';
import { AdminActionsComponent } from '../rooms-list/admin-actions/admin-actions.component';
import { WorkerActionsComponent } from '../rooms-list/worker-actions/worker-actions.component';

@Component({
  selector: 'app-room-view',
  templateUrl: './room-view.component.html',
  styleUrls: ['./room-view.component.scss'],
})
export class RoomViewComponent implements OnInit, AfterViewInit {
  @Input() room!: RoomInterface;

  @ContentChild(WorkerActionsComponent)
  roomStateActions!: any;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    // console.log(this.roomStateActions);
  }

  handleRoomChange(room: RoomInterface) {
    console.log(this.room);
  }
}
