import { Observer } from './Observer';
import { MeetingRoom } from '../rooms/MeetingRoom';

export class OccupancySensor implements Observer {
    constructor(private room: MeetingRoom) {
        this.room.attach(this);
    }

    update(room: MeetingRoom): void {
        if (room.isOccupied()) {
            console.log(`Occupancy Sensor: Room ${room.roomId} is now occupied.`);
        } else {
            console.log(`Occupancy Sensor: Room ${room.roomId} is now unoccupied.`);
        }
    }
}
