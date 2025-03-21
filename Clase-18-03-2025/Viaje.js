class Viaje {
    constructor(origen, destino, duracion){
        this.destino = destino;
        this.origen = origen;
        this.duracion = duracion;
    }

    getInfo(){
        console.log(`
            Origen: ${this.origen}
            Destino: ${this.destino}
            Duración: ${this.duracion} min
            `)
    }

    getCost(){
        console.log(`El costo del viaje $${this.duracion*35} MXN`);
        
    }

    static mensajeBienvenida(){
        console.log(this.saludo);
    }
}


class ViajeInternacional extends Viaje {
    constructor(origen, destino, duracion, pais) {
        super(origen, destino, duracion); //Llamar al constructor padre

        this.pais = pais;
    }

    mostrarInfo(){
        console.log(`Destino: ${this.destino}nPaís: ${this.pais}`);
        
    }
}

const viajeInt1 = new ViajeInternacional ("CDMX", "Lima", 200, "Perú")

const viaje1 = new Viaje("Guadalajara", "CDMX", "60")

console.log({viaje1});

viaje1.getInfo();
viaje1.getCost();

viajeInt1.getInfo();
viajeInt1.getCost();
viajeInt1.mostrarInfo();