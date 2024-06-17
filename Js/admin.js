document.addEventListener("DOMContentLoaded", function () {
    const apiUrl = 'https://unflixapp.netlify.app/perpetual-fascination-production.up.railway.app/api/peliculas';

    // Función para obtener todas las películas
    async function obtenerPeliculas() {
        try {
            const respuesta = await fetch(apiUrl);
            if (respuesta.ok) {
                return await respuesta.json();
            }
            return [];
        } catch (error) {
            console.error("Error obteniendo las películas", error);
            return [];
        }
    }

    // Función para obtener una película por su ID
    async function obtenerPeliculaPorId(id) {
        try {
            const respuesta = await fetch(`${apiUrl}/${id}`);
            if (respuesta.ok) {
                return await respuesta.json();
            }
            return null;
        } catch (error) {
            console.error("Error obteniendo la película por ID", error);
            return null;
        }
    }

    // Función para crear una fila de la película
    function crearFilaPelicula(pelicula) {
        return `
            <tr data-id="${pelicula.id}">
                <td>${pelicula.id}</td>
                <td>${pelicula.tituloDeLaPelicula}</td>
                <td>${pelicula.añoDeLanzamiento}</td>
                <td><img src="${pelicula.poster}" alt="${pelicula.tituloDeLaPelicula}" width="50" onerror="this.onerror=null; this.src='img/placeholder.png';"></td>
                <td>
                    <button class="editar" data-id="${pelicula.id}">Editar</button>
                    <button class="eliminar" data-id="${pelicula.id}">Eliminar</button>
                </td>
            </tr>
        `;
    }

    // Función para cargar películas en la tabla
    async function cargarPeliculas(peliculas) {
        const tablaPeliculas = document.querySelector('#tabla-peliculas tbody');
        tablaPeliculas.innerHTML = '';
        if (peliculas.length > 0) {
            peliculas.forEach(pelicula => {
                tablaPeliculas.insertAdjacentHTML('beforeend', crearFilaPelicula(pelicula));
            });
        } else {
            tablaPeliculas.insertAdjacentHTML('beforeend', '<tr><td colspan="5">No se encontraron películas</td></tr>');
        }
        añadirEventListeners();
    }

    // Función para limpiar el formulario
    function limpiarFormulario() {
        document.getElementById('titulo-pelicula').value = '';
        document.getElementById('poster-pelicula').value = '';
        document.getElementById('año-pelicula').value = '';
    }

    // Event listener para crear una nueva película
    document.getElementById('formulario-crear-pelicula').addEventListener('submit', async function (e) {
        e.preventDefault();
        const datosPelicula = {
            tituloDeLaPelicula: document.getElementById('titulo-pelicula').value,
            poster: document.getElementById('poster-pelicula').value,
            añoDeLanzamiento: document.getElementById('año-pelicula').value
        };
        try {
            await fetch(apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(datosPelicula)
            });
            limpiarFormulario();
            cargarPeliculas(await obtenerPeliculas());
        } catch (error) {
            console.error("Error añadiendo la película", error);
        }
    });

    // Función para eliminar una película
    async function eliminarPelicula(id) {
        try {
            await fetch(`${apiUrl}/${id}`, { method: 'DELETE' });
            cargarPeliculas(await obtenerPeliculas());
        } catch (error) {
            console.error("Error eliminando la película", error);
        }
    }

    // Función para editar una película
    async function editarPelicula(id, datosPelicula) {
        try {
            await fetch(`${apiUrl}/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(datosPelicula)
            });
            cargarPeliculas(await obtenerPeliculas());
        } catch (error) {
            console.error("Error editando la película", error);
        }
    }

    // Función para abrir el modal de edición
    function abrirModalEdicion(pelicula) {
        const modal = document.getElementById('modal-editar-pelicula');
        modal.style.display = 'block';
        document.getElementById('id-editar-pelicula').value = pelicula.id;
        document.getElementById('editar-titulo-pelicula').value = pelicula.tituloDeLaPelicula;
        document.getElementById('editar-año-pelicula').value = pelicula.añoDeLanzamiento;
        document.getElementById('editar-poster-pelicula').value = pelicula.poster;
    }

    // Event listener para editar película
    document.getElementById('formulario-editar-pelicula').addEventListener('submit', async function (e) {
        e.preventDefault();
        const id = document.getElementById('id-editar-pelicula').value;
        const datosPelicula = {
            tituloDeLaPelicula: document.getElementById('editar-titulo-pelicula').value,
            añoDeLanzamiento: document.getElementById('editar-año-pelicula').value,
            poster: document.getElementById('editar-poster-pelicula').value
        };
        await editarPelicula(id, datosPelicula);
        document.getElementById('modal-editar-pelicula').style.display = 'none';
    });

    // Event listener para cerrar el modal de edición
    document.querySelector('.close').addEventListener('click', function () {
        document.getElementById('modal-editar-pelicula').style.display = 'none';
    });

    // Event listener para cerrar el modal de edición al hacer clic fuera
    window.onclick = function (event) {
        if (event.target === document.getElementById('modal-editar-pelicula')) {
            document.getElementById('modal-editar-pelicula').style.display = 'none';
        }
    };

    // Event listener para buscar películas
    document.getElementById('formulario-buscar-pelicula').addEventListener('submit', async function (e) {
        e.preventDefault();
        const titulo = document.getElementById('buscar-titulo-pelicula').value.toLowerCase();
        const peliculas = await obtenerPeliculas();
        const resultados = peliculas.filter(pelicula => pelicula.tituloDeLaPelicula.toLowerCase().includes(titulo));
        cargarPeliculas(resultados);
        actualizarBotonVerTodas();
    });

    // Event listener para ver/contraer todas las películas
    document.getElementById('ver-todas').addEventListener('click', async function () {
        const boton = this;
        const peliculas = await obtenerPeliculas();
        if (boton.innerText === 'Ver todas') {
            cargarPeliculas(peliculas);
            boton.innerText = 'Contraer todas';
        } else {
            cargarPeliculas([]);
            boton.innerText = 'Ver todas';
        }
    });

    // Función para actualizar el texto del botón "Ver todas"
    function actualizarBotonVerTodas() {
        const verTodasBtn = document.getElementById('ver-todas');
        verTodasBtn.innerText = 'Ver todas';
    }

    // Función para añadir event listeners a los botones de editar y eliminar
    function añadirEventListeners() {
        document.querySelectorAll('.eliminar').forEach(boton => {
            boton.addEventListener('click', async function () {
                const id = this.getAttribute('data-id');
                if (confirm('¿Está seguro de que quiere eliminar esta película?')) {
                    await eliminarPelicula(id);
                }
            });
        });

        document.querySelectorAll('.editar').forEach(boton => {
            boton.addEventListener('click', async function () {
                const id = this.getAttribute('data-id');
                const pelicula = await obtenerPeliculaPorId(id);
                if (pelicula) {
                    abrirModalEdicion(pelicula);
                }
            });
        });
    }

    // Inicializar el estado del botón "Ver todas"
    actualizarBotonVerTodas();
});
