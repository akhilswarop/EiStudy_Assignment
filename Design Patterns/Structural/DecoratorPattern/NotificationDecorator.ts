import { Notification } from './Notification';

export class NotificationDecorator implements Notification {
    constructor(protected wrappee: Notification) {}

    send(message: string): void {
        this.wrappee.send(message);
    }
}
