import './styles/styles.css';

import { Block, renderDOM, registerComponent } from  './utils';
import { Login } from './pages/login';

import { Link } from './partials/components/link';
import { Button } from './partials/components/button';
import { FormInputGroup } from './partials/components/form-input-group';
import { LoginForm } from './partials/modules/login-form';

registerComponent(Link);
registerComponent(Button);
registerComponent(FormInputGroup);
registerComponent(LoginForm);

document.addEventListener('DOMContentLoaded', function() {
    renderDOM(new Login());
});
