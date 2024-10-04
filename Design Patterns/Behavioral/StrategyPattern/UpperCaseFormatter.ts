import { TextFormatter } from './TextFormatter';

export class UpperCaseFormatter implements TextFormatter {
    format(text: string): string {
        return text.toUpperCase();
    }
}
