const contarLetras = (str) => {
    const frecuencias = new Map();
    for (let letra of str){
        if(frecuencias.has(letra)){
            frecuencias.set(letra, frecuencias.get(letra) + 1);
            //console.log("if",frecuencias);      
        }else{
            frecuencias.set(letra, 1);
            //console.log("else",frecuencias);
        }
    }
    return frecuencias;
}

console.log(contarLetras("banana"));

const obj = {
    0 : 'a',
    1 : 'b'
}

console.log(obj.hasOwnProperty('a'));

console.log(Object.keys(obj));

console.log(Object.values(obj));

/*const resultado = document.getElementById("resultado");
const texto = "savsgfahsvgas";
const frecuencias = {};

for(let char of texto){
    frecuencias[char] = (frecuencias[char] || 0) + 1;
}

resultado.innerHTML = Object.entries(frecuencias).map(([letra, veces]) => `${letra}:${veces}`).join('<br>');
*/

const tieneDuplicados = (arr) => {
    const seen = new Set();

    for(let num of arr){
        if(seen.has(num)) return true;
        seen.add(num);
    }
    return false;
}
console.log(tieneDuplicados([1, 2, 3, 2, 4, 5]));


/* Búsqueda de subcadenas */

const buscarIngenuo = (texto, patron) => {
    const posiciones = [];

    for(let i=0; i <= texto.length - patron.length; i++) {
        if(texto.slice(i, i + patron.length) === patron){
            posiciones.push(i);
        } 
    }
    return posiciones;
}


const rabinKarp = (texto, patron) => {
    const firma = str => [...str].reduce((a, c) => a + c.charCodeAt(0), 0);
    const firmaTarget = firma(patron);
    
    console.log(firmaTarget);
    const res = [];

    for(let i=0; i < texto.length - patron.length; i++){
        const window = texto.slice(i, i + patron.length);
        if(firma(window) === firmaTarget && window === patron){
            res.push(i);
        }
    }
    return res;
}

console.time("Ingenuo");
console.log(buscarIngenuo("hola mundo hola", "hol"));
console.timeEnd("Ingenuo");

console.time("Rabin-Karp");
console.log(rabinKarp("hola hola hola mundo hola", "hol"));
console.timeEnd("Rabin-Karp");