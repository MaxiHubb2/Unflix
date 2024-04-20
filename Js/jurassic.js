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
