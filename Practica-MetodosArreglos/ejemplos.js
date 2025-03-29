//MÉTODOS DE ARREGLOS

//find (): devuelve el primer elemento en un arreglo con una condición dada, sino undefined
const numbers = [10, 20, 30, 40];
const result = numbers.find (num => num > 2);
console.log(result);

//map(): crea un nuevo arreglo aplicando una función a cada elemento sin modificar el original
//usamos const numbers ya creada
const squares = numbers.map (num => num**2);
console.log(squares);

//filter(): devuelve un nuevo arreglo con todos los elementos que cumplen una condición específica
//usamos const numbers
const greater = numbers.filter (num => num > 10);
console.log(greater);

//forEach(): ejecuta una función para cada elemento pero no devuelve un nuevo arreglo o modifica el original
//usamos const numbers
numbers.forEach (number => console.log(number));
numbers.forEach (number => {
    number ++;
    console.log(`El número más 1 da: ${number}`);
});

//sort(): ordena los elementos y devuelve al mismo arreglo ordenado
//CUIDADO: puede convertir elementos a cadena y causar problemas al trabajar con números
//Se le puede pasar un método para ordenar, como el ejemplo de abajo que es en orden ascendente
const numbers2 = [30, 5, 20, 10];
numbers2.sort((a, b) => a - b);
console.log(numbers2); //log del arreglo ordenado
console.log(typeof(numbers2[2])); //verifico el tipo de uno de los elementos, en este caso no se vlvió string, se mantuvo como number

//reduce(): ejecuta una función en cada elemento y acumula un valor único apra devolver al final
//se realiza en cada iteración dependiendo de la lógica de la función
//usamos const numbers
const sum = numbers.reduce((acum, num) => acum + num, 0); //sumamos lo acumulado + el nuevo num. Acumulador empieza en 0
console.log(sum);

//some(): verifica si al menos un elemento cumple la condición y retorna un booleano
//usamos cons numbers
const greaterExists = numbers.some(num => num > 30);
console.log(greaterExists);
const greaterExists2 = numbers.some(num => num > 40);
console.log(greaterExists2);

//every(): verifica si todos los elementos del arreglo cumplen la condición, devuelve booleano
//usamos const numbers y const numbers2
const areEven = numbers.every (num => num % 2 === 0);
console.log(areEven);
const areOdd = numbers.every (num => num % 2 ==! 0);
console.log(areOdd);
const areOdd2 = numbers2.every (num => num % 2 ==! 0);
console.log(areOdd2);

//includes(): verifica si un arreglo contiene un valor específico, devuelve booleano
//diferente a some() porqeu n usa callbacks, sólo busca directamente el valor exacto
//usamos const numbers y numbers2
const hasFive = numbers.includes(5);
console.log(`numbers incluye 5: ${hasFive}`);
const hasFive2 = numbers2.includes(5);
console.log(`numbers2 incluye 5: ${hasFive2}`);

