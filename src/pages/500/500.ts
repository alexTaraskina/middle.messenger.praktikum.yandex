import { Block } from '../../utils';
import template from 'bundle-text:./template.hbs';

export default class Error500 extends Block {
    render() {
        return template;
    }
}
