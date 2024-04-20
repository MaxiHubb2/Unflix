let temporadas = ["1","2","3","4","5","6","7","8","9"];
let capitulosPrimeraTemporada = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22"];
let capitulosSegundaTemporada = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22"];
let capitulosTercerTemporada = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20"];
let capitulosCuartaTemporada = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24"];
let capitulosQuintaTemporada = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24"];
let capitulosSextaTemporada = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24"];
let capitulosSeptimaTemporada = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24"];
let capitulosOctavaTemporada = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24"];
let capitulosNovenaTemporada = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24"];

$(document).ready(function(){

$(".seleccionador-de-temporada").change(function(){

    let inicial=$(this).val();
    $(".seleccionador-de-capitulo").empty();

    switch(inicial){
        case "1": 

        for(i in capitulosPrimeraTemporada){
            $(".seleccionador-de-capitulo").append("<option value="+i+">"+ capitulosPrimeraTemporada[i] + "</option>");

        }
        break;

        case "2": 

        for(i in capitulosSegundaTemporada){
            $(".seleccionador-de-capitulo").append("<option value="+i+">"+ capitulosSegundaTemporada[i] + "</option>");

        }
        break;
        case "3": 

        for(i in capitulosTercerTemporada){
            $(".seleccionador-de-capitulo").append("<option value="+i+">"+ capitulosTercerTemporada[i] + "</option>");

        }
        break;
        case "4": 

        for(i in capitulosCuartaTemporada){
            $(".seleccionador-de-capitulo").append("<option value="+i+">"+ capitulosCuartaTemporada[i] + "</option>");

        }
        break;
        case "5": 

        for(i in capitulosQuintaTemporada){
            $(".seleccionador-de-capitulo").append("<option value="+i+">"+ capitulosQuintaTemporada[i] + "</option>");

        }
        break;
        case "6": 

        for(i in capitulosSextaTemporada){
            $(".seleccionador-de-capitulo").append("<option value="+i+">"+ capitulosSextaTemporada[i] + "</option>");

        }
        break;
        case "7": 

        for(i in capitulosSeptimaTemporada){
            $(".seleccionador-de-capitulo").append("<option value="+i+">"+ capitulosSeptimaTemporada[i] + "</option>");

        }
        break;
        case "8": 

        for(i in capitulosOctavaTemporada){
            $(".seleccionador-de-capitulo").append("<option value="+i+">"+ capitulosOctavaTemporada[i] + "</option>");

        }
        break;
        
        case "9": 

        for(i in capitulosNovenaTemporada){
            $(".seleccionador-de-capitulo").append("<option value="+i+">"+ capitulosNovenaTemporada[i] + "</option>");

        }
        break;
        }
        
    console.log(inicial);

    
});


});


document.addEventListener("DOMContentLoaded", function () {
    const botonMostrarItems = document.getElementById("mostrarItems");
    const articulos = document.querySelectorAll(".contenedor article");
    let visible = true; 

    botonMostrarItems.addEventListener("click", function () {
        articulos.forEach(function (articulo) {
            articulo.style.display = visible ? "none" : "block";
        });
        visible = !visible; 
    });
});
