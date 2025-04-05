//PROYECTO RECURSIÓN Y BACKTRACKING
//Buscar un objeto en una lista de regalos

// Lista de regalos
const gifts = ["Muñeca", "Carro de juguete", "Rompecabezas", "Lego", "Pelota"];

//Implementación Recursiva
function findGiftRec (gifts, giftName, i = 0) {
    //caso base: salida si llegamos al final de la lista
    if (i === gifts.length) return console.log(`${giftName} no está en la lista`);
    //si encontramos el regalo
    if (gifts[i] === giftName) return console.log(`${giftName} está en la posición ${i}`);

    return findGiftRec(gifts, giftName, i + 1); //llamada recursiva
}

//Implementación Iterativa
function findGiftIter (gifts, giftName) {
    
    for (i = 0; i <= gifts.length; i++) {

        if (i === gifts.length) return console.log(`${giftName} no está en la lista`);

        if (gifts[i] === giftName) return console.log(`${giftName} está en la posición ${i}`);
    }
}


//Tiempos de implementación
//SÍ está el regalo
console.time("Implementación recursiva TRUE:")
findGiftRec(gifts, "Lego");
console.timeEnd("Implementación recursiva TRUE:")
//Promedio (5): 8.9488ms

console.time("Implementación iterativa TRUE:")
findGiftIter(gifts, "Lego");
console.timeEnd("Implementación iterativa TRUE:")
//Promedio (5): 0.1822ms !*!*

//NO está el regalo
console.time("Implementación recursiva FALSE:")
findGiftRec(gifts, "Camión");
console.timeEnd("Implementación recursiva FALSE:")
//Promedio (5): 0.1618ms

console.time("Implementación iterativa FALSE:")
findGiftIter(gifts, "Camión");
console.timeEnd("Implementación iterativa FALSE:")
//Promedio (5): 0.0796ms !*!*