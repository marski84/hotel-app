import { IadvertisementForm } from '../../advertisement/ad-forms/models/IadvertisementForm.interface';
import { RoomStateEnum } from './room-state.enum';
import { IroomAds } from './roomAds.interface';

export interface RoomInterface {
  roomNumber: string;
  roomState: RoomStateEnum;
  pricePerDay: string;
  markedForCheck: boolean;
  // roomAds: Array<IadvertisementForm | undefined>;
  roomAds: IroomAds[];
}
