class Videojuego {
    constructor(titulo, genero, precio) {
        this.titulo = titulo;
        this.genero = genero;
        this.precio = precio;
        // 🚀 Completar: Definir propiedades para título, género y precio.
    }
}

const juegos = [];
let filtroJuegos = juegos; //variable que contiene los juegos filtrados

function agregarJuego() {
    const titulo = document.getElementById("titulo").value.trim();
    const genero = document.getElementById("genero").value.trim();
    const precio = parseFloat(document.getElementById("precio").value.trim());

    //verificación campos
    if(!titulo || !genero || isNaN(precio) || precio <= 0){
        alert("Completa los campos");
        return;
    }
    
    let juegoNuevo = new Videojuego(titulo, genero, precio);

    //verificación repetidos
    for(let juego of juegos) {
        if(juego.titulo.toLowerCase() === juegoNuevo.titulo.toLowerCase() 
            && juego.genero.toLowerCase() === juegoNuevo.genero.toLowerCase() 
            && juego.precio === juegoNuevo.precio){
            alert ("Videojuego ya ingresado")
            return
        }
    }
   
    //agrego jeugo al arreglo
    juegos.push(juegoNuevo);
    //actualizo filtrojuegos para poder ocuparla en eliminarJuego y calcularGasto
    filtroJuegos = juegos;
    //llamo a actualizar DOM con la variable filtroJuegos
    actualizarJuegos(filtroJuegos);
    
    limpiarCampos();
    
    // 🚀 Completar: Obtener valores del input y validar que sean correctos.
    // 🚀 Completar: Agregar un objeto Videojuego al array juegos.
}

function filtrarPorGenero() {
    const filtroGenero = document.getElementById("filtro").value.trim();

    filtroJuegos = juegos.filter (juego => juego.genero.toLowerCase() === filtroGenero.toLowerCase());
    
    actualizarJuegos(filtroJuegos);

    const botonEliminarFiltros = document.getElementById("eliminar-filtros");
    botonEliminarFiltros.removeAttribute("hidden");
    
    document.getElementById("filtro").value = "";
    // 🚀 Completar: Filtrar los videojuegos por género ingresado.
}

function calcularTotal() {
    const total = filtroJuegos.reduce((acum, juego) => acum + juego.precio, 0);
    alert (`Has gastado $${total}MXN en estos juegos`)
    // 🚀 Completar: Calcular el total gastado usando reduce().
}

function actualizarJuegos(juegos) {
    const lista = document.getElementById("lista");

    lista.innerHTML = juegos.map((juego, index) =>
        `<li><span id="index">${index + 1}.</span> Título: ${juego.titulo} |  Género: ${juego.genero}  |  $${juego.precio}MXN
        <button onclick="eliminarJuego(${index})" id="eliminar-juego")>X</button>    
        </li>`).join("");

    // 🚀 Completar: Renderizar la lista de videojuegos en el DOM.
}

//Función para eliminar juegos
function eliminarJuego(index) {
    //elimino el juego sleccionado en el array juegos
    for(let i = 0; i < juegos.length; i++){
        if(filtroJuegos[index] === juegos[i]) juegos.splice(i, 1);
    }
    //elimino el juego seleccionado en el array filtroJuegos
    filtroJuegos.splice(index,1);
    actualizarJuegos(filtroJuegos);
    //con esto actualizo la vista con los juegos fitrados aún, pero también modifico
    //el array juegos para cuando elimine los filtros está actualizado
}

function eliminarFiltros (){
    actualizarJuegos(juegos);
    filtroJuegos = juegos;//reestablezco el array filtroJuegos
    const botonEliminarFiltros = document.getElementById("eliminar-filtros");
    botonEliminarFiltros.setAttribute("hidden", true);
}

//Función para limpiar campos
function limpiarCampos (){
    document.getElementById("titulo").value = "";
    document.getElementById("genero").value = "";
    document.getElementById("precio").value = "";
}