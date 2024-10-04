import { TextFormatter } from './TextFormatter';

export class LowerCaseFormatter implements TextFormatter {
    format(text: string): string {
        return text.toLowerCase();
    }
}
