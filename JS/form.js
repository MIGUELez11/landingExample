function hasAnyUpperCase(str) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i].toUpperCase())
            return true;
    }
    return false
}

function handleError(e, message) {
    e.preventDefault();
    document.querySelector("p#error").innerText = message;
}

document.querySelector("input[type='submit").addEventListener("click", (e) => {
    let passwordInputs = document.querySelectorAll("main form input[type='password']");
    for (let i = 0; i < passwordInputs.length; i++) {
        let password = passwordInputs[i].value;
        if (password.length < 8) {
            handleError(e, "La contraseña es demasiado corta");
        }
        if (!hasAnyUpperCase(password)) {
            handleError(e, "La contraseña no tiene mayúsculas");
        }
    }
});
