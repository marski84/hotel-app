import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ChangeDetectionStrategy,
} from '@angular/core';
import { RoomInterface } from '../../../shared/models/room.interface';
import { RoomStateEnum } from '../../../shared/models/room-state.enum';

@Component({
  selector: 'app-worker-actions',
  templateUrl: './worker-actions.component.html',
  styleUrls: ['./worker-actions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkerActionsComponent implements OnInit {
  constructor() {}
  // * Pracownik widzi numer pokoju, jego stan oraz w pokojach których stan = brudny może powiadomić administratora o tym że należy sprawdzić wysprzątanie pokoju.

  RoomState = RoomStateEnum;
  @Input() room!: RoomInterface;
  // set room() { this.isDirty = room.state ===  handleRoomStateChange.Dirty}
  @Output() roomStateChangeEmitted: EventEmitter<RoomInterface> =
    new EventEmitter<RoomInterface>();

  get dupa() {
    return 1;
  }

  ngOnInit(): void {
    // serwis.sub(res => this.dana  = res) // this.changeDetectionRef.markForCheck
    // markForCheck vs detectChanges()
    // treeshaking
    // smart => container
    // dump => wyswietlenie listy
    // zone.js
    // ngZone.runOutsideAngular(interval który dodaje miliion razy +1 900tyś wywołuje się changeDetection)
  }

  changeColor() {
    // this.output.emit();
    //this.colorprzycisku = red;
  }

  onRoomCheck() {
    this.room.markedForCheck = true;
    const roomCopy = JSON.parse(JSON.stringify(this.room));
    this.roomStateChangeEmitted.emit(roomCopy);
  }
}
