import { RoomStateEnum } from './room-state.enum';

export interface RoomInterface {
  roomNumber: string;
  roomState: RoomStateEnum;
  pricePerDay: string;
  markedForCheck: boolean;
  roomAds: any[];
}
