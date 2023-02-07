import { RoomStateEnum } from 'src/app/modules/shared/models/room-state.enum';
export interface RoomStateUpdate {
  roomNr: string;
  roomState: RoomStateEnum;
}
