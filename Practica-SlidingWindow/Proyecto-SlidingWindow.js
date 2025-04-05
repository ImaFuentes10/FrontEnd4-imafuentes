// Ejemplo de uso
const text = "JavaScript es un lenguaje de programación increíble para aprender.";
// Resultado esperado: "programación"

//función para encontrar palabra más larga separando el str en un arreglo de palabras individuales y comparando 1x1
function findLongestWord(str) {
    //eliminamos signos de puntuación
    const punct = /[,.;:¡!¿?]/g; //g marca que se encuentra y reemplaza
    str = str.replace(punct,"");

    let words = str.split(' '); //separamos si hay espacios

    let longestWord = '';
    let currentWord = '';

    for (let right = 0; right < words.length; right++){
        
        currentWord = words[right];

        if(longestWord.length < currentWord.length){
            longestWord = currentWord;
        }
    }
    return longestWord;
}

//función con sliding window variable
function findLongestWordSliding(str) {
    //eliminamos signos de puntuación
    const punct = /[,.;:¡!¿?]/g; //g marca que se encuentra y reemplaza
    str = str.replace(punct,"");

    let words = str.split(''); //separamos si hay espacios

    let left = 0; 
    let longestWord = [];
    let currentWord = [];

    for (let right = 0; right < words.length; right++){

        if (words[right] !== ' '){
            currentWord.push((words[right]));
        }else if(longestWord.length < currentWord.length){ 
            longestWord = currentWord
            left = right + 1;
            currentWord = [];
        }else{
            left = right + 1;
            currentWord = []
        }
    }
    return longestWord.join('');
}

//Tiempos de implementación
//Arreglo de palabras
console.time("Implementación arreglo de palabras:");
console.log(`La palabra más larga es: '${findLongestWord(text)}'`);
console.timeEnd("Implementación arreglo de palabras:");
//Promedio (5): 9.037ms

console.time("Implementación arreglo SlidingWindow:");
console.log(`La palabra más larga es: '${findLongestWordSliding(text)}'`);
console.timeEnd("Implementación arreglo SlidingWindow:");
//Promedio (5): 0.2184ms !*!*
