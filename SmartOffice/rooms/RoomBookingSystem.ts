import { MeetingRoom } from './MeetingRoom';
import { OfficeConfig } from '../config/OfficeConfig';

export class RoomBookingSystem {
    private static instance: RoomBookingSystem;
    private rooms: MeetingRoom[] = [];

    private constructor() {
        const config = OfficeConfig.getInstance();
        for (let i = 1; i <= config.getNumberOfRooms(); i++) {
            this.rooms.push(new MeetingRoom(i));
        }
    }

    static getInstance(): RoomBookingSystem {
        if (!RoomBookingSystem.instance) {
            RoomBookingSystem.instance = new RoomBookingSystem();
        }
        return RoomBookingSystem.instance;
    }

    getRoomById(roomId: number): MeetingRoom | null {
        return this.rooms.find(room => room.roomId === roomId) || null;
    }

    listRooms(): void {
        this.rooms.forEach(room => {
            console.log(`Room ${room.roomId} - ${room.isBooked() ? 'Booked' : 'Available'}`);
        });
    }
}
