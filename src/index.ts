import './styles/styles.css';

import { renderDOM, registerComponent } from  './utils';

import { Link } from './partials/components/link';
import { Button } from './partials/components/button';
import { FormInputGroup } from './partials/components/form-input-group';

import { Error } from './partials/modules/error';
import { LoginForm } from './partials/modules/login-form';

import { Login } from './pages/login';
import { Error404 } from './pages/404';
import { Main } from './pages/main';

registerComponent(Link);
registerComponent(Button);
registerComponent(FormInputGroup);

registerComponent(Error);
registerComponent(LoginForm);

registerComponent(Login);
registerComponent(Error404);
registerComponent(Main);

document.addEventListener('DOMContentLoaded', function() {
    if (window.location.pathname === '/login') {
        renderDOM(new Login());
    }
    else if (window.location.pathname === '/404') {
        renderDOM(new Error404());
    }
    else {
        renderDOM(new Main());
    }
});
