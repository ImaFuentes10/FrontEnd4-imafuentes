const getName = (nombre) => "José";
const getLastName = (apellido) => "Hernàndez";

const nombre = getName();
const apellido = getLastName();

console.log("Hola! " + nombre + apellido + "es un placer conocerte");
console.log(`Hola! ${nombre} ${apellido} es un placer conocerte`);


let puesto = "Directivo"
puesto = "empleado"

console.log(`Hola ${
    puesto === "Directivo" ? //como un if
    "Dir. " + getName() : //como un else
    "Sr. " + getName()
} ${apellido} es un placer conocerte`);