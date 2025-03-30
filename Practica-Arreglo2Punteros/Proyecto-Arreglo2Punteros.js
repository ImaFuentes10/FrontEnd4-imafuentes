//ARREGLO 2 PUNTEROS

const invitados = ["Ana", "Carlos", "Cecilia", "Daniel", "Diana", "Eduardo"];

const encontarPareja = () => {
    //punteros iniciando enlas primeras dos posiciones del arreglo
    let inicio = 0;
    let siguiente = 1;

    //movemos puntero siguiente en cada iteración
    for (siguiente; siguiente < invitados.length; siguiente++){
        
        //comparamos la primera letra de cada elemento con charAt(0)
        if(invitados[inicio].charAt(0) === invitados[siguiente].charAt(0)){          
            return console.log(`${invitados[inicio]}, ${invitados[siguiente]}`); //paramos la función y retornamos los nombres
        }

        //si el segundo puntero llega al final del arreglo...
        if(siguiente === invitados.length - 1){
            inicio++; //... avanzamos en 1 el primer puntero
            siguiente = inicio; //volvemos al segundo puntero = primero (porque al reiterarse código se le aumentará 1)
        }
    } 
    return -1; //detenemos si no encontramos ningún par
}

encontarPareja();

