/* Tres estados de una promesa:
pending, fullfilled y rejected */

const obtenerDestino = (destino) => {
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            if (destino){
                resolve(`Destino confirmado: ${destino}`)
            }else{
                reject(`Error: No se especificó un destino`)
            }
        }, 3000)
    })
}

function notificarUsuario(destino){
    console.log(destino);
}

function manejarError(error){
    console.log(error);
}

//Llamar a la promesa
obtenerDestino()
.then(notificarUsuario)
.catch(manejarError)
.finally(()=>{
    console.log("Siempre me ejecuto");
})
