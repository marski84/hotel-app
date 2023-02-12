import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RoomStateEnum } from 'src/app/modules/shared/models/room-state.enum';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { RoomInterface } from '../../../shared/models/room.interface';

@Component({
  selector: 'app-admin-actions',
  templateUrl: './admin-actions.component.html',
  styleUrls: ['./admin-actions.component.scss'],
})
export class AdminActionsComponent implements OnInit {
  @Input() room!: RoomInterface;
  @Output() roomStateChangeEmitted: EventEmitter<RoomInterface> =
    new EventEmitter<RoomInterface>();

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
    this.roomStateCtrl.setValue(this.room.roomState);
  }

  handleRoomStateChange() {
    if (this.roomStateForm.valid) {
      this.room.roomState = this.roomStateCtrl.value;
      const editedRoom = JSON.parse(JSON.stringify(this.room));
      this.roomStateChangeEmitted.emit(editedRoom);
    }
  }
}

// Partial<RoomInterface>
