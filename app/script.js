const form = document.querySelector('.js-form');
const firstName = document.querySelector('.js-first-name');
const lastName = document.querySelector('.js-last-name');
const email = document.querySelector('.js-email');
const password = document.querySelector('.js-password');

const required = [firstName, lastName, email, password];

form.setAttribute("novalidate", "");

function checkRequired(inputArr) {
    inputArr.forEach(input => {
        if (!input.value) {
            showError(input, `${getInputName(input)} cannot be empty`);
        }
    })
}

function checkEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(email.value)) {
        showError(email, `Looks like this is not an email`)
    } 
}

function showError(input, message) {
    const inputContainer = input.closest('.js-input-container');
    const errorMsg = inputContainer.querySelector('.js-error-msg');

    inputContainer.classList.add('not-valid');
    errorMsg.textContent = message;
}

function removeError(input) {
    const inputContainer = input.closest('.js-input-container');
    inputContainer.classList.remove('not-valid');
}

function getInputName(input) {
    return `${input.name.charAt(0).toUpperCase()}` + `${input.name.slice(1)}`
}

form.addEventListener('submit', e => {
    e.preventDefault();

    checkRequired(required);

    if (email.value) {
        checkEmail(email);
    }
})

required.forEach(input => {
    input.addEventListener('input', () => {
        if (input.value) {
            removeError(input);
            if (input === email) {
                checkEmail(email);
            }
    }})
})