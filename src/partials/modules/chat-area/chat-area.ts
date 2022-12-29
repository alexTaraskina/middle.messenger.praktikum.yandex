import { Block } from '../../../utils';
import template from 'bundle-text:./template.hbs';

import './chat-area.css';

export default class ChatArea extends Block {
    render() {
        return template;
    }
}
