export class Computer {
    CPU: string;
    RAM: string;
    storage: string;
    GPU: string;

    specifications(): void {
        console.log(`CPU: ${this.CPU}`);
        console.log(`RAM: ${this.RAM}`);
        console.log(`Storage: ${this.storage}`);
        console.log(`GPU: ${this.GPU}`);
    }
}
