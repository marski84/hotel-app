import { RoomStateEnum } from './room-state.enum';
import { IadBasicData } from '../../advertisement/ad-forms/models/IadBasicData.interface';
import { ItargetAdServices } from '../../advertisement/ad-forms/models/ItargetAdServices.interface';
import { IadvertisementForm } from '../../advertisement/ad-forms/models/IadvertisementForm.interface';

export interface RoomInterface {
  roomNumber: string;
  roomState: RoomStateEnum;
  pricePerDay: string;
  markedForCheck: boolean;
  roomAds: IadvertisementForm | [];
}
