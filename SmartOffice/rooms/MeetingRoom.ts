import { Observer } from '../observers/Observer';
export class MeetingRoom {
    private observers: Observer[] = [];
    private occupied: boolean = false;
    private bookingTime: Date | null = null;
    private timer: NodeJS.Timeout | null = null;
    private maxCapacity: number = 10; // Default capacity

    constructor(public roomId: number) {}

    setMaxCapacity(capacity: number): void {
        if (capacity < 1) {
            console.log('Invalid capacity. Please enter a valid positive number.');
            return;
        }
        this.maxCapacity = capacity;
        console.log(`Room ${this.roomId} maximum capacity set to ${capacity}.`);
    }

    bookRoom(startTime: string, duration: number): void {
        if (this.bookingTime) {
            console.log(`Room ${this.roomId} is already booked during this time. Cannot book.`);
            return;
        }
        this.bookingTime = new Date(); // Assume current date with provided time for simplicity.
        console.log(`Room ${this.roomId} booked from ${startTime} for ${duration} minutes.`);
        this.startReleaseTimer(duration);
    }

    cancelBooking(): void {
        if (!this.bookingTime) {
            console.log(`Room ${this.roomId} is not booked. Cannot cancel booking.`);
            return;
        }
        this.bookingTime = null;
        this.stopReleaseTimer();
        console.log(`Booking for Room ${this.roomId} cancelled successfully.`);
    }

    addOccupant(count: number): void {
        if (count < 0 || count > this.maxCapacity) {
            console.log(`Invalid occupant count. Please enter a value between 0 and ${this.maxCapacity}.`);
            return;
        }

        if (count < 2) {
            console.log(`Room ${this.roomId} occupancy insufficient to mark as occupied.`);
            return;
        }

        this.occupied = count >= 2;
        console.log(`Room ${this.roomId} is now occupied by ${count} persons. AC and lights turned on.`);
        this.notifyObservers();
        this.stopReleaseTimer();
    }

    vacateRoom(): void {
        this.occupied = false;
        console.log(`Room ${this.roomId} is now unoccupied. AC and lights turned off.`);
        this.notifyObservers();
        this.startReleaseTimer(5); // 5-minute timer to release booking
    }

    isOccupied(): boolean {
        return this.occupied;
    }

    isBooked(): boolean {
        return this.bookingTime !== null;
    }

    attach(observer: Observer): void {
        this.observers.push(observer);
    }

    detach(observer: Observer): void {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    notifyObservers(): void {
        for (const observer of this.observers) {
            observer.update(this);
        }
    }

    private startReleaseTimer(duration: number): void {
        this.timer = setTimeout(() => {
            if (!this.occupied) {
                this.cancelBooking();
                console.log(`Room ${this.roomId} booking released due to no occupancy.`);
            }
        }, duration * 60 * 1000); // duration in minutes
    }

    private stopReleaseTimer(): void {
        if (this.timer) {
            clearTimeout(this.timer);
            this.timer = null;
        }
    }
}
