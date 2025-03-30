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

//filter() - filtro productos menores a 100
const less$100 = productos.filter(producto => producto.precio < 100);
console.log(less$100);

//sort() - ordeno por nombre alfabéticamente
productos.sort((a, b) => a.nombre.localeCompare(b.nombre)); //localeCompare() verifica si va antes o después un string
console.log(productos);

//map() - creo un nuevo arreglo sólo con los nombres
const productosNombres = productos.map(producto => producto.nombre);
console.log(productosNombres);

//find() - ordenamos por precio y luego encontramos el primer producto < 0, que será el más barato
productos.sort((a,b) => a.precio - b.precio);//ordenamos por precio
const findCheaper = productos.find(producto => producto.precio > 0); //buscamos el primer elemento, osea, el más barato
console.log(findCheaper);

//forEach() - aplicamos un 10% de descuento a cada producto
productos.forEach(producto => {
    const descuento = producto.precio * 0.9;
    console.log(`El producto ${producto.nombre} cuesta $${descuento} por el 10% de descuento`);
});

//reduce() - sacamos el costo total de los productos
const costoTotal = productos.reduce((acum, producto) => acum + producto.precio, 0);
console.log(costoTotal);

//some() - verificamos si hay ropa en existencia
const hayRopa = productos.some(producto => producto.categoria === "Ropa");
console.log(`${
    hayRopa === true ?
    'Sí hay ropa en existencia':
    'No hay ropa en existencia'
}`);

//every() - verificamos si todos los artículos cuestan menos de $500
const menos500 = productos.every(producto => producto.precio < 500);
console.log(`${
    menos500 === true ?
    'Todos los artículos cuestan menos de $500':
    'Hay artículos de más de $500'
}`);

//includes() - verificamos si hay zapatos en existencia
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

