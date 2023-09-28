let regexLetras = /^[A-Za-z]+$/;
let regexNumero = /^[0-9]+$/;
let regexLetrasYNumeros = /^[A-Za-z0-9\s]+$/;
let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let regexContraseña = /^(?=.{2,}[A-Za-z])(?=.{2,}\d)(?=.{2,}[@$!%#?&])([A-Za-z\d@$!%#?&]{8,})$/;

function validar() {
    let error = false;
    let mensajeDeError = "";
    if (!regexLetras.test(document.getElementById("Nombre").value) || document.getElementById("Nombre").value == '') {
        error = true;
        mensajeDeError += "<p>El nombre no es valido</p>";
    } if (!regexLetras.test(document.getElementById("Apellido").value) || document.getElementById("Apellido").value == '') {
        error = true;
        mensajeDeError += "<p>El apellido no es valido</p>";
    } if (!regexEmail.test(document.getElementById("Email").value)) {
        error = true;
        mensajeDeError += "<p>El email no es valido</p>";
    } if (!regexLetrasYNumeros.test(document.getElementById("Nombre de usuario").value) || document.getElementById("Nombre de usuario").value == '') {
        error = true;
        mensajeDeError += "<p>El nombre de usuario no es valido</p>";
    } if (!regexContraseña.test(document.getElementById("Contraseña").value)) {
        error = true;
        mensajeDeError += "<p>La contraseña no es valida</p>";
    } if (!regexContraseña.test(document.getElementById("Repetir contraseña").value)) {
        error = true;
    } if (!(document.getElementById("Contraseña").value === (document.getElementById("Repetir contraseña").value))) {
        error = true;
        mensajeDeError += "<p>Las contraseñas no son iguales<p>";
    }
    let metodoDePago = document.getElementsByName("Metodo de pago");
    let seleccionado = false;
    for (i in metodoDePago) {
        if (metodoDePago[i].checked) {
            seleccionado = true;

        }
    }
    if (!seleccionado) {
        error = true;
        mensajeDeError += "<p>Debes seleccionar un metodo de pago</p>";
    }
    if (document.getElementById("Codigo").value == 0 || document.getElementById("Codigo").value.length > 3 || document.getElementById("Codigo").value == '') {
        error = true;
        mensajeDeError += "<p>El código de la tarjeta es invalido</p>";
    }
    let checkearCupon = false;
    if (document.getElementById("Cupon").checked && document.getElementById("Rapipago").checked || document.getElementById("Pago facil")) {
        checkearCupon = true;
    }
    if (!checkearCupon) {
        error = true;
        mensajeDeError += "<p>Debes elegir al menos un cupon de pago</p>";
    }
    if ((document.getElementById("Tarjeta").value.length) < 16 || (document.getElementById("Tarjeta").value.length) > 20) {
        error = true;
        mensajeDeError += "<p>La tarjeta es invalida</p>";
    }
    if (error) {
        document.getElementById("mensaje").innerHTML = mensajeDeError;
        return false;
    }
    else {
        return true;
    }
}