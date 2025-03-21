const destinos = ["Roma", "Tokio", "Paris"]
const usuario = {
    nombre: "José Hernàndez",
    edad: 30,
    correo: "test@mail.com",
    saludo: "Hola! Es un placer",
    viajesRealizados: 0
}
const frutas = ["Manzana", "Pera", "Plátano", "Sandía"]

for (let i=0; i<destinos.length; i++){
    console.log(destinos[i]); //i es la posición del arreglo en la que va el recorrido
}


//for of
for(let destino of destinos){
   console.log(destino)
}

//for in
for(let clave in usuario){
    //console.log(clave);
    console.log(`${usuario[clave]}`);
}


//for each
destinos.forEach(elemento=>{
    console.log(elemento);
    
    /* mandar llamar a otra función */
    /* Asignar los valores del arreglo conforme los necesite */
})

function paraElForEach(elemento){
    console.log(elemento);
}

destinos.forEach(paraElForEach);
frutas.forEach(paraElForEach);
