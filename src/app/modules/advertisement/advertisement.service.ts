import { Injectable } from '@angular/core';
import { RoomsService } from '../rooms/rooms.service';
import { BehaviorSubject, map, tap } from 'rxjs';
import { RoomStateEnum } from '../shared/models/room-state.enum';
import { RoomInterface } from '../shared/models/room.interface';

@Injectable({
  providedIn: 'root',
})
export class AdvertisementService {
  private roomsList!: RoomInterface[];

  formData: Partial<{ stepNumber: number }>[] = [];

  readonly roomsList$: BehaviorSubject<RoomInterface[]> = new BehaviorSubject(
    this.roomsList
  );

  readonly selectedAdProviders$: BehaviorSubject<string[]> =
    new BehaviorSubject(['']);

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

  updateRoomAds(roomNumber: string) {
    console.log(roomNumber);
  }

  private handleFilterRoomList(roomList: RoomInterface[]) {
    const result = roomList.filter(
      (room) => room.roomState === RoomStateEnum.CLEAN
    );
    return result;
  }

  handleFormSubmit(formData: Partial<{ stepNumber: number }>) {
    if (!formData) {
      return;
    }

    if (formData.stepNumber === 2) {
      const selectedAds = Object.keys(formData).filter(
        (key) => formData[key] === true
      );

      this.selectedAdProviders$.next(selectedAds);
    }

    const dataIndex = this.findFormData(formData);

    if (dataIndex === -1) {
      this.formData.push(formData);
      return;
    }

    this.editFormData(formData, dataIndex);

    console.log(this.formData);
  }

  private findFormData(formData: Partial<{ stepNumber: number }>) {
    const dataIndex = this.formData.findIndex(
      (data) => data.stepNumber === formData.stepNumber
    );

    return dataIndex;
  }

  private editFormData(
    formData: Partial<{ stepNumber: number }>,
    dataIndex: number
  ) {
    this.formData[dataIndex] = formData;
  }
}
