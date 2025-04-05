//PROYECTO DIVIDE AND CONQUER
//Problema: Búsqueda del máximo en un array

// Ejemplo de entrada
const numbers = [3, 8, 2, 10, 5, 7, 4, 6];

//función Divide and Conquer
function findMax (arr) {
    //caso base
    if (arr.length === 1) return arr;
    //caso arreglo vacío
    if (arr.length < 1) return 'Ingresa números a comparar';
    //divisiones del arreglo
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
    //llamadas recursivas
    const leftMax = findMax(left);
    const rightMax = findMax(right);
    //comparativa
    return Math.max(leftMax, rightMax);
}

//función dos punteros
function findMaxDosPunteros (arr) {
    let left = 0;
    let right = arr.length - 1;

    while(left !== right){
        if (arr[left] < arr[right]) left++;
        else right --;
    } return arr[right];
}

//función Sliding Window
function findMaxSlidingWindow (arr) {
    let left = 0;
    let right = 1;
    let max = 0;
    let current;

    while(right < arr.length){
        current = Math.max(arr[left++], arr[right++]);
        max = Math.max(current, max);
    } 
    return max
}

//Tiempos de implementación
//Divide and Conquer
console.time("Divide and Conquer:");
console.log(`El número mayor es: ${findMax(numbers)}`);
console.timeEnd("Divide and Conquer:");
//Promedio (5): 8.7606ms

//Dos punteros
console.time("Dos Punteros: ");
console.log(`El número mayor es: ${findMaxDosPunteros(numbers)}`);
console.timeEnd("Dos Punteros: ");
//Promedio (5): 0.1452ms !*!*

//Sliding Window
console.time("Sliding Window: ");
console.log(`El número mayor es: ${findMaxSlidingWindow(numbers)}`);
console.timeEnd("Sliding Window: ");
//Promedio (5): 0.2102ms