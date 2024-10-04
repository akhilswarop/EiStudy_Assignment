import { Command } from './Command';
import { RoomBookingSystem } from '../rooms/RoomBookingSystem';

export class CancelBookingCommand implements Command {
    constructor(private roomId: number) {}

    execute(): void {
        const system = RoomBookingSystem.getInstance();
        const room = system.getRoomById(this.roomId);
        if (room) {
            room.cancelBooking();
        } else {
            console.log(`Room ${this.roomId} does not exist.`);
        }
    }
}
