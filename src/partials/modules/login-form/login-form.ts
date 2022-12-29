import { Block } from '../../../utils';
import template from 'bundle-text:./template.hbs';

export default class LoginForm extends Block {
    static componentName: string = 'LoginForm';
    
    render() {
        return template;
    }
}
