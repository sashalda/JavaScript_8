class Libro {
    constructor(nombre, autor, paginas) {
        this.nombre = nombre;
        this.paginas = paginas;
        this.autor = autor;
        this.cantidadHoras = this.calcularHoras();
    }

    calcularHoras() {
        let dificultad = 0;
        const hora = 50;

        switch(this.nombre) {
            case "el principito":
                dificultad = 1.1;
                break;
            case "el psicoanalista":
                dificultad = 1.8;
                break;
            case "la biblia":
                dificultad = 2.2;
                break;
            case "los tres chanchitos":
                dificultad = 1.2;
                break;    
            default:
                dificultad = 1;
                break;
        }

        let calculo = (this.paginas/hora)*dificultad;

        return calculo;
    }
}

librosGenerales = [];
librosGenerales.push(new Libro("el psicoanalista", "John Katzenbach", 400));
librosGenerales.push(new Libro("la biblia", "la iglesia", 600));

librosInfatiles = [];
librosInfatiles.push(new Libro("los tres chanchitos", "Los hermanos Grimm", 250));
librosInfatiles.push(new Libro("el principito", "antoine de saint-exupéry", 150));

const libros = librosGenerales.concat(librosInfatiles);

do {
    var comprobacion = prompt("Ingrese el nombre de su libro o fin para terminar de agregar").toLowerCase();
    if (comprobacion === "fin") {
        break;
    } else {
        nombreLibro = comprobacion;
        var nombreAutor = prompt('ingrese el autor');
        var paginas = parseInt(prompt('Ingrese la cantidad de páginas'));
        libros.push(new Libro(nombreLibro, paginas, nombreAutor));
    }
}
while(comprobacion !== "fin")

console.log(libros);

document.write("<h2>Listado de libros:</h2>");
for (let libro of libros) {
    let divLibro = document.createElement("div");
    divLibro.innerHTML = `<p><strong>${libro.nombre}</strong> </p>
                        <p><strong>Autor:</strong> ${libro.autor}</p>
                        <p><strong>Paginas:</strong> ${libro.paginas}</p>
                        <p>----------------</p>`;
    document.body.appendChild(divLibro);
}

// LIBROS FACIL DE LEER (MENOS DE 10 HORAS)

var facilitos = libros.filter(libro => libro.cantidadHoras < 10);
document.write("<h2>Libros faciles de leer:</h2>");
for (let libro of facilitos) {
    let divLibro = document.createElement("div");
    divLibro.innerHTML = `<p><strong>${libro.nombre}</strong> </p>
                        <p><strong>Cantidad de horas:</strong> ${libro.cantidadHoras}</p>
                        <p>----------------</p>`;
    document.body.appendChild(divLibro);
}


// LIBROS FACIL DE LEER (MAS DE 10 HORAS)

var dificilitos = libros.filter(libro => libro.cantidadHoras >= 10);
document.write("<h2>Libros dificiles de leer:</h2>");
for (let libro of dificilitos) {
    let divLibro = document.createElement("div");
    divLibro.innerHTML = `<p><strong>${libro.nombre}</strong> </p>
                        <p><strong>Cantidad de horas:</strong> ${libro.cantidadHoras}</p>
                        <p>----------------</p>`;
    document.body.appendChild(divLibro);
}

