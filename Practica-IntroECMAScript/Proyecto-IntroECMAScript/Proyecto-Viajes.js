
// viajes.js

// Array para guardar los destinos
const destinos = [];

// Función para registrar un destino de viaje
export const registrarDestino = (destino, fecha, transporte, personas) => {
    let nuevoViaje = {
        destino: destino,
        fecha: fecha,
        transporte: transporte,
        personas: personas,
        costo: calcularCosto(destino, transporte)
    }

    destinos.push(nuevoViaje);
}

// Función para calcular el costo del viaje (no fue necesario exportar)
const calcularCosto = (destino, transporte) => {
    let costoBase = 0;
    let promocion = 0;
    //Arreglo que contiene cada destino posible con su costo
    const destinosPosibles = [
        {destino: "Paris", precio: 500},
        {destino: "Londres", precio: 400},
        {destino: "New York", precio: 600},
        {destino: "Lima", precio: 350},
        {destino: "Ciudad del Cabo", precio: 800}
    ]

    //Arreglo que incluye cada transporte disponible con su costo
    const transportesDisponibles = [
        {transporte: "Avión", precio: 200},
        {transporte: "Tren", precio: 100},
        {transporte: "Barco", precio: 300}
    ]

    //iteramos cada destino posible y si es igual al ingresado se añade el precio al costoBase
    for (let destinoPosible of destinosPosibles){
        if (destino === destinoPosible.destino){
            costoBase = destinoPosible.precio;
        }
    }

    ////iteramos cada transporte disponible y si es igual al ingresado se añade el precio al costoBase
    for (let transporteDisponible of transportesDisponibles){
        if (transporte === transporteDisponible.transporte){
            costoBase = costoBase + transporteDisponible.precio;
        }
    }

    //retornamos costoBase como el costo del viaje ingresado
    return costoBase
}
    

//Función par mostrar el itinerario
export const mostrarItinerario = () => {
    //mostramos cada viaje dentro del array destinos
    for (let viaje of destinos)
    //Doy descuentos dependiendo la cantidad de personas, la decisión se toma directamente en el template
        console.log(`
        Destino: ${viaje.destino}
        Fecha: ${viaje.fecha}
        Transporte: ${viaje.transporte}
        Personas: ${viaje.personas}
        Costo: $${
            viaje.personas >= 4 ?
            `${viaje.costo = viaje.costo * .75} ¡25% de descuento!`:
            viaje.personas >= 2 ?
            `${viaje.costo = viaje.costo * .9} ¡10% de descuento!`:
            viaje.costo 
        }`);
    }



