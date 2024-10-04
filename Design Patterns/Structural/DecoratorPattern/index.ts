import { BasicNotification } from './BasicNotification';
import { EmailNotification } from './EmailNotification';
import { SMSNotification } from './SMSNotification';

let notification = new BasicNotification();
notification = new EmailNotification(notification);
notification = new SMSNotification(notification);

notification.send('Hello World!');
