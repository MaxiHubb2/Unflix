document.addEventListener("DOMContentLoaded", function() {
    var apiUrl = 'http://localhost:8080/api/peliculas';

    // Muestra un mensaje en la pantalla durante 5 segundos
    function mostrarMensaje(mensaje, tipo) {
        var mensajeDiv = document.createElement('div');
        mensajeDiv.className = 'mensaje ' + (tipo || 'success');
        mensajeDiv.innerHTML = '<div class="mensaje-contenido"><span class="cerrar-mensaje">&times;</span><p>' + mensaje + '</p></div>';

        var contenedor = document.querySelector('.mensaje-contenedor');
        contenedor.appendChild(mensajeDiv);

        mensajeDiv.querySelector('.cerrar-mensaje').addEventListener('click', function() {
            mensajeDiv.remove();
        });

        setTimeout(function() {
            mensajeDiv.remove();
        }, 5000);
    }

    // Obtiene la lista de todas las películas del API
    function obtenerPeliculas() {
        return fetch(apiUrl).then(function(respuesta) {
            return respuesta.ok ? respuesta.json() : [];
        }).catch(function(error) {
            console.error("Error obteniendo las películas", error);
            return [];
        });
    }

    // Obtiene una película por su ID del API
    function obtenerPeliculaPorId(id) {
        return fetch(apiUrl + '/' + id).then(function(respuesta) {
            return respuesta.ok ? respuesta.json() : null;
        }).catch(function(error) {
            console.error("Error obteniendo la película por ID", error);
            return null;
        });
    }

    // Crea una fila HTML para una película
    function crearFilaPelicula(pelicula) {
        var fila = '<tr data-id="' + pelicula.id + '">';
        fila += '<td>' + pelicula.id + '</td>';
        fila += '<td>' + pelicula.tituloDeLaPelicula + '</td>';
        fila += '<td>' + pelicula.añoDeLanzamiento + '</td>';
        fila += '<td><img src="' + pelicula.poster + '" alt="' + pelicula.tituloDeLaPelicula + '" width="50" onerror="this.onerror=null; this.src=\'img/placeholder.png\';"></td>';
        fila += '<td><button class="editar" data-id="' + pelicula.id + '">Editar</button><button class="eliminar" data-id="' + pelicula.id + '">Eliminar</button></td>';
        fila += '</tr>';
        return fila;
    }

    // Carga las películas en la tabla HTML
    function cargarPeliculas(peliculas) {
        var tablaPeliculas = document.querySelector('#tabla-peliculas tbody');
        if (peliculas.length > 0) {
            var filas = peliculas.map(crearFilaPelicula).join('');
            tablaPeliculas.innerHTML = filas;
        } else {
            tablaPeliculas.innerHTML = '<tr><td colspan="5">No se encontraron películas</td></tr>';
        }
        añadirEventListeners();
    }

    // Limpia el formulario de creación de películas
    function limpiarFormulario() {
        document.getElementById('titulo-pelicula').value = '';
        document.getElementById('poster-pelicula').value = '';
        document.getElementById('año-pelicula').value = '';
    }

    // Maneja el envío del formulario de creación de películas
    document.getElementById('formulario-crear-pelicula').addEventListener('submit', function(e) {
        e.preventDefault();
        var datosPelicula = {
            tituloDeLaPelicula: document.getElementById('titulo-pelicula').value,
            poster: document.getElementById('poster-pelicula').value,
            añoDeLanzamiento: document.getElementById('año-pelicula').value
        };
        crearPelicula(datosPelicula).then(function() {
            limpiarFormulario();
            mostrarMensaje("Película agregada con éxito", 'success');
            return obtenerPeliculas();
        }).then(cargarPeliculas).catch(function(error) {
            console.error("Error añadiendo la película", error);
            mostrarMensaje("Error añadiendo la película", 'error');
        });
    });

    // Crea una nueva película usando el API
    function crearPelicula(datosPelicula) {
        return fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(datosPelicula)
        });
    }

    // Elimina una película usando el API
    function eliminarPelicula(id) {
        return fetch(apiUrl + '/' + id, {
            method: 'DELETE'
        });
    }

    // Edita una película existente usando el API
    function editarPelicula(id, datosPelicula) {
        return fetch(apiUrl + '/' + id, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(datosPelicula)
        });
    }

    // Abre el modal de edición con los datos de la película
    function abrirModalEdicion(pelicula) {
        var modal = document.getElementById('modal-editar-pelicula');
        modal.style.display = 'block';
        document.getElementById('id-editar-pelicula').value = pelicula.id;
        document.getElementById('editar-titulo-pelicula').value = pelicula.tituloDeLaPelicula;
        document.getElementById('editar-año-pelicula').value = pelicula.añoDeLanzamiento;
        document.getElementById('editar-poster-pelicula').value = pelicula.poster;
    }

    // Añade los event listeners para los botones de editar y eliminar
    function añadirEventListeners() {
        var botonesEliminar = document.querySelectorAll('.eliminar');
        for (var i = 0; i < botonesEliminar.length; i++) {
            botonesEliminar[i].addEventListener('click', function() {
                var id = this.dataset.id;
                if (confirm('¿Está seguro de que quiere eliminar esta película?')) {
                    eliminarPelicula(id).then(function() {
                        mostrarMensaje("Película eliminada con éxito", 'success');
                        obtenerPeliculas().then(cargarPeliculas);
                    }).catch(function(error) {
                        console.error("Error eliminando la película", error);
                        mostrarMensaje("Error eliminando la película", 'error');
                    });
                }
            });
        }

        var botonesEditar = document.querySelectorAll('.editar');
        for (var i = 0; i < botonesEditar.length; i++) {
            botonesEditar[i].addEventListener('click', function() {
                var id = this.dataset.id;
                obtenerPeliculaPorId(id).then(function(pelicula) {
                    if (pelicula) {
                        abrirModalEdicion(pelicula);
                    }
                }).catch(function(error) {
                    console.error("Error obteniendo la película por ID", error);
                });
            });
        }
    }

    

    // Maneja el envío del formulario de edición de películas
    document.getElementById('formulario-editar-pelicula').addEventListener('submit', function(e) {
        e.preventDefault();
        var id = document.getElementById('id-editar-pelicula').value;
        var datosPelicula = {
            tituloDeLaPelicula: document.getElementById('editar-titulo-pelicula').value,
            añoDeLanzamiento: document.getElementById('editar-año-pelicula').value,
            poster: document.getElementById('editar-poster-pelicula').value
        };
        editarPelicula(id, datosPelicula).then(function() {
            mostrarMensaje("Película editada con éxito", 'success');
            return obtenerPeliculas();
        }).then(cargarPeliculas).catch(function(error) {
            console.error("Error editando la película", error);
            mostrarMensaje("Error editando la película", 'error');
        });
        document.getElementById('modal-editar-pelicula').style.display = 'none';
    });

    // Cierra el modal de edición cuando se hace clic en el botón de cerrar
    document.querySelector('.close').addEventListener('click', function() {
        document.getElementById('modal-editar-pelicula').style.display = 'none';
    });

    // Cierra el modal de edición cuando se hace clic fuera de él
    window.addEventListener('click', function(event) {
        if (event.target === document.getElementById('modal-editar-pelicula')) {
            document.getElementById('modal-editar-pelicula').style.display = 'none';
        }
    });

    // Maneja el envío del formulario de búsqueda de películas
    document.getElementById('formulario-buscar-pelicula').addEventListener('submit', function(e) {
        e.preventDefault();
        var titulo = document.getElementById('buscar-titulo-pelicula').value.toLowerCase();
        obtenerPeliculas().then(function(peliculas) {
            var resultados = peliculas.filter(function(pelicula) {
                return pelicula.tituloDeLaPelicula.toLowerCase().includes(titulo);
            });
            cargarPeliculas(resultados);
            actualizarBotonVerTodas();
        }).catch(function(error) {
            console.error("Error buscando la película", error);
        });
    });

    // Maneja el botón de "Ver todas" para alternar entre mostrar todas las películas y ocultarlas
    document.getElementById('ver-todas').addEventListener('click', function() {
        var btnVerTodas = document.getElementById('ver-todas');
        if (btnVerTodas.textContent === "Ver todas") {
            obtenerPeliculas().then(cargarPeliculas).catch(function(error) {
                console.error("Error obteniendo las películas", error);
            });
            btnVerTodas.textContent = "Ocultar todas";
        } else {
            document.querySelector('#tabla-peliculas tbody').innerHTML = '';
            btnVerTodas.textContent = "Ver todas";
        }
    });

    // Actualiza el texto del botón "Ver todas" basándose en la cantidad de películas mostradas
    function actualizarBotonVerTodas() {
        var tablaPeliculas = document.querySelector('#tabla-peliculas tbody');
        var btnVerTodas = document.getElementById('ver-todas');
        if (tablaPeliculas.children.length > 0) {
            btnVerTodas.style.display = "inline-block";
            btnVerTodas.textContent = "Ocultar todas";
        } else {
            btnVerTodas.style.display = "none";
        }
    }

    // Inicializa la página obteniendo y cargando todas las películas
    obtenerPeliculas().then(cargarPeliculas).catch(function(error) {
        console.error("Error inicializando la aplicación", error);
    });
});
