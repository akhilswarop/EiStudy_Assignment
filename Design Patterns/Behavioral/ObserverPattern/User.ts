import { Observer } from './Observer';

export class User implements Observer {
    constructor(private name: string) {}

    update(article: string): void {
        console.log(`${this.name} notified of new article: ${article}`);
    }
}
