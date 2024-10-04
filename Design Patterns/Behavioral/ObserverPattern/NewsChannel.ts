import { Subject } from './Subject';
import { Observer } from './Observer';

export class NewsChannel implements Subject {
    private observers: Observer[] = [];
    private latestArticle: string;

    attach(observer: Observer): void {
        this.observers.push(observer);
    }

    detach(observer: Observer): void {
        const index = this.observers.indexOf(observer);
        if (index > -1) {
            this.observers.splice(index, 1);
        }
    }

    publish(article: string): void {
        this.latestArticle = article;
        this.notify();
    }

    notify(): void {
        for (const observer of this.observers) {
            observer.update(this.latestArticle);
        }
    }
}
