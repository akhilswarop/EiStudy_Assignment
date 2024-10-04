import { TextFormatter } from './TextFormatter';

export class TextEditor {
    constructor(private formatter: TextFormatter) {}

    setFormatter(formatter: TextFormatter): void {
        this.formatter = formatter;
    }

    publishText(text: string): void {
        console.log(this.formatter.format(text));
    }
}
