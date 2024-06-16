$(document).ready(function () {
    $("#guardarCambio").click(function () {
      var numeroDeTarjeta = $("#Tarjeta").val();
      var codigoDeSeguridad = $("#Codigo").val();
      localStorage.setItem("numeroDeTarjeta", numeroDeTarjeta);
      localStorage.setItem("codigoDeSeguridad", codigoDeSeguridad);

      $('#cancelarCambio').click(function(){
        localStorage.removeItem("numeroDeTarjeta",numeroDeTarjeta);
        localStorage.removeItem("codigoDeSeguridad",codigoDeSeguridad);
        localStorage.clear(numeroDeTarjeta,codigoDeSeguridad);
    });

    });
   
    
});

let regexLetras = /^[A-Za-z]+$/;
let regexNumero = /^[0-9]+$/;
let regexLetrasYNumeros = /^[A-Za-z0-9\s]+$/;
let regexEmail = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
let regexContraseña = /^(?=.{2,}[A-Za-z])(?=.{2,}\d)(?=.{2,}[@$!%#?&])([A-Za-z\d@$!%#?&]{8,})$/;


function validar() {
    let error = false;
    let mensajeDeError = "";
    
    if (!regexContraseña.test(document.getElementById("contrasenia").value)) {
        error = true;
        mensajeDeError += "<p>La contraseña no es valida</p>";
    }
    if (!(document.getElementById("contrasenia").value === (document.getElementById("repContrasenia").value))) {
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

    if (error) {
        document.getElementById("mensaje").innerHTML = mensajeDeError;
        return false;
    } else {
        return true;
    }


    

}

$(document).ready(function() {
    const userRoles = ['USER', 'ADMIN'];

    function checkAdminRole(roles) {
        return roles.includes('ADMIN');
    }

    if (checkAdminRole(userRoles)) {
        $('#admin-button').show();
    }
});