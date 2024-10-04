import { OfficeConfig } from './config/OfficeConfig';
import { RoomBookingSystem } from './rooms/RoomBookingSystem';
import { OccupancySensor, LightSystem, AirConditioner } from './observers';
import { BookRoomCommand, CancelBookingCommand } from './commands';
import * as readline from 'readline';

// Configure the office facility
const officeConfig = OfficeConfig.getInstance();
officeConfig.setNumberOfRooms(5);

// Initialize the booking system
const bookingSystem = RoomBookingSystem.getInstance();

// Attach observers to rooms
bookingSystem.getRoomById(1)?.attach(new OccupancySensor(bookingSystem.getRoomById(1)!));
bookingSystem.getRoomById(1)?.attach(new LightSystem(bookingSystem.getRoomById(1)!));
bookingSystem.getRoomById(1)?.attach(new AirConditioner(bookingSystem.getRoomById(1)!));

// Console Interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function showMenu(): void {
    console.log('\nSmart Office Management System');
    console.log('1. List Rooms');
    console.log('2. Book Room');
    console.log('3. Cancel Booking');
    console.log('4. Add Occupant to Room');
    console.log('5. Vacate Room');
    console.log('6. Set Room Capacity');
    console.log('7. Exit');
}

function handleInput(choice: string): void {
    switch (choice.trim()) {
        case '1':
            bookingSystem.listRooms();
            break;
        case '2':
            rl.question('Enter Room ID, Start Time (HH:MM), Duration (minutes): ', (input) => {
                const [roomId, startTime, duration] = input.split(' ');
                const command = new BookRoomCommand(parseInt(roomId), startTime, parseInt(duration));
                command.execute();
                promptUser();
            });
            return;
        case '3':
            rl.question('Enter Room ID to Cancel Booking: ', (roomId) => {
                const command = new CancelBookingCommand(parseInt(roomId));
                command.execute();
                promptUser();
            });
            return;
        case '4':
            rl.question('Enter Room ID and Occupant Count: ', (input) => {
                const [roomId, count] = input.split(' ');
                const room = bookingSystem.getRoomById(parseInt(roomId));
                if (room) {
                    room.addOccupant(parseInt(count));
                } else {
                    console.log(`Room ${roomId} does not exist.`);
                }
                promptUser();
            });
            return;
        case '5':
            rl.question('Enter Room ID to Vacate: ', (roomId) => {
                const room = bookingSystem.getRoomById(parseInt(roomId));
                if (room) {
                    room.vacateRoom();
                } else {
                    console.log(`Room ${roomId} does not exist.`);
                }
                promptUser();
            });
            return;
        case '6':
            rl.question('Enter Room ID and New Capacity: ', (input) => {
                const [roomId, capacity] = input.split(' ');
                const room = bookingSystem.getRoomById(parseInt(roomId));
                if (room) {
                    room.setMaxCapacity(parseInt(capacity));
                } else {
                    console.log(`Room ${roomId} does not exist.`);
                }
                promptUser();
            });
            return;
        case '7':
            rl.close();
            return;
        default:
            console.log('Invalid choice.');
    }
    promptUser();
}

function promptUser(): void {
    showMenu();
    rl.question('Enter your choice: ', handleInput);
}

promptUser();
