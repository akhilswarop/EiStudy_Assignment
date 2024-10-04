import { MeetingRoom } from '../rooms/MeetingRoom';

export interface Observer {
    update(room: MeetingRoom): void;
}
