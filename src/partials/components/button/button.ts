import { Block } from "../../../utils";
import template from 'bundle-text:./template.hbs';

import './button.css';

export default class Button extends Block {
    render() {
        return template;
    }
}
