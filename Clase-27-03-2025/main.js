const miArreglo = [1, 3, 5, 7, 9, 11];
const miArregloAlt = ['agua', 'aire', 'barco', 'cielo', 'casa', 'sol', 'tetera']

//Búsqueda lineal: O(n)
const linearSearch = (array, target) => {
    for (let i = 0; i < array.length; i++){
        if(array[i] === target){
            return i;
        }
    }
    return -1;
}

//Búsqueda Binaria: O(log n) (sólo con arrays ordenados)
const binarySearch = (array, target) => {
    let _left = 0;
    let _right = array.length - 1;
    while(_left <= _right) {
        const mid = Math.floor((_left + _right)/2);
        if(array[mid]===target){
            return mid;
        }else if(array[mid < target]){
            _left = mid + 1;
        }else{
            _right = mid - 1;
        }
    }
    return -1;  
}

//Recursiva (Búsqueda b¡naria)
const binarySearchR = (array, target, _left = 0, _right = array.length - 1) => {
    if(_left > _right) return -1;
    
    //No encontré el valor
    const mid = Math.floor((_left + _right)/2);

    //Encontré el valor
    if(array[mid] === target) {
        return mid;
    }
    //Busco sólo del lado derecho
    if(array[mid] < target) {
        return binarySearchR(array, target, mid + 1, _right);
    }
    //Busco sólo del lado izquierdo
    return binarySearchR(array, target, _left, mid - 1);
}


console.time('lineal');
console.log(linearSearch(miArreglo, 5));
console.timeEnd('lineal');

console.time('binaria');
console.log(binarySearch(miArreglo, 5));
console.timeEnd('binaria');

console.time('binariaRecursiva');
console.log(binarySearchR(miArreglo, 5));
console.timeEnd('binariaRecursiva');

console.time('lineal');
console.log(linearSearch(miArregloAlt, 'cielo'));
console.timeEnd('lineal');

console.time('binaria');
console.log(binarySearch(miArregloAlt, 'cielo'));
console.timeEnd('binaria');

console.time('binariaRecursiva');
console.log(binarySearchR(miArregloAlt, 'cielo'));
console.timeEnd('binariaRecursiva');