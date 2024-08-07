package com.pelis.demo.Peliculas;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api/peliculas")
@CrossOrigin(origins = {"https://unflixapp.netlify.app", "http://localhost:8081"})
public class ControladorPelicula {

    @Autowired
    private ServicioPelicula servicioPelicula;

    @GetMapping
    public List<Pelicula> obtenerTodasLasPeliculas() {
        return servicioPelicula.obtenerTodasLasPeliculas();
    }

    @GetMapping("/{id}")
    public Pelicula obtenerPeliculaPorId(@PathVariable int id) {
        return servicioPelicula.obtenerPeliculaPorId(id);
    }

    @PostMapping
    public Pelicula crearPelicula(@RequestBody Pelicula pelicula) {
        return servicioPelicula.crearPelicula(pelicula);
    }

    @PutMapping("/{id}")
    public Pelicula actualizarPelicula(@PathVariable int id, @RequestBody Pelicula pelicula) {
        return servicioPelicula.actualizarPelicula(id, pelicula);
    }

    @DeleteMapping("/{id}")
    public void eliminarPelicula(@PathVariable int id) {
        servicioPelicula.eliminarPelicula(id);
    }

    @GetMapping("/buscar")
    public List<Pelicula> buscarPeliculasPorTitulo(@RequestParam String titulo) {
        return servicioPelicula.buscarPeliculasPorTitulo(titulo);
    }
}
