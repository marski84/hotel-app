import { Injectable } from '@angular/core';
import { RoomsService } from '../rooms/rooms.service';
import { BehaviorSubject, map, tap } from 'rxjs';
import { RoomStateEnum } from '../shared/models/room-state.enum';
import { RoomInterface } from '../shared/models/room.interface';
import { IadBasicData } from './ad-forms/models/IadBasicData.interface';
import { ItargetAdServices } from './ad-forms/models/ItargetAdServices.interface';

@Injectable({
  providedIn: 'root',
})
export class AdvertisementService {
  private roomsList!: RoomInterface[];

  formData: {
    stepNumber: number;
    adBasicData?: IadBasicData;
    providers?: ItargetAdServices;
  }[] = [];

  readonly roomsList$: BehaviorSubject<RoomInterface[]> = new BehaviorSubject(
    this.roomsList
  );

  readonly selectedAdProviders$: BehaviorSubject<any> = new BehaviorSubject([]);

  constructor(private roomService: RoomsService) {}

  getRoomsData() {
    this.roomService.getData();
    this.roomService.data$
      .pipe(
        map((data) => this.handleFilterRoomList(data)),
        tap((filteredData) => (this.roomsList = filteredData)),
        tap(() => this.roomsList$.next(this.roomsList))
      )
      .subscribe();
  }

  updateRoomAds(room: RoomInterface) {
    if (!room) {
      return;
    }
    const roomIndex = this.roomsList.findIndex(
      (roomInList) => roomInList.roomNumber === room.roomNumber
    );
    this.roomService[roomIndex] = room;
    this.roomsList$.next(this.roomsList);
  }

  private handleFilterRoomList(roomList: RoomInterface[]) {
    const result = roomList.filter(
      (room) => room.roomState === RoomStateEnum.CLEAN
    );
    return result;
  }

  handleFormSubmit(formData: {
    stepNumber: number;
    adBasicData?: IadBasicData;
    providers?: ItargetAdServices;
  }) {
    if (!formData) {
      return;
    }

    if (formData.stepNumber === 2 && formData.providers) {
      const { providers, stepNumber } = formData;

      const selectedAds = Object.keys(providers).filter(
        (key) => providers[key] === true
      );

      this.selectedAdProviders$.next(selectedAds);
    }

    const dataIndex = this.findFormData(formData);

    if (dataIndex === -1) {
      this.formData.push(formData);
      return;
    }

    this.editFormData(formData, dataIndex);
  }

  private findFormData(formData: Partial<{ stepNumber: number }>) {
    const dataIndex = this.formData.findIndex(
      (data) => data.stepNumber === formData.stepNumber
    );

    return dataIndex;
  }

  private editFormData(
    formData: {
      stepNumber: number;
      adBasicData?: IadBasicData;
      providers?: ItargetAdServices;
    },
    dataIndex: number
  ) {
    this.formData[dataIndex] = formData;
  }

  resetRoomsData() {
    this.roomsList = [];
    this.getRoomsData();
    this.selectedAdProviders$.next([]);
  }
}
