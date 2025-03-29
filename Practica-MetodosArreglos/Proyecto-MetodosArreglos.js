//PROYECTO MÉTODOS DE ARREGLOS
//Pracitcar manipular datos con métodos de arreglos

//arreglo de objetos con al menos 5 productos, cada uno con las propiedades nombre, precio y categoría.
const productos = [
    { nombre: "Camiseta", precio: 15, categoria: "Ropa" },
    { nombre: "Laptop", precio: 800, categoria: "Electrónica" },
    { nombre: "Libro", precio: 12, categoria: "Educación" },
    { nombre: "Zapatos", precio: 50, categoria: "Ropa" },
    { nombre: "Celular", precio: 600, categoria: "Electrónica" },
];

//filter()
const less$100 = productos.filter(producto => producto.precio < 100);
console.log(less$100);

//sort()
productos.sort((a, b) => a.nombre.localeCompare(b.nombre)); //localeCompare() verifica si va antes o después un string
console.log(productos);

//map() 
const productosNombres = productos.map(producto => producto.nombre);
console.log(productosNombres);

//find()
productos.sort((a,b) => a.precio - b.precio);//ordenamos por precio
console.log(productos);
const findCheaper = productos.find(producto => producto.precio > 0); //buscamos el primer elemento, osea, el más barato
console.log(findCheaper);

//forEach()
productos.forEach(producto => {
    const descuento = producto.precio * 0.9;
    console.log(`El producto ${producto.nombre} cuesta $${descuento} por el 10% de descuento`);
});

//reduce()
const costoTotal = productos.reduce((acum, producto) => acum + producto.precio, 0);
console.log(costoTotal);

//some()
const hayRopa = productos.some(producto => producto.nombre === "Zapatos");
console.log(`${
    hayRopa === true ?
    'Sí hay ropa en existencia':
    'No hay ropa en existencia'
}`);

//every()
const menos500 = productos.every(producto => producto.precio < 500);
console.log(`${
    menos500 === true ?
    'Todos los artículos cuestan menos de $500':
    'Hay artículos de más de $500'
}`);

//includes()
//utilizo el arreglo productosNombres que cree anteriormente con map() para verificar sólo los nombres del producto
const hayZapatos = productosNombres.includes("Zapatos");
console.log(`${
    hayZapatos === true ?
    'Hay zapatos en existencia' :
    'No hay zapatos en existencia'
}`);
//otro ejemplo con un artículo que no está en el arreglo
const hayPantalones = productosNombres.includes("Pantalones");
console.log(`${
    hayPantalones === true ?
    'Hay pantalones en existencia' :
    'No hay pantalones en existencia'
}`);

