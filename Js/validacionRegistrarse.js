let regexLetras = /^[A-Za-z]+$/;
let regexNumero = /^[0-9]+$/;
let regexLetrasYNumeros = /^[A-Za-z0-9\s]+$/;
let regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function mostrarError(id, mensaje) {
    document.getElementById(id).innerText = mensaje;
    document.getElementById(id).style.display = "block";
}

function mostrarTick(id) {
    document.getElementById(id).style.display = "inline";
}

function ocultarErrorYTick(idError, idTick) {
    document.getElementById(idError).style.display = "none";
    document.getElementById(idTick).style.display = "none";
}

function validar() {
    let error = false;

    let nombre = document.getElementById("Nombre").value;
    let apellido = document.getElementById("Apellido").value;
    let email = document.getElementById("Email").value;
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let repetirPassword = document.getElementById("repetirPassword").value;
    let numeroTarjeta = document.getElementById("Numero_de_tarjeta").value;
    let codigoSeguridad = document.getElementById("Codigo").value;

    ocultarErrorYTick("nombre-error", "nombre-tick");
    ocultarErrorYTick("apellido-error", "apellido-tick");
    ocultarErrorYTick("email-error", "email-tick");
    ocultarErrorYTick("username-error", "username-tick");
    ocultarErrorYTick("password-error", "password-tick");
    ocultarErrorYTick("repetirPassword-error", "repetirPassword-tick");
    ocultarErrorYTick("tarjeta-error", "tarjeta-tick");
    ocultarErrorYTick("cupon-error", "cupon-tick");

    if (!regexLetras.test(nombre)) {
        error = true;
        mostrarError("nombre-error", "Solo letras permitido");
    } else {
        mostrarTick("nombre-tick");
    }

    if (!regexLetras.test(apellido)) {
        error = true;
        mostrarError("apellido-error", "Solo letras permitido");
    } else {
        mostrarTick("apellido-tick");
    }

    if (!regexCorreo.test(email)) {
        error = true;
        mostrarError("email-error", "Correo no válido");
    } else {
        mostrarTick("email-tick");
    }

    if (!regexLetrasYNumeros.test(username)) {
        error = true;
        mostrarError("username-error", "Solo letras y números permitido");
    } else {
        mostrarTick("username-tick");
    }

    if (!regexLetrasYNumeros.test(password) || password.length < 8) {
        error = true;
        mostrarError("password-error", "Mínimo 8 caracteres, letras y números permitido");
    } else {
        mostrarTick("password-tick");
    }

    if (password !== repetirPassword) {
        error = true;
        mostrarError("repetirPassword-error", "Las contraseñas no coinciden");
    } else {
        mostrarTick("repetirPassword-tick");
    }

    let metodoPagoSeleccionado = document.querySelector('input[name="Metodo_de_pago"]:checked');
    if (!metodoPagoSeleccionado) {
        error = true;
        mostrarError("mensaje", "Selecciona un método de pago");
    } else {
        if (document.getElementById("Tarjeta").checked) {
            if (!regexNumero.test(numeroTarjeta) || !regexNumero.test(codigoSeguridad)) {
                error = true;
                mostrarError("tarjeta-error", "Datos de tarjeta no válidos");
            } else {
                mostrarTick("tarjeta-tick");
            }
        }

        if (document.getElementById("Cupon").checked) {
            let cuponSeleccionado = document.getElementById("Rapipago").checked || document.getElementById("Pago_Facil").checked;
            if (!cuponSeleccionado) {
                error = true;
                mostrarError("cupon-error", "Debes elegir al menos un cupón de pago");
            } else {
                mostrarTick("cupon-tick");
            }
        }
    }

    if (error) {
        return false;
    } else {
        const usuario = {
            nombre: nombre,
            apellido: apellido,
            email: email,
            username: username,
            password: password
        };
        localStorage.setItem('usuario', JSON.stringify(usuario));
        alert("Registro exitoso. Redirigiendo a la página de inicio.");
        window.location.href = "index.html";
        return false;
    }
}

document.getElementById("registroForm").addEventListener("submit", function(event) {
    if (!validar()) {
        event.preventDefault();
    } else {
        const usuario = {
            nombre: document.getElementById("Nombre").value,
            apellido: document.getElementById("Apellido").value,
            email: document.getElementById("Email").value,
            username: document.getElementById("username").value,
            password: document.getElementById("password").value
        };
        localStorage.setItem('usuario', JSON.stringify(usuario));
        alert("Registro exitoso. Redirigiendo a la página de inicio.");
        window.location.href = "index.html"; 
    }
});

