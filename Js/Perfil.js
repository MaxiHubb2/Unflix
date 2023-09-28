/*//obtener tu form desde el HTML
var form = document.getElementById('section-right-form').elements;
for(var i = 0; i<= form.length - 1; i++){
    //aquí puedes agregar mas validaciones que ocupes
    //para efectos de prueba, yo solo permite que se obtuvieran los input de text.
    if(form[i].type == 'text'){
        //imprimir en consola el valor
        console.log(form[i].value);
        //la key sera el ID de tu elemento y despues se asigna el valor
        localStorage.setItem(form[i].id, JSON.stringify(form[i].value));
    }
}
//para probar que se guardaron bien los elementos, probamos en consola.
console.log(localStorage);


var numeroDeTarjeta =[];
var elementoBotonDeEnviar = document.querySelector("#guardarCambio");

elementoBotonDeEnviar.addEventListener("click", guardar_localStorage);

function guardar_localStorage(){

    var variableTarjeta = document.querySelector("#Tarjeta").value;
    let tarjeta_a_usar = "Visa";

    numeroDeTarjeta.push(variableTarjeta);

    localStorage.setItem("tarjeta_a_usar", JSON.stringify(numeroDeTarjeta));
}

function comprobar_guardado(){
    var tarjetaGuardada = localStorage.getItem("#Tarjeta");
    var codigoGuardado = localStorage.getItem("#Codigo");

    var numeroDeTarjeta = document.getElementById("")
}

var numeroDeTarjeta = document.getElementById("#Tarjeta");
var codigoDeSeguridad = document.getElementById("#Codigo");

function guardar_localStorage(){

    localStorage.setItem("numeroDeTarjeta", numeroDeTarjeta);
    localStorage.setItem("codigoDeSeguridad", codigoDeSeguridad);
    
}
*/
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