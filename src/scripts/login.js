// temp js, to show error message on amrkup

const ClassNames = {
    ERROR_VISIBLE: 'form-input-group__error_visible',
};

document.addEventListener('DOMContentLoaded', () => {
    const adminLogin = 'admin';
    const adminPassword = 'admin';
    const loginForm = document.querySelector('#login-form');

    if (!loginForm) {
        return;
    }

    const loginEl = loginForm.querySelector('#login');
    const passwordEl = loginForm.querySelector('#password');
    const loginErrorEl = loginEl.nextElementSibling;
    const passwordErrorEl = passwordEl.nextElementSibling;
    const errorElements = [loginErrorEl, passwordErrorEl];

    function onInputClick() {
        errorElements.forEach((error) => error.classList.remove(ClassNames.ERROR_VISIBLE));
    }

    function showError(errorEl) {
        errorEl.classList.add(ClassNames.ERROR_VISIBLE);
    }

    function onFormSubmit(e) {
        e.preventDefault();
        if (loginEl.value !== adminLogin) {
            showError(loginErrorEl);
        }
        if (passwordEl.value !== adminPassword) {
            showError(passwordErrorEl);
        }
    }

    loginForm.addEventListener('submit', (e) => onFormSubmit(e));
    loginEl.addEventListener('click', onInputClick);
    passwordEl.addEventListener('click', onInputClick);
});
