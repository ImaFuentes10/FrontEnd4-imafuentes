//PROYECTO ESTRUCTURAS DE DATOS

//Creo el arreglo y un set que irá dentro del arreglo para evitar repeticiones
const listaDeCompras = [];
const productos = new Set();

//función para agregar productos
const agregarProducto = (producto) => {
    productos.add(producto);//se añade al set
    listaDeCompras.length = 0;//se limpia el arreglo
    listaDeCompras.push(productos);//se añade el nuevo set
}

const eliminarProducto = (producto) => {
    productos.delete(producto);//se elimina del set
    //listaDeCompras = [] //se limpia el arreglo
    listaDeCompras.pop();//se limpia el arreglo
    listaDeCompras.push(productos);//se añade e nuevo set
}

//función para mostrar la lista
const mostrarLista = () => {
    console.log(`\nLista de compras:\n`)  
    //for of para imprimir cada elemento del set
    for (let producto of productos){
        console.log(`- ${producto}\n`)
    };
    //productos.forEach(producto => console.log(producto));//también posible con forEach()
    //console.log(listaDeCompras);//si se imprime así sale; [ Set(n) {  } ]
}

//uso de la app
agregarProducto("Bicarbonato");
agregarProducto("Tomate");
agregarProducto("Jabón de trastes");
agregarProducto("Tomate");

mostrarLista();

agregarProducto("Manzana");
eliminarProducto("Bicarbonato");
eliminarProducto("Papel de baño");
agregarProducto("Melón")

mostrarLista();