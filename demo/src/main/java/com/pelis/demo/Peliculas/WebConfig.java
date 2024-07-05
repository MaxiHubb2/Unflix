package com.pelis.demo.Peliculas;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SuppressWarnings("unused")
@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(@SuppressWarnings("null") CorsRegistry registry) {
        registry.addMapping("/api/**")
                .allowedOrigins("http://127.0.0.1:5501", "http://localhost:8081") 
                .allowedMethods("GET", "POST", "PUT", "DELETE","OPTIONS") 
                .allowedHeaders("*")
                .allowCredentials(true);
    }
}
