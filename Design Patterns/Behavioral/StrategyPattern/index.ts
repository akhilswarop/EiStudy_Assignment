import { TextEditor } from './TextEditor';
import { UpperCaseFormatter } from './UpperCaseFormatter';
import { LowerCaseFormatter } from './LowerCaseFormatter';
import { TitleCaseFormatter } from './TitleCaseFormatter';

const editor = new TextEditor(new UpperCaseFormatter());
editor.publishText('Hello World!');

editor.setFormatter(new LowerCaseFormatter());
editor.publishText('Hello World!');

editor.setFormatter(new TitleCaseFormatter());
editor.publishText('hello world!');
