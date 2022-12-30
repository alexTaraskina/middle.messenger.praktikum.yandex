import { Block } from 'utils';
import template from 'bundle-text:./template.hbs';

interface LoginFormProps {
}

export default class LoginForm extends Block<LoginFormProps> {
    static componentName: string = 'LoginForm';

    constructor(props: LoginFormProps) {
        super(props);

        this.setProps({
            events: {
                submit: (event: MouseEvent) => this.onSubmit(event)
            }
        });
    }

    onSubmit(event: MouseEvent) {
        event.preventDefault();

        interface LoginData {
            login: string,
            password: string
        };

        const loginEl = this.element?.querySelector('#login') as HTMLInputElement;
        const passwordEl = this.element?.querySelector('#password') as HTMLInputElement;

        const loginData: LoginData = {
            login: loginEl?.value,
            password: passwordEl?.value,
        }

        console.log(loginData);
    }

    render() {
        return template;
    }
}
