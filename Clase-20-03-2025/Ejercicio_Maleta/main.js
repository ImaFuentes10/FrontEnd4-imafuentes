const maleta = [];

function agregarItem() {
    const item = document.getElementById("item").value.trim();
    if (item === "") {
        alert("Ingresa un artículo")
        return
    }else if(maleta.includes(item)){
        alert("Artículo ya ingresado")
        return
    }

    maleta.push(item);

    actualizarMaleta();
    // 🚀 Completar: Obtener el valor del input y validar que no esté vacío ni duplicado.
    // 🚀 Completar: Agregar el artículo al array maleta y actualizar la lista.
}

function ordenarMaleta() {
    maleta.sort();
    actualizarMaleta();
    // 🚀 Completar: Ordenar los elementos de la maleta alfabéticamente.
}

function finalizarEmpaque() {
    if (maleta.length < 3){
        alert ("Ingresa al menos 3 artículos");
        return
    } 
    
    alert("Maleta completada");

    for (let i = maleta.length - 1; i >= 0; i--){
        maleta.pop();
    }
    
    actualizarMaleta();
    // 🚀 Completar: Mostrar alerta si hay menos de 3 artículos, de lo contrario, mensaje de éxito.
}

function actualizarMaleta() {
    const lista = document.getElementById("lista");

    lista.innerHTML = maleta.map((item, index) =>
    `<li>${index + 1}. ${item}
        <button onclick="eliminarArticulo(${index})" id="eliminar-articulo")>X</button>    
        </li>`).join("");
    // 🚀 Completar: Renderizar los elementos de la maleta en la lista <ul>.
}

function eliminarArticulo (index) {
    const botonEliminar = document.getElementById("eliminar-articulo");

    maleta.splice(index, 1);
    actualizarMaleta()
}