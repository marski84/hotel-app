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
  selector: 'app-ad-select-room-form',
  templateUrl: './ad-select-room-form.component.html',
  styleUrls: ['./ad-select-room-form.component.scss'],
})
export class AdSelectRoomFormComponent implements OnInit, AfterViewInit {
  roomsData$!: Observable<RoomInterface[]>;

  constructor(
    public adService: AdvertisementService,
    public roomsService: RoomsService
  ) {}
  ngAfterViewInit(): void {
    this.adService.getRoomsData();
  }

  ngOnInit(): void {
    console.log('select form init');
    this.roomsData$ = this.roomsService.data$.pipe(
      tap(
        (data) => data.forEach((el) => console.log(el))
        // console.log(data)
      )
    );
  }
}
