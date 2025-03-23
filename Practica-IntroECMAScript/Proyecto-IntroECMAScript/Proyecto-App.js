//Importamos registrarDestino() y mostrarItinerario()
//No necesitamos importar calcularCosto() porque no se referencia en este módulo
import { registrarDestino } from "./Proyecto-Viajes.js";
// import { calcularCosto } from "./Proyecto-Viajes.js"; 
import { mostrarItinerario } from "./Proyecto-Viajes.js";

const iniciarApp= () => {
    registrarDestino("Paris", "2024-06-15", "Avión", 1);
    registrarDestino("Londres", "2024-07-01", "Tren", 3);
    registrarDestino("Ciudad del Cabo", "2025-06-03", "Barco", 2);
    registrarDestino("Lima", "2025-01-15", "Avión", 5)

    // Mostrar el itinerario de los viajes
    mostrarItinerario();
}

iniciarApp();