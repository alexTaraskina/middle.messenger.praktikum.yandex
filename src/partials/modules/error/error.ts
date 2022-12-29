import { Block } from '../../../utils';
import template from 'bundle-text:./template.hbs';

import './error.css';

export default class Error extends Block {
    render() {
        return template;
    }
}
