//TAREA MORAL
//Invertir el orden de una cadena con arreglo 2 punteros

const texto ="INVERTIR PALABRAS"

const invertString = (str) => {
    //punteros
    let left = 0;
    let right = str.length - 1;
    //variables de caracteres
    let char1;
    let char2;
    //convertimos str en un array
    let arr = str.split('');
    
    while(left <= right){
        //almaceno chars de cada puntero
        char1 = arr[left];
        char2 = arr[right];
        //invierto chars
        arr[left] = char2; 
        arr[right] = char1;
        //muevo punteros hacia el centro 
        left++;
        right--;  
    }
    return arr.join(''); //unimos el arreglo en un string
}

console.log(invertString(texto));

