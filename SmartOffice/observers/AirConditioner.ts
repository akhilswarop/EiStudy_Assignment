import { Observer } from './Observer';
import { MeetingRoom } from '../rooms/MeetingRoom';

export class AirConditioner implements Observer {
    constructor(private room: MeetingRoom) {
        this.room.attach(this);
    }

    update(room: MeetingRoom): void {
        if (room.isOccupied()) {
            console.log(`Air Conditioner ON in Room ${room.roomId}.`);
        } else {
            console.log(`Air Conditioner OFF in Room ${room.roomId}.`);
        }
    }
}
