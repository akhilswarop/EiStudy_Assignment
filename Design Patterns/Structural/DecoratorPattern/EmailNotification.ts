import { NotificationDecorator } from './NotificationDecorator';

export class EmailNotification extends NotificationDecorator {
    send(message: string): void {
        super.send(message);
        this.sendEmail(message);
    }

    private sendEmail(message: string): void {
        console.log(`Email notification: ${message}`);
    }
}
