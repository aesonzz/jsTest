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

    // Metodo para obtener el nombre de la persona
    get nombreCompleto() {
        let nombreCompleto = this.nombre + " " + this.apellido1;
        if (this.apellido2) {
            nombreCompleto += " " + this.apellido2;
        }
        return nombreCompleto;
    }

    // Metodo para la edad de la persona
    calcularEdad() {
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
