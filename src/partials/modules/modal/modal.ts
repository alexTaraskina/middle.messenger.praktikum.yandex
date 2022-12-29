import { Block } from "../../../utils";
import template from 'bundle-text:./template.hbs';

import './modal.css';

export default class Modal extends Block {
    render() {
        return template;
    }
}
