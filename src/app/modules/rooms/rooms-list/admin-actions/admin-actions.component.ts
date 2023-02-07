import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RoomStateEnum } from 'src/app/modules/shared/models/room-state.enum';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { RoomStateUpdate } from 'src/app/modules/shared/models/room-state-update.interface';

@Component({
  selector: 'app-admin-actions',
  templateUrl: './admin-actions.component.html',
  styleUrls: ['./admin-actions.component.scss'],
})
export class AdminActionsComponent implements OnInit {
  @Input() roomData!: RoomStateUpdate;
  @Output() roomStateChangeEmitted: EventEmitter<RoomStateUpdate> =
    new EventEmitter<RoomStateUpdate>();

  roomStateForm = this.fb.group({
    state: ['', Validators.required],
  });

  get roomStateCtrl() {
    return this.roomStateForm.get('state') as FormControl;
  }

  roomStateOptions = [
    RoomStateEnum.CLEAN,
    RoomStateEnum.DIRTY,
    RoomStateEnum.NEEDS_INSPECTION,
    RoomStateEnum.RESERVED,
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.roomStateCtrl.setValue(this.roomData.roomState);
  }

  handleRoomStateChange() {
    if (this.roomStateForm.valid) {
      const updatedRoomStateData: RoomStateUpdate = {
        roomNr: this.roomData.roomNr,
        roomState: this.roomStateCtrl.value,
      };
      this.roomStateChangeEmitted.emit(updatedRoomStateData);
    }
  }
}
