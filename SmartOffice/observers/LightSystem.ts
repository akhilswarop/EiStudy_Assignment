import { Observer } from './Observer';
import { MeetingRoom } from '../rooms/MeetingRoom';

export class LightSystem implements Observer {
    constructor(private room: MeetingRoom) {
        this.room.attach(this);
    }

    update(room: MeetingRoom): void {
        if (room.isOccupied()) {
            console.log(`Lights ON in Room ${room.roomId}.`);
        } else {
            console.log(`Lights OFF in Room ${room.roomId}.`);
        }
    }
}
