$(document).ready(function() {
  let regexUsuario = /^[A-Za-z0-9]+$/;
  let regexEmail = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
  
  let button = $('#submit');
  button.attr("disabled",true);

  function validar(){
    let mensaje ="";
    let error = false ;
    $('#mensaje').empty();

    if($('#email').val().length == 0){
      mensaje += "<p>El mail es Requerido</p>";
      error = true;
    }

    if($('#nombreUsuario').val().length == 0){
      mensaje += "<p>El nombre de Usuario es Requerido</p>";
      error = true;
    }

    if(!regexEmail.test($('#email').val())){
      mensaje += "El mail no corresponde";
      error = true;
    }

    if(!regexUsuario.test($('#nombreUsuario').val())){
      mensaje += "El usuario no corresponde";
      error = true;
    }

    $('#mensaje').append(mensaje);

    return error;
      }
    
    $('#email, #nombreUsuario').keyup(function(){

      if(!validar()) button.attr("disabled",false)
      console.log();
    
    });

    $('#submit').click(function(){
      window.location.assign("index.html");
    })
  
});