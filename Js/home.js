$(document).ready(function() {
    const apiKey = "725cbc87";
    const peliculas = [
        { id: "termi", title: "The Terminator", url: "Terminator.html" },
        { id: "deadp", title: "Deadpool", url: "Deadpool.html" },
        { id: "duro", title: "Die Hard", url: "DuroDeMatar.html" },
        { id: "jaws", title: "Jaws", url: "Jaws.html" },
        { id: "juras", title: "Jurassic Park", url: "JurassicPark.html" },
        { id: "himym", title: "How I Met Your Mother", url: "HowIMetYourMother.html" },
        { id: "seinf", title: "Seinfeld", url: "Seinfield.html" },
        { id: "office", title: "The Office", url: "TheOffice.html" },
        { id: "70show", title: "That '70s Show", url: "Thats70Show.html" },
        { id: "friends", title: "Friends", url: "Friends.html" }
    ];

    function cargarImagenes() {
        peliculas.forEach(pelicula => {
            $.getJSON(`https://www.omdbapi.com/?t=${encodeURIComponent(pelicula.title)}&apikey=${apiKey}`, function(data) {
                if (data.Poster && data.Poster !== "N/A") {
                    $(`#${pelicula.id}`).html(`<a href="${pelicula.url}" target="_blank"><img src="${data.Poster}" alt="${pelicula.title}" width="100%" height="100%"></a>`);
                }
            });
        });
    }

    cargarImagenes();

    $("#seleccionador-de-categoria").change(function() {
        let categoria = $(this).val();
        switch (categoria) {
            case "0":
                $(".contenedor .item2, .contenedor .item3, .contenedor .item4, .contenedor .item5").show();
                $(".contenedor article").width(200);
                break;
            case "1":
                $(".contenedor .item4, .contenedor .item5, #himym, #friends, #seinf").hide();
                $("#deadp, #termi, #duro").show();
                $(".contenedor article").width(200);
                break;
            case "2":
                $(".contenedor .item4, .contenedor .item5").show();
                $(".contenedor .item2, .contenedor .item3, #office, #70show").hide();
                $(".contenedor article").width(200);
                break;
            case "3":
                $(".contenedor .item3, .contenedor .item4, .contenedor .item5, #himym").show();
                $("#termi, #jaws, #juras, #duro").hide();
                $(".contenedor article").width(200);
                break;
            case "4":
                $("#termi, #juras").show();
                $("#jaws, #deadp, #duro, #himym, #friends, #seinf, #office, #70show").hide();
                $(".contenedor article").width(200);
                break;
            case "5":
                $("#70show, #himym, #friends").show();
                $("#jaws, #deadp, #duro, #seinf, #office, #termi, #juras").hide();
                $(".contenedor article").width(200);
                break;
        }
    });

    $("#buscador").keyup(function(e) {
        let buscador = $(this).val().toLowerCase();
        if (!buscador) {
            $(".item2, .item3, .item4, .item5").show();
            $(".contenedor article").width(200);
            return;
        }
        $(".contenedor article").hide();
        peliculas.forEach(pelicula => {
            if (pelicula.title.toLowerCase().includes(buscador)) {
                $(`#${pelicula.id}`).show();
                $(".contenedor article").width(200);
            }
        });
    });

    document.addEventListener("DOMContentLoaded", function() {
        const menuToggle = document.querySelector(".menu-toggle");
        const menu = document.querySelector(".menu");

        menuToggle.addEventListener("click", function() {
            menu.classList.toggle("open");
        });
    });

    function cerrar() {
        localStorage.clear();
    }
});
