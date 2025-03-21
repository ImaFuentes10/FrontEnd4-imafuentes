const gastos = [];

function agregarGasto() {
    const descripcion = document.getElementById("descripcion").value
    const monto = document.getElementById("monto").value

    if (descripcion = "" || monto === "" || monto < 0){
        alert("Ingresa un gasto válido")
    }else{
        parseInt(monto)
        const gasto = {descripcion, monto}
        gastos.push(gasto)
    }
    actualizarGastos();
    // 🚀 Completar: Obtener valores del input y validar que sean correctos.
    // 🚀 Completar: Agregar un objeto con descripción y monto al array gastos.
}

function ordenarGastos() {
    
    // 🚀 Completar: Ordenar los gastos de mayor a menor.
}

function calcularTotal() {
    // 🚀 Completar: Calcular el total gastado con reduce() y mostrarlo en alerta.
}

function actualizarGastos() {
    // 🚀 Completar: Renderizar la lista de gastos en el DOM.
}