import { Block } from '../../../utils';
import template from 'bundle-text:./template.hbs';

import './chat-preview.css';

export default class ChatPreview extends Block {
    render() {
        return template;
    }
}
