import requests
import os

API_KEY = '6c628a292412bcfdfb835a49feb30086'
BASE_URL = 'https://api.themoviedb.org/3'

def obtener_peliculas(api_key, num_peliculas):
    peliculas = []
    page = 1

    while len(peliculas) < num_peliculas:
        response = requests.get(f'{BASE_URL}/movie/popular', params={'api_key': api_key, 'page': page})
        data = response.json()

        for movie in data['results']:
            if len(peliculas) >= num_peliculas:
                break
            peliculas.append({
                'titulo': movie['title'],
                'poster': f"https://image.tmdb.org/t/p/w500{movie['poster_path']}" if movie['poster_path'] else None,
                'año': movie['release_date'][:4] if movie['release_date'] else None
            })

        page += 1
    
    return peliculas

def generar_script_sql(peliculas, archivo_sql):
    with open(archivo_sql, 'w', encoding='utf-8') as file:
        file.write("CREATE TABLE IF NOT EXISTS peliculas (\n")
        file.write("    id INT AUTO_INCREMENT PRIMARY KEY,\n")
        file.write("    titulo_de_la_pelicula VARCHAR(255),\n")
        file.write("    poster VARCHAR(255),\n")
        file.write("    año_de_lanzamiento YEAR\n")
        file.write(");\n\n")

        for pelicula in peliculas:
            titulo = pelicula['titulo'].replace("'", "''")  # Escapar comillas simples
            poster = pelicula['poster'].replace("'", "''") if pelicula['poster'] else ''
            año = pelicula['año'] if pelicula['año'] else 'NULL'
            file.write(f"INSERT INTO peliculas (titulo_de_la_pelicula, poster, año_de_lanzamiento) VALUES ('{titulo}', '{poster}', {año});\n")

def main():
    peliculas = obtener_peliculas(API_KEY, 100)
    # Cambia la ruta aquí para que sea una ruta absoluta
    archivo_sql = os.path.join(os.path.expanduser('~'), 'insert_peliculas.sql')
    generar_script_sql(peliculas, archivo_sql)
    print(f'Se generó el archivo {archivo_sql} con {len(peliculas)} películas.')

if __name__ == '__main__':
    main()
