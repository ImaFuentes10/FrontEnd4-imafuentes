const listaDeCompras = [];

//función agregarProducto
const agregarProducto = (producto) => {
    listaDeCompras.push(producto);
}

//función eliminarProducto
const eliminarProducto = (producto) => {
    //usamos while para eliminar todas las elementos que sean iguales al producto a eliminar
    while(listaDeCompras.includes(producto)){
        const index = listaDeCompras.indexOf(producto);//obtenemos el index del elemento a eliminar
        listaDeCompras.splice(index, 1) //eliminamos el elemento específico
    };   
}

//función mostrarLista
const mostrarLista = () => {
    let listaVerificada = new Set(listaDeCompras);//creamos un set con la lista para eliminar cualquier duplicado
    //imprimimos la lista, usamos for ... of para imprimir cada elemento del set    
    console.log(`
        \nLista de compras:\n
        `);
        for(let producto of listaVerificada) {
            console.log(`- ${producto}\n`);
        }
}

//uso de la app
agregarProducto("Bicarbonato");
agregarProducto("Tomate");
agregarProducto("Jabón de trastes");
agregarProducto("Tomate");

mostrarLista();

agregarProducto("Manzana");
eliminarProducto("Tomate");
eliminarProducto("Papel de baño");
agregarProducto("Melón")

mostrarLista();