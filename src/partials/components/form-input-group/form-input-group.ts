import { Block } from '../../../utils';
import template from 'bundle-text:./template.hbs';

import './form-input-group.css';

export default class FormInputGroup extends Block {
    static componentName: string = 'FormInputGroup';

    render() {
        return template;
    }
}
