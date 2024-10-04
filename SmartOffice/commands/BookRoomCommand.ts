import { Command } from './Command';
import { RoomBookingSystem } from '../rooms/RoomBookingSystem';

export class BookRoomCommand implements Command {
    constructor(private roomId: number, private startTime: string, private duration: number) {}

    execute(): void {
        const system = RoomBookingSystem.getInstance();
        const room = system.getRoomById(this.roomId);
        if (room) {
            room.bookRoom(this.startTime, this.duration);
        } else {
            console.log(`Room ${this.roomId} does not exist.`);
        }
    }
}
