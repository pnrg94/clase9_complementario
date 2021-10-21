class libro{
    constructor (id, titulo, autor, editorial, anio, ejemplares){
        this.id = id;
        this.titulo = titulo;
        this.autor = autor;
        this.editorial = editorial;
        this.anio = anio;
        this.ejemplares = parseInt(ejemplares);
    }
    retirar(cantidadRetirar){
        if (this.ejemplares >= cantidadRetirar){
            alert ("Se retiraron " + cantidadRetirar + " ejemplares de " + this.titulo + ". Quedan aún " + this.verificarStock(cantidadRetirar) + " disponibles.");
        }else{
            alert("No hay suficientes ejemplares para retirar. Tenemos a disposición: " + this.ejemplares + " ejemplares.");
        }
    }
    verificarStock(cantidadRetirar){
        return this.ejemplares - cantidadRetirar
    }
}

const biblioteca = [];

const libro1 = new libro(1, "El Aleph", "Jorge Luis Borges", "Zahir", 1949, 5);
const libro2 = new libro(2, "Rayuela", "Julio Cortazar", "Alfaguara", 1963, 3);
const libro3 = new libro(3, "El amor en los tiempos del cólera", "Gabriel García Márquez", "Random House", 1985, 4);
const libro4 = new libro(4, "Sobre héroes y tumbas", "Ernesto Sabato", "La Nación", 1961, 1);
const libro5 = new libro(5, "La invención de Morel", "Adolfo Bioy Casares", "Booket", 1940, 0);

//ordenar los titulos por año de publicación
biblioteca.sort((a,b) => {
    if (a.anio == b.anio) {return 0;}
    if (a.anio > b.anio) {return -1;}
    if (a.anio < b.anio) {return 1;}
})
console.log(biblioteca)

biblioteca.push(libro1);
biblioteca.push(libro2);
biblioteca.push(libro3);
biblioteca.push(libro4);
biblioteca.push(libro5);

alert("Bienvendio a la biblioteca del grupo Zahir. Tenemos a disposición los siguientes títulos (al finalizar, deberá ingresar el número que identifica al libro que desee).");

for (const libro of biblioteca){
    alert(libro.id + ". " + libro.titulo + " (" + libro.autor + "). Editorial " + libro.editorial + ". Hay disponibles " + libro.ejemplares + " ejemplares para retirar.");
}

let libros = parseInt(prompt("Ingrese el número que idenfitica al libro que desea."));

/*let libros = parseInt(prompt(`Bienvendio a la biblioteca del grupo Zahir.

Seleccione su producto:
    1. El aleph
    2. Rayuela
    3. El amor en los tiempos del cólera
    4. Sobre héroes y tumbas
    5. La invención de Morel
`));*/

const cantidadRetirar = prompt("¿Cuantos ejemplares desea retirar?");

switch(libros){
    case 1:
        libro1.retirar(cantidadRetirar)
        break;

    case 2:
        libro2.retirar(cantidadRetirar)
        break;

    case 3:
        libro3.retirar(cantidadRetirar)
        break;
    
    case 4:
        libro4.retirar(cantidadRetirar)
        break;

    case 5:
        libro5.retirar(cantidadRetirar)
        break;
    default:
    alert("Ingreso algun dato invalido o simplemente no quiere realizar un pedido. Muchas gracias, que tenga un buen día.")
}

