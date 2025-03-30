//ARREGLO 2 PUNTEROS

const invitados = ["Ana", "Carlos", "Cecilia", "Daniel", "Diana", "Eduardo"];

const encontarPareja = (arr) => {
    //punteros iniciando enlas primeras dos posiciones del arreglo
    let inicio = 0;
    let siguiente = 1;

    //movemos puntero siguiente en cada iteración
    for (siguiente; siguiente < arr.length; siguiente++){
        
        //comparamos la primera letra de cada elemento con charAt(0)
        if(arr[inicio].charAt(0) === arr[siguiente].charAt(0)){          
            console.log(`Pareja: ${arr[inicio]}, ${arr[siguiente]}`); //retornamos los nombres
            arr.splice(inicio, 1); //eliminamos el primer nombre del arreglo
            arr.splice(siguiente - 1, 1) //eliminamos el segundo nombre del arreglo
            //reiniciamos punteros, siguiente en 0 porque aumentará 1 en la sig iteración
            inicio = 0;
            siguiente = 0;;
        }

        //si el segundo puntero llega al final del arreglo...
        if(siguiente === arr.length - 1){
            inicio++; //... avanzamos en 1 el primer puntero
            siguiente = inicio; //volvemos al segundo puntero = primero (porque al reiterarse código se le aumentará 1)
        }

        //si el puntero inicio llega al final del arreglo significa que ya se recorrió todo y no hubo parejas
        if(inicio === arr.length - 1){
            console.log(`Sin pareja: ${arr.join(', ')}`); //imprimimos las personas faltantes de pareja
        }
    }
    return -1
}

encontarPareja(invitados);