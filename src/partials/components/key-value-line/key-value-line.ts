import { Block } from '../../../utils';
import template from 'bundle-text:./template.hbs';

import './key-value-line.css';

export default class KeyValueLine extends Block {
    render() {
        return template;
    }
}
