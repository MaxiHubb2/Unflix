package com.pelis.demo.Peliculas;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pelis.demo.Excepcion.PeliculaNotFoundException;

@Service
public class ServicioPelicula {

    @Autowired
    private RepositorioPelicula repositorioPelicula;

    public List<Pelicula> obtenerTodasLasPeliculas() {
        return repositorioPelicula.findAll();
    }

    public Pelicula obtenerPeliculaPorId(int id) {
        return repositorioPelicula.findById(id).orElseThrow(() -> new PeliculaNotFoundException("Pelicula no encontrada"));
    }

    public Pelicula crearPelicula(Pelicula pelicula) {
        return repositorioPelicula.save(pelicula);
    }

    public Pelicula actualizarPelicula(int id, Pelicula detallesPelicula) {
        Pelicula pelicula = repositorioPelicula.findById(id).orElseThrow(() -> new PeliculaNotFoundException("Pelicula no encontrada"));
        pelicula.setTituloDeLaPelicula(detallesPelicula.getTituloDeLaPelicula());
        pelicula.setPoster(detallesPelicula.getPoster());
        pelicula.setAñoDeLanzamiento(detallesPelicula.getAñoDeLanzamiento());
        return repositorioPelicula.save(pelicula);
    }

    public void eliminarPelicula(int id) {
        if (!repositorioPelicula.existsById(id)) {
            throw new PeliculaNotFoundException("Pelicula no encontrada");
        }
        repositorioPelicula.deleteById(id);
    }

    public List<Pelicula> buscarPeliculasPorTitulo(String tituloDeLaPelicula) {
        return repositorioPelicula.findByTituloDeLaPeliculaContainingIgnoreCase(tituloDeLaPelicula);
    }
}
