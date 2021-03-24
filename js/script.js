const form = document.querySelector('.js-form');
const email = document.querySelector('.js-email');
const emailError = document.querySelector('.js-form-error');

form.setAttribute('novalidate', '');

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function showError(error) {
    error.classList.remove('hidden');
}

function hideError(error) {
    error.classList.add('hidden');
}

form.addEventListener('input', () => {
    if(isEmail(email.value)) {
        email.classList.remove('not-valid');
        hideError(emailError);
    }
})

form.addEventListener('submit', e => {
    e.preventDefault();

    if(!isEmail(email.value)) {
        email.classList.add('not-valid');
        showError(emailError);
    }
})