package com.pelis.demo.Excepcion;

public class PeliculaNotFoundException extends RuntimeException {
    public PeliculaNotFoundException(String message) {
        super(message);
    }
}
