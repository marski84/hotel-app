import {
  AfterViewInit,
  Component,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { RoomsService } from '../../../rooms/rooms.service';
import { RoomInterface } from '../../../shared/models/room.interface';
import { Observable, Subject, filter, map, takeUntil, tap } from 'rxjs';
import { RoomStateEnum } from 'src/app/modules/shared/models/room-state.enum';
import { AdvertisementService } from '../../advertisement.service';

@Component({
  selector: 'app-room-ad-select-form',
  templateUrl: './room-ad-select-form.html',
  styleUrls: ['./room-ad-select-form.scss'],
})
export class AdRoomSelectFormComponent implements OnInit {
  roomsData$: Observable<RoomInterface[]> = this.adService.getRoomsData();

  constructor(public adService: AdvertisementService) {}

  ngOnInit(): void {}
}
