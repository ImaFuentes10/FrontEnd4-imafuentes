const arrPrueba = [8, 3, 51, 15, 9, 1, 6, 8]

function mergeSort(arr){
    if(arr.length <= 1) return arr;//retornamos el arreglo si esta vacío o si es 1, lo que hace que retornemos el arreglo mínimo para luego usarse en la sig funcion

    const mid = Math.floor(arr.length/2); //encontramos punto medio
    const left = mergeSort(arr.slice(0,mid)); //arreglo izq
    //console.log("L: ", left);
    const right = mergeSort(arr.slice(mid)); //arreglo der
    //console.log("R: ", right);

    return merge(left, right);   
}

function merge(left,right){
    const result = [];
    let i = 0; j = 0; //punteros de cada arreglo

    while(i < left.length && j < right.length){ //mientras no nos salgamos del arreglo, si se sale, se concatena el resto al final
        if(left[i] < right[j]){
            result.push(left[i++]);
            //console.log("A: ", result);
        }else{
            result.push(right[j++]);
            //console.log("B: ", result);
        }
    }
    //console.log("result: ", [...result, ...left.slice(i), ...right.slice(j)]);
    
    return [...result, ...left.slice(i), ...right.slice(j)]; //operador de propagación
}

console.log("mergeSort:", mergeSort(arrPrueba));


//método sort (de inicio ordena como strings)
console.log("sort:",arrPrueba.sort(compareNumbers));
//función para ordenar números de menor a mayor con sort
function compareNumbers(a,b){
    return a - b;
}


//ejemplo implementación eperador de propagación
const persona = {
    name: "GHJGJ",
    edad: 15
}
//console.log(persona)

const obj = {
    ...persona,
    hobby: "Play"
}
console.log(obj);


/*
¿Cuál es la complejidad temporal de Merge Sort?
¿Por qué Merge Sort es un algoritmo estable?
¿Cuándo no usarías Merge Sort en un proyecto real?
¿Merge Sort es recursivo o iterativo

¿Cuál es la complejidad temporal de Merge Sort? O(nlogn)
¿Por qué Merge Sort es un algoritmo estable?porque siempre devuelve el arreglo con los valores ordenados de manera eficiente aún y cuando son cantidades grandes
¿Cuándo no usarías Merge Sort en un proyecto real?cuando el número de elementos a ordenar es muy pequeño
¿Merge Sort es recursivo o iterativo?ambas, recursivo para hacer las divisiones e iterativo para hacer los swaps
*/


//Ejemplo Merge Sort con Objetos
const usuarios = [
    {name: "Ana", age: 32},
    {name: "Luis", age: 25},
    {name: "Pedro", age: 28}
]

function mergeSortByProp(arr, prop){
    if(arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);
    const left = mergeSortByProp(arr.slice(0, mid), prop);
    const right = mergeSortByProp(arr.slice(mid), prop);

    return mergeByProp(left, right, prop);
}

function mergeByProp(left, right, prop){
    const result = [];
    let i = 0; j = 0;

    while(i < left.length && j < right.length){
        if(left[i][prop] < right[j][prop]){ //notación para cuando llamamos a una propiedad de un elemento de un arr
            result.push(left[i++]);
        }else{
            result.push(right[j++]);
        }
    }

    return [...result, ...left.slice(i), ...right.slice(j)];
}

console.log(mergeSortByProp(usuarios, "name"));


//Sliding window
function maxSubarraySum (arr, k){
    let maxSum = 0;
    let windowSum = 0;

    //creamos ventana y primera suma
    for (let i = 0; i < k; i++){
        windowSum += arr[i];
    }
    
    maxSum = windowSum;
    //llevamos a i hasta k y empezamos a mover a i
    for(let i = k; i < arr.length; i++){
        windowSum += arr[i] - arr[i - k]; //añadimos nuevo elemento y borramos el primer elemento
        maxSum = Math.max(maxSum, windowSum); //comparamos sumas
    }

    return maxSum;
}

const arraySum = [2, 1, 5, 1, 3, 2, 5, 4];

console.log(maxSubarraySum(arraySum, 2));


//sliding window variable
function lengthOfLongest(str) {
    let seen = new Set(); //usamos set para evitar repeticiones pero sobre todo para usar sus métodos y por su eficiencia
    let left = 0; maxLength = 0; 
    
    for(let right = 0; right < str.length; right++){ //puntero derecho se va recorriendo hasta el final del arreglo
        while(seen.has(str[right])){ //si el caracter ya estaba en el str, eliminamos el primer caracter hastaq que ya no se repita
            seen.delete(str[left++])
        }
        seen.add(str[right]); //añadimos caracter de la derecha
        maxLength = Math.max(maxLength, right - left + 1); //comparamos longitudes
    }

    return maxLength;
}

const longStr = "abdhbakshdkhiuhhsjkdehfooadsfñ";

console.log(lengthOfLongest(longStr));


/* Implementación con Array */
function lengthOfLongestArr(str) {
    let seen = []; // Usamos array en lugar de Set
    let left = 0, maxLength = 0;

    for (let right = 0; right < str.length; right++) {
        const currentChar = str[right];

        // Si ya está en el array, removemos caracteres desde left
        while (seen.includes(currentChar)) {
            seen.shift(); // eliminamos el primero
            left++;       // movemos la ventana a la derecha
        }

        seen.push(currentChar); // agregamos el nuevo carácter
        maxLength = Math.max(maxLength, seen.length);
    }

    return maxLength;
}

/* Creamos un array enorme */
let bigArray = Array.from({ length: 10000 }, () => Math.floor(Math.random() * 10000));

/* Probamos la implementación con Array */
console.time("Implementacion Array")
console.log(lengthOfLongestArr(bigArray))
console.timeEnd("Implementacion Array")
//Promedio (5): 12.1138ms

/* Probamos la implementación con Set */
console.time("Implementacion Set")
console.log(lengthOfLongest(bigArray))
console.timeEnd("Implementacion Set")
//Promedio (5): 4.136ms !*!*


/* Probamos la implementación Merge Sort*/
console.time("Implementacion Merge Sort")
console.log(mergeSort(bigArray))
console.timeEnd("Implementacion Merge Sort")
//Promedio (5): 13.7778ms

/* Probamos la implementación Nativa Sort */
console.time("Implementacion Nativa Sort")
console.log(bigArray.sort(compareNumbers))
console.timeEnd("Implementacion Nativa Sort")
//Promedio (5): 3.4042ms !*!*