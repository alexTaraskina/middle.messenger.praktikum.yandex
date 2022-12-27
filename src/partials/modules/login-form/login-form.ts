import { Block } from '../../../utils';

export default class LoginForm extends Block {
    render() {
        return `<form class="form form_type_login" id="login-form" name="login-form">
        <div class="form__top-content">
            <h1 class="form__heading">Вход</h1>
            {{{ FormInputGroup
                type="text" name="login" 
                placeholder="Логин" 
                errorMessage="Неверный логин"
                cssModificator="form__input-group" }}}
            {{{ FormInputGroup 
                type="password" name="password" 
                placeholder="Пароль" 
                errorMessage="Неверный пароль"
                cssModificator="form__input-group" }}}
        </div>
        <div class="form__bottom-content">
            <div class="form__button-wrapper">
                {{{ Button heading="Войти"}}}
            </div>
            {{{ Link class="form__link" linkText="Нет аккаунта?" href="#" }}}
        </div>
    </form>`;
    }
}
