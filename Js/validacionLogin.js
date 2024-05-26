function validar() {
    let error = false;
    let mensajeDeError = "";

    if (document.getElementById("username").value === '') {
        error = true;
        mensajeDeError += "<p>El nombre de usuario no puede estar vacío</p>";
    }
    
    if (document.getElementById("password").value === '') {
        error = true;
        mensajeDeError += "<p>La contraseña no puede estar vacía</p>";
    }
    
    if (error) {
        document.getElementById("mensaje").innerHTML = mensajeDeError;
        return false;
    } else {
        return true;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const submitButton = document.getElementById('submit');

    function validateForm() {
        const usernameValue = usernameInput.value;
        const passwordValue = passwordInput.value;

        const isUsernameValid = usernameValue.includes('@');

        const isFormValid = isUsernameValid && passwordValue !== '';

        submitButton.disabled = !isFormValid;

        if (isFormValid) {
            submitButton.classList.add('enabled');
        } else {
            submitButton.classList.remove('enabled');
        }
    }

    usernameInput.addEventListener('input', validateForm);
    passwordInput.addEventListener('input', validateForm);
});


document.getElementById("loginForm").addEventListener("submit", function(event) {
    if (!validar()) {
        event.preventDefault();
    } else {
        window.location.assign("Home.html");
    }
});
