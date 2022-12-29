import { Block } from 'utils';
import template from 'bundle-text:./template.hbs';

export default class LoginForm extends Block {
    static componentName: string = 'LoginForm';

    constructor() {
        super();

        this.setProps({
            onsubmit: () => { console.log('submit'); }
        });
    }
    
    render() {
        return template;
    }
}
