import { NotificationDecorator } from './NotificationDecorator';

export class SMSNotification extends NotificationDecorator {
    send(message: string): void {
        super.send(message);
        this.sendSMS(message);
    }

    private sendSMS(message: string): void {
        console.log(`SMS notification: ${message}`);
    }
}
