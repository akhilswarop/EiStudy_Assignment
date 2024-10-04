import { Notification } from './Notification';

export class BasicNotification implements Notification {
    send(message: string): void {
        console.log(`Basic notification: ${message}`);
    }
}
