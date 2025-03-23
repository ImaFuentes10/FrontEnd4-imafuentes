//ESTRUCTURAS DE DATOS

//Array (Arreglo), para ordenar cosas
const array = [1,2,3,4];
console.log(array);

//Object( Objeto), almaceno clave:valor, cada clave es única
const object = {
    nombre: "Imanol",
    edad: 27,
    genero: "masculino"
};
console.log(object);

//Stack (Pila), last in 1st out (LIFO)
const stack = [];
stack.push("A");
stack.push("B");
stack.push("C");
console.log(stack);
console.log(stack.pop());
console.log(stack);

//Queue (Cola), 1st in 1st out (FIFO)
const queue = [];
queue.push("a");
queue.push("b");
queue.push("c");
console.log(queue);
console.log(queue.shift());
console.log(queue);

//Set (Conjuntos), almacenan elementos únicos sin permitir duplicados
const users = new Set();
users.add("Juan");
users.add("Ana");
users.add("Juan");
users.add("Luis");
console.log(users);

//Map (Mapa), clave-valor pero permiten cualquier tipo de clave
const prices = new Map();
prices.set("productoA", 25);
prices.set("productoB", 40);
prices.set("productoC", 15);
console.log(prices.get("productoB"));
console.log(prices);

//Tree (Árbol), estructuras jerárquicas con nodos que pueden tener hijos
const tree = {
    name: "Root",
    child: [
        {name: "Carpeta1", child: []},
        {name: "Carpeta2", child: [{name: "subcarpeta", child:[]}]}
    ]
};
console.log(tree);
console.log(tree.name);
console.log(tree.child[0].name);
console.log(tree.child[1].child[0].name);





