package com.pelis.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import io.github.cdimascio.dotenv.Dotenv;

@SpringBootApplication
public class DemoApplication {

    public static void main(String[] args) {
        // Cargar el archivo .env usando dotenv-java
        Dotenv dotenv = Dotenv.load();
        
        // Configurar propiedades del sistema con las variables de entorno cargadas
        System.setProperty("DB_URL", dotenv.get("DB_URL"));
        System.setProperty("DB_USERNAME", dotenv.get("DB_USERNAME"));
        System.setProperty("DB_PASSWORD", dotenv.get("DB_PASSWORD"));
        
        SpringApplication.run(DemoApplication.class, args);
    }

    @Configuration
    public class WebConfig implements WebMvcConfigurer {

        @Override
        public void addCorsMappings(@SuppressWarnings("null") CorsRegistry registry) {
            registry.addMapping("/api/**")
                    .allowedOrigins("http://127.0.0.1:5501", "http://localhost:8081", "https://unflixapp.netlify.app") 
                    .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS") 
                    .allowedHeaders("*")
                    .allowCredentials(true);
        }
    }
}
