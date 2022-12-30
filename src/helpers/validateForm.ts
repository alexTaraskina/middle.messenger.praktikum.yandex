import { Login } from "pages/login";

export enum ValidateRuleType {
    Login = 'login',
    Password = 'password',
}

type ValidateRules = {
    value: string,
    type: ValidateRuleType,
}

export function validateForm(rules: ValidateRules[]) {
    let errorMessage = '';

    for(let i = 0; i < rules.length; i++) {
        const { type, value } = rules[i];

        if (type === ValidateRuleType.Login) {
            if (value.length === 0) {
                errorMessage = 'Login can not be empty';
                break;
            }
            else if (value.length < 4) {
                errorMessage = 'Login should contains more than 3 letters';
                break;
            }
        }
    }

    return errorMessage;
} 
