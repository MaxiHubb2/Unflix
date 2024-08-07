# Unflix - Tu plataforma de películas y series

Unflix es una plataforma en línea que te permite explorar y buscar tus películas y series favoritas. Con una interfaz intuitiva y amigable, encontrarás el entretenimiento que deseas con facilidad.

## Demo en Vivo

Visita [Unflix en línea](https://unflixapp.netlify.app/) para probar la aplicación en vivo.

## Funciones Destacadas

- **Exploración de Contenido:** Navega a través de una amplia variedad de películas y series organizadas por categoría.
- **Búsqueda Rápida:** Utiliza la función de búsqueda para encontrar rápidamente tus películas y series favoritas.
- **Registro y Inicio de Sesión:** Crea una cuenta personalizada o inicia sesión para guardar tus preferencias y ver el contenido exclusivo.
- **Diseño Responsivo:** Disfruta de Unflix en cualquier dispositivo, desde tu computadora de escritorio hasta tu teléfono móvil.

## Login

![Login](https://i.imgur.com/yL1NPzw.png)

## Home
![Home](https://i.imgur.com/YO3LLgP.png)

## Pelis
![Pelis](https://i.imgur.com/uhAtNBV.png)

## Series
![Series](https://i.imgur.com/S2b3pMt.png)

## Buscador
![Buscador](https://i.imgur.com/eXnFYw8.png)

### Administrador de Película
<img src="https://i.imgur.com/UIMvjsH.png" alt="Detalles de Película" width="700">

## Tecnologías Utilizadas

- **Frontend:**
  - HTML5 y CSS3 para la estructura y estilo de la página.
  - JavaScript y jQuery para la interactividad y la lógica de búsqueda.
  - Alojamiento en Netlify para una fácil implementación y acceso en línea.
  
- **Backend:**
  - Java 11
  - Spring Boot 2.5.4
  - JPA/Hibernate
  - MySQL (o la base de datos que utilices)

## Uso Local

Si deseas ejecutar Unflix en tu entorno local, sigue estos pasos:

1. **Clona este repositorio en tu máquina local:**
    ```bash
    git clone https://github.com/tuusuario/unflix.git
    ```

2. **Configura la base de datos:**

    Crea una base de datos en MySQL y actualiza el archivo `application.properties` con tus credenciales de base de datos:
    ```properties
    spring.datasource.url=jdbc:mysql://localhost:3306/unflixapp
    spring.datasource.username=tu_usuario
    spring.datasource.password=tu_contraseña
    spring.jpa.hibernate.ddl-auto=update
    ```

3. **Compila y ejecuta la aplicación:**
    ```bash
    cd unflixapp
    mvn clean install
    mvn spring-boot:run
    ```

4. **Accede a la aplicación:**

    Abre tu navegador web y navega a `http://localhost:8080`.

## API Endpoints

- **GET /api/peliculas:** Obtener todas las películas.
- **GET /api/peliculas/{id}:** Obtener una película por ID.
- **POST /api/peliculas:** Crear una nueva película.
- **PUT /api/peliculas/{id}:** Actualizar una película existente.
- **DELETE /api/peliculas/{id}:** Eliminar una película.

## Contribuciones

¡Las contribuciones son bienvenidas! Por favor, abre un issue o envía un pull request para mejoras y correcciones.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.

## Contacto

Si tienes preguntas o sugerencias, no dudes en contactar a:

- **Maxii.rabenko@gmail.com** 
---

¡Gracias por visitar Unflix!
