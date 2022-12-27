import { Block } from '../../../utils';
import template from 'bundle-text:./template.hbs';

import './link.css';

export default class Link extends Block {
    render() {
        return template; 
    }
}
