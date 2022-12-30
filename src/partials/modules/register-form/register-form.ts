import { Block } from '../../../utils';
import template from 'bundle-text:./template.hbs';

interface RegisterFormProps {

}

export default class RegisterForm extends Block<RegisterFormProps> {
    static componentName: string = 'RegisterForm';

    constructor(props: RegisterFormProps) {
        super(props);

        this.setProps({
            events: {
                submit: (event: MouseEvent) => this.onSubmit(event)
            }
        });
    }

    onSubmit(event: MouseEvent) {
        event.preventDefault();

        interface RegisterData {
            email: string,
            login: string,
            firstName: string,
            secondName: string,
            phone: string,
            password: string
        };

        const emailEl = this.element?.querySelector('#email') as HTMLInputElement;
        const loginEl = this.element?.querySelector('#login') as HTMLInputElement;
        const firstNameEl = this.element?.querySelector('#firstName') as HTMLInputElement;
        const secondNameEl = this.element?.querySelector('#secondName') as HTMLInputElement;
        const phoneEl = this.element?.querySelector('#phone') as HTMLInputElement;
        const passwordEl = this.element?.querySelector('#password') as HTMLInputElement;

        const registerData: RegisterData = {
            email: emailEl?.value,
            login: loginEl?.value,
            firstName: firstNameEl?.value,
            secondName: secondNameEl?.value,
            phone: phoneEl?.value,
            password: passwordEl?.value,
        }

        console.log(registerData);
    }
    
    render() {
        return template;
    }
}
