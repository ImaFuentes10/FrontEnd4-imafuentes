//Ejemplo export (se importa en Ejemplos2)
export const add = (a,b) => a+b;


//Ejemplo función flecha ('Hello' es un return)
const sayHello = () => "Hello!";
console.log(sayHello());

//Otro ejemplo de función flecha (console.log el msj)
const sayHelloAgain = () => console.log('Hello Again!');
sayHelloAgain();


//for ... in
//for (let clave in objeto){}
//objeto con varias propiedades (deben ir entre {})
let persona = {
    nombre: 'Imanol',
    edad: 27,
    ciudad: 'La Paz'
}

//let propiedad = clave para nueva variable que guardará cada propiedad del objeto
//in persona = indica que es del objeto 'persona'
//va a recorrer todas las propiedades de persona y va a imprimir lo indicado
for (let propiedad in persona){
    console.log(`${propiedad}: ${persona[propiedad]}`);
    //imprime la clave de la propiedad, luego ':' y luego el valor de la propiedad dentro del objeto
}


//for ... of
//for (let valor of iterable){}
//creamos nuestro arreglo u objeto iterable
let numeros = [10,20,30,40];

//let numero = varible que contendrá cada valor del arrego
//of numeros = del arreglo 'numeros
//va a recorrer todos los valores de arreglo u objeto iterable y hacer lo indicado
for (let numero of numeros){
    console.log(numero);//imprimimos cada elemento del arreglo
}


//forEach()
//arreglo.forEach(fucntion(elemento, indice, arreglo){ });
//trabajaremos con el mismo arreglo que usamos para for of
//function(numero) = el argumento de la función se llamará 'numero' y será cada elemento del arreglo
numeros.forEach(function(numero){
    console.log(numero);
})
//recorre los elementos y ejecuta una función pasada como argumento en cada uno de ellos
//ideal apra hacer acciones en cada elemento sin interrumpir la ejecución
//menos legible qe for of


//map()
/*let nuevoArreglo = arreglo.map(function(elemento){
return //transformación del elemento
});*/
//creamos un nuevo arreglo que contendrá los nuevos elementos modificados
//va a recorrer todo el arreglo 'numeros' y el argumento de la función se llamra 'numero' que es cada elemento
let cuadrados = numeros.map(function(numero){
    return numero*numero //nos regresa el cuadrado del numero en el que estamos
});
console.log(cuadrados);//imprimimos el nuevo arreglo


//Ejemplo let, const y función flecha
const calculatePerimeter = (width, height) => {
    let base = width;
    const multiplier = 2;
    return base * height * multiplier
}

console.log(calculatePerimeter(2,3));


//Ejemplo Promesas
const fetchUserData = () => {
    return new Promise(resolve =>{ //neuva promesa que resuelva...
        setTimeout(() =>{
            resolve({id:1, name: 'Alice'}); //objeto con los datos del usuario
        },2000); //espera 2000ms para resolver
    });
};

const getUser = async () => { //funció asíncrona
    const userData = await fetchUserData(); //esperamos a que se resuelva la promesa
    console.log(userData);//imrpimimos después de esperar
};

getUser();