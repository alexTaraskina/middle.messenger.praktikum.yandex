import { Block } from '../../utils';
import { template } from 'handlebars';

export default class Login extends Block {
    render() {
        return `<main class="login">
                    {{{LoginForm}}}
                </main>`;
    }
}
