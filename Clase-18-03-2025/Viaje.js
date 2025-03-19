class Viaje {
    constructor(destino, origen, duracion){
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
}

const viaje1 = new Viaje("Guadalajara", "CDMX", "60")

console.log({viaje1});

viaje1.getInfo();
viaje1.getCost();