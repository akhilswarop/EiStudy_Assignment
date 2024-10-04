import { NewsChannel } from './NewsChannel';
import { User } from './User';

const newsChannel = new NewsChannel();

const user1 = new User('Alice');
const user2 = new User('Bob');

newsChannel.attach(user1);
newsChannel.attach(user2);

newsChannel.publish('Breaking News: TypeScript 4.5 Released!');
