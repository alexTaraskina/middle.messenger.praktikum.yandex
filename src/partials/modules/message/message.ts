import { Block } from '../../../utils';
import template from 'bundle-text:./template.hbs';

import './message.css';

export default class Message extends Block {
    render() {
        return template;
    }
}
