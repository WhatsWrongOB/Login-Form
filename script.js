document.querySelector('.form').addEventListener("submit", (event) => {
    event.preventDefault();

    let email = document.querySelector('.email').value;
    let pass = document.querySelector('.password').value;
    const invalidEmail = document.querySelector('.para3');
    const invalidPass = document.querySelector('.para4');
    const chkemail = document.querySelector('.para1');
    const chkpass = document.querySelector('.para2');
    const emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (email.trim() === "") {
        chkemail.style.display = "block";
        chkpass.style.display = "none";
        invalidEmail.style.display = "none";
        invalidPass.style.display = "none";
        return false;
    }

    if (pass.trim() === "") {
        chkpass.style.display = "block";
        chkemail.style.display = "none";
        invalidEmail.style.display = "none";
        invalidPass.style.display = "none";
        return false;
    }
    if (pass.length < 6) {
        chkpass.style.display = "none";
        chkemail.style.display = "none";
        invalidEmail.style.display = "none";
        invalidPass.style.display = "block";
        return false;
    }

    function isValidEmail(email) {
        return emailPattern.test(email);
    }

    if (isValidEmail(email)) {
        invalidEmail.style.display = "none";
        chkpass.style.display = "none";
        chkemail.style.display = "none";
        invalidPass.style.display = "none";
    } else {
        invalidEmail.style.display = "block";
        chkpass.style.display = "none";
        chkemail.style.display = "none";
        invalidPass.style.display = "none";
    }

    return true;
});


document.addEventListener("DOMContentLoaded", function () {
    const emailInput = document.querySelector('.email');
    const passwordInput = document.querySelector('.password');
    const emailLabel = document.querySelector('.label');
    const passwordLabel = document.querySelector('.label2');

    emailInput.addEventListener("focus", () => {
        emailLabel.classList.add("focused");
    });

    emailInput.addEventListener("blur", () => {
        if (emailInput.value === "") {
            emailLabel.classList.remove("focused");
        }
    });

    passwordInput.addEventListener("focus", () => {
        passwordLabel.classList.add("focused");
    });

    passwordInput.addEventListener("blur", () => {
        if (passwordInput.value === "") {
            passwordLabel.classList.remove("focused");
        }
    });
});

const showPass = document.querySelector('#show')
const password = document.querySelector('.password')

const showPassword = () => {
    if (password.type === 'password') {
        password.type = "text"
    }
    else {
        password.type = "password"
    }
}

const passwordTyped = () => {
    if (password.value.length > 0) {
        showPass.style.display = "inline"
    }
    else {
        showPass.style.display = "none"
    }
}

password.addEventListener('input', passwordTyped)
showPass.addEventListener('click', showPassword)


