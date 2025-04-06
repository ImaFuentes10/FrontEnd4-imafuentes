const gastos = [];

function agregarGasto() {
    //importo valores ingresados / trim quita espacios al final / parseInt para que sea Int el monto
    const descripcion = document.getElementById("descripcion").value.trim();
    const monto = parseFloat(document.getElementById("monto").value.trim());

    if (descripcion === "" || monto === "" || monto < 0){
        alert("Ingresa un gasto válido")
    }
    //Yo propuse esto
    /*else{
        const gasto = {
            descripcion: descripcion, 
            monto: monto
        }
        gastos.push(gasto)
    }*/
    //Pero puede reducirse a esto:
    gastos.push({descripcion, monto});

    actualizarGastos();

    limpiarCampos();
    
    // 🚀 Completar: Obtener valores del input y validar que sean correctos.
    // 🚀 Completar: Agregar un objeto con descripción y monto al array gastos.
}

function ordenarGastos() {
    gastos.sort((a,b) => b.monto - a.monto)
    actualizarGastos();
    
    // 🚀 Completar: Ordenar los gastos de mayor a menor.
}

function calcularTotal() {
    //con el método reduce sumo todos los montos del array
    const totalGastado = gastos.reduce((acumulador, gasto) => acumulador + gasto.monto, 0);
    alert(`Has gastado $${totalGastado} MXN 💰`);
    
    // 🚀 Completar: Calcular el total gastado con reduce() y mostrarlo en alerta.
}

function actualizarGastos() {
    const gastoLista = document.getElementById("lista");
    
    //Creo un nuevo elemento 'li' dentro de la 'ul' tomando el gasto dentro del arreglo de gastos
    gastoLista.innerHTML = gastos.map((gasto,index) =>
        `<li>${index + 1}. ${gasto.descripcion} - $${gasto.monto}MXN
        <button onclick="eliminarGasto(${index})" id="eliminar-gasto")>X</button>    
        </li>`).join("");

    // 🚀 Completar: Renderizar la lista de gastos en el DOM.
}

//Función para eliminar gastos
function eliminarGasto(index) {
    gastos.splice(index, 1);
    actualizarGastos();
}

//Función para limpiar campos
function limpiarCampos (){
    document.getElementById("descripcion").value = "";
    document.getElementById("monto").value = "";
}