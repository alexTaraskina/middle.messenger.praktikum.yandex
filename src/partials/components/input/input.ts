import { Block } from 'core';
import template from 'bundle-text:./template.hbs';

import './input.css';

export default class Input extends Block { 
    render() {
        return template;
    }
}
