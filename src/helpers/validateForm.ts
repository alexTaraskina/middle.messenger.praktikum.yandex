export type ValidateRuleType = 'login' | 'password' | 'email' | 'text' | 'phone' | 'password-repeat';

type ValidateRule = {
    value: string,
    type: ValidateRuleType,
}

const validatorsMap = new Map<ValidateRuleType, (value: string) => string>([
    ['login', validateLogin],
    ['password', validatePassword],
    ['email', validateEmail],
    ['phone', validatePhone]
]);

export function validateForm({ type, value }: ValidateRule): string {
    const onlyLettersRegexp = /^[A-ZА-ЯЁ]+$/i;
    const mobilePhoneRegexp = /^(\+?7|8)?9\d{9}$/;

    const validator = validatorsMap.get(type);
    return validator ? validator(value) : '';
}

function validateLogin(value: string): string {
    let error = generalStringValidation(value, 4);

    if (error) {
        return error;
    }

    return '';
}

function validatePassword(value:  string): string {
    let error = generalStringValidation(value, 8);

    if (error) {
        return error;
    }

    // {8,}                        от 8 символов
    // {8,20}                      от 8 до 20 символов
    // (?=.*\d)                    минимум одна цифра
    // (?=.*[a-z])                 минимум одна буква в нижнем регистре
    // (?=.*[A-Z])                 минимум одна буква в верхнем регистре
    // (?=.*[-#!$@%^&*_+~=:;?\/])  минимум один символ из набора
    const oneDijitRegexp = /\d/;
    const lowerCaseRegexp = /[a-z]/;
    const upperCaseRegexp = /[A-Z]/;
    const symbolRegexp = /[-#!$@%^&*_+~=:;?\/]/;

    if(!oneDijitRegexp.test(value)) {
        return 'Password should contain at least 1 number';
    } 
    else if (!lowerCaseRegexp.test(value)) {
        return 'Password should contain at least 1 letter in lower case';
    } 
    else if (!upperCaseRegexp.test(value)) {
        return 'Password should contain at least 1 letter in upper case';
    }
    else if (!symbolRegexp.test(value)) {
        return 'Pasword should contain at least 1 symbol';
    }

    return '';
}

function validateEmail(value: string): string {
    if (value.length === 0) {
        return 'Value can not be empty';
    }

    const emailRegexp = /^(.+)@(.+)\.(.+)$/;
    if (!emailRegexp.test(value)) {
        return 'e-mail is incorrect';
    }

    return '';
}

function validatePhone(value: string): string {
    if (value.length === 0) {
        return 'Value can not be empty';
    }

    const mobilePhoneRegexp = /^(\+?7|8)?9\d{9}$/;
    if (!mobilePhoneRegexp.test(value)) {
        return 'Phone format is +79xxxxxxxxx or 89xxxxxxxxx';
    }

    return '';
}

function generalStringValidation(value: string, minLettersCount: number) {
    if (value.length === 0) {
        return 'Value can not be empty';
    }
    else if (value.length < minLettersCount) {
        return `Value should contains more than ${minLettersCount - 1} letters`;
    }
}
