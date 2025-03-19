class Viajero {
    constructor(origen, destino, costo, duracion, equipaje, sillaDeRuedas) {
        this.origen = origen
        this.destino = destino
        this.costo = costo
        this.duracion = duracion
        this.equipaje = equipaje
        this.sillaDeRuedas = sillaDeRuedas
    }

    itinerario(){
        console.log(`
            Itinerario:
            ${this.origen} - ${this.destino}
            ${this.duracion} hrs
            `)
    }

    cargos(){
        let impuesto
        let costoEquipaje
        console.log(`
            Boletos: $${this.costo} MXN
            Impuestos: $${impuesto=parseInt(this.costo)*0.16} MXN
            Equipaje: $${costoEquipaje=parseInt(this.equipaje)*800} MXN
            Total: $${parseInt(this.costo)+impuesto+costoEquipaje} MXN
            `)
    }

    peticionesEspeciales(){
        console.log(`
            ${this.sillaDeRuedas === true ?
                'Asistencia de silla de ruedas' :
                'Sin asistencia'
            }
            `)
    }
}

let viajero1 = new Viajero("La Paz", "Veracruz", "3500", 5, 2, true)

viajero1.itinerario();
viajero1.cargos();
viajero1.peticionesEspeciales();