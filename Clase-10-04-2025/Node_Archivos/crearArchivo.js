//Importar modulo
const fs = require('fs')

//Mensaje ejemplo
const mensaje = '¡Hola desde node.js! Esta es una línea escrita desd JS';

//Escribir el archivo
fs.writeFile('../Bootstrap/saludo.txt', mensaje, (err) =>{
    if(err) {
        console.error('Error al escribir el archivo', err);
    }else{
        console.log('Archivo creado exitoasamente como saludo.txt');
    }
})

fs.readFile('../Bootstrap/saludo.txt', mensaje, (err) =>{
    if(err)throw err;
    console.log(mensaje);
})
