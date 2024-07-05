package com.pelis.demo.Peliculas;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RepositorioPelicula extends JpaRepository<Pelicula, Integer> {
    List<Pelicula> findByTituloDeLaPeliculaContainingIgnoreCase(String tituloDeLaPelicula);
}
