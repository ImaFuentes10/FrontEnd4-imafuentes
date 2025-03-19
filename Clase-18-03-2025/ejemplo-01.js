var nombre = "Juan Perez"
function mostrarNombre(){
    console.log(nombre);
}

mostrarNombre();



function pruebaVar() {
    let ciudad = "Barcelona"
    if (true) {
        ciudad = "Madrid";
    }
    console.log(ciudad); // Debería dar error, pero imprime "Madrid" debido a `var`
}

pruebaVar();