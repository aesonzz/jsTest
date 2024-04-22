// Clase Persona
class Persona {
    constructor(nombre, apellido1, apellido2, sexo, dni, fechaNacimiento, dniProgenitor1, dniProgenitor2 = null) {
        this.nombre = nombre;
        this.apellido1 = apellido1;
        this.apellido2 = apellido2;
        this.sexo = sexo;
        this.dni = dni;
        this.fechaNacimiento = fechaNacimiento;
        this.dniProgenitor1 = dniProgenitor1;
        this.dniProgenitor2 = dniProgenitor2;
    }  

    // Metodo para obtener el nombre completo de la persona
    get nombreCompleto() {
        let nombreCompleto = this.nombre + " " + this.apellido1;
        if (this.apellido2) {
            nombreCompleto += " " + this.apellido2;
        }
        return nombreCompleto;
    }

    // Metodo para obtener la edad de la persona
    get edad() {
        const hoy = new Date();
        const fechaNacimiento = new Date(this.fechaNacimiento);
        let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
        const mes = hoy.getMonth() - fechaNacimiento.getMonth();
        if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
            edad--;
        }
        return edad;
    }
}

// Clase Trabajador que extiende de persona
class Trabajador extends Persona {
    constructor(nombre, apellido1, apellido2, sexo, dni, fechaNacimiento, dniProgenitor1, puesto, descripcionPuesto, salarioAnualBruto, numeroPagas, fechaIncorporacion, dniProgenitor2 = null) {
        // Constructor de la clase padre
        super(nombre, apellido1, apellido2, sexo, dni, fechaNacimiento, dniProgenitor1, dniProgenitor2);
        
        this.puesto = puesto;
        this.descripcionPuesto = descripcionPuesto;
        this.salarioAnualBruto = salarioAnualBruto;
        this.numeroPagas = numeroPagas;
        this.fechaIncorporacion = fechaIncorporacion;
    }
     // Metodo para obtener el salario bruto mensual
     get salarioMensualBruto() {
        return this.salarioAnualBruto / this.numeroPagas;
    }

    // Metodo para obtener la antigüedad
    get anosAntiguedad() {
        const hoy = new Date();
        const fechaIncorporacion = new Date(this.fechaIncorporacion);
        let antiguedad = hoy.getFullYear() - fechaIncorporacion.getFullYear();
        const mes = hoy.getMonth() - fechaIncorporacion.getMonth();
        if (mes < 0 || (mes === 0 && hoy.getDate() < fechaIncorporacion.getDate())) {
            antiguedad--;
        }
        return antiguedad;
    }
}

// Objeto trabajador
const mercedesTrabajadora = new Trabajador(
    "Mercedes",
    "López",
    "Ramirez",
    "F",
    "54824443S",
    "1978-12-30",
    "44587993R",
    "Doctora",
    "Doctora interina",
    35000,
    14,
    "2006-09-20"
);

// elemnto HTML con el id solucion2
const solucion2Div = document.getElementById("solucion2");

// Agregamos el <div> para mostrar la informacion del trabajador
const infoTrabajadorDiv = document.createElement("div");

// Agregamos los elementos <p> para cada línea y le insertamos el texto
const nombreDNI = document.createElement("p");
nombreDNI.textContent = `Nombre: ${mercedesTrabajadora.nombreCompleto} - DNI: ${mercedesTrabajadora.dni}`;

const edadProfesion = document.createElement("p");
edadProfesion.textContent = `Edad: ${mercedesTrabajadora.edad} - Profesión: ${mercedesTrabajadora.puesto} (${mercedesTrabajadora.descripcionPuesto})`;

const salario = document.createElement("p");
salario.textContent = `Salario mensual bruto: ${mercedesTrabajadora.salarioMensualBruto.toFixed(2)} €/mes`;

const antiguedad = document.createElement("p");
antiguedad.textContent = `Años antigüedad: ${mercedesTrabajadora.anosAntiguedad} años`;

// Agregamos cada elemento  al div solucion2
infoTrabajadorDiv.appendChild(nombreDNI);
infoTrabajadorDiv.appendChild(edadProfesion);
infoTrabajadorDiv.appendChild(salario);
infoTrabajadorDiv.appendChild(antiguedad);

// Agregar el <div> con la información del Trabajador al id solucion2
solucion2Div.appendChild(infoTrabajadorDiv);