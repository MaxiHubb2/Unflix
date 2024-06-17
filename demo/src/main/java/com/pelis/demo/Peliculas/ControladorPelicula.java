package com.pelis.demo.Peliculas;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;

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
    public ResponseEntity<Pelicula> obtenerPeliculaPorId(@PathVariable int id) {
        Pelicula pelicula = servicioPelicula.obtenerPeliculaPorId(id);
        if (pelicula != null) {
            return ResponseEntity.ok(pelicula);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping
    public Pelicula crearPelicula(@RequestBody Pelicula pelicula) {
        return servicioPelicula.crearPelicula(pelicula);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Pelicula> actualizarPelicula(@PathVariable int id, @RequestBody Pelicula pelicula) {
        Pelicula peliculaActualizada = servicioPelicula.actualizarPelicula(id, pelicula);
        if (peliculaActualizada != null) {
            return ResponseEntity.ok(peliculaActualizada);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminarPelicula(@PathVariable int id) {
        boolean eliminada = servicioPelicula.eliminarPelicula(id);
        if (eliminada) {
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/buscar")
    public List<Pelicula> buscarPeliculasPorTitulo(@RequestParam String titulo) {
        return servicioPelicula.buscarPeliculasPorTitulo(titulo);
    }
}

