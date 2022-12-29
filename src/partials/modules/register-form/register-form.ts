import { Block } from '../../../utils';
import template from 'bundle-text:./template.hbs';

export default class RegisterForm extends Block {
    static componentName: string = 'RegisterForm';
    
    render() {
        return template;
    }
}
