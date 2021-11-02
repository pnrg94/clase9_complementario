//constructor de libros
class libro{
    constructor (id, titulo, autor, editorial, anio, ejemplares){
        this.id = id;
        this.titulo = titulo;
        this.autor = autor;
        this.editorial = editorial;
        this.anio = anio;
        this.ejemplares = parseInt(ejemplares);
    }
}

//biblioteca
const biblioteca = [];

const libro1 = new libro(1, "El Aleph", "Jorge Luis Borges", "Zahir", 1949, 5);
const libro2 = new libro(2, "Rayuela", "Julio Cortazar", "Alfaguara", 1963, 3);
const libro3 = new libro(3, "El amor en los tiempos del cólera", "Gabriel García Márquez", "Random House", 1985, 4);
const libro4 = new libro(4, "Sobre héroes y tumbas", "Ernesto Sabato", "La Nación", 1961, 1);
const libro5 = new libro(5, "La invención de Morel", "Adolfo Bioy Casares", "Booket", 1940, 0);

biblioteca.push(libro1);
biblioteca.push(libro2);
biblioteca.push(libro3);
biblioteca.push(libro4);
biblioteca.push(libro5);

//generador de card en html
const mostrarLibros = () => {
    for (const libro of biblioteca){
        let contenedor = document.createElement('div');
        contenedor.innerHTML =
        `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${libro.titulo}</h5>
                <p class="card-text">${libro.autor} (${libro.anio}). Editorial ${libro.editorial}</p>
                <p class="card-text">Cantidad de ejemplares</p>
                <p class="card-text ejemplares">${libro.ejemplares}</p>
                <input type="button" name="retirar" class="btn btn-primary retirar" id="retirar" value="Retirar">
                <input type="button" name="devolver" class="btn btn-primary" id="devolver${libro.id}" value="Devolver">
            </div>
        </div>
        `
        document.getElementById('libros').appendChild(contenedor);
    }
}


