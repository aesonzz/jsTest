// Clase Trabajador
class Trabajador extends Persona {
    constructor(nombre, apellido1, apellido2, sexo, dni, fechaNacimiento, dniProgenitor1, puesto, descripcionPuesto, salarioAnualBruto, numeroPagas, fechaIncorporacion, dniProgenitor2 = null) {
        super(nombre, apellido1, apellido2, sexo, dni, fechaNacimiento, dniProgenitor1, dniProgenitor2);

        this.puesto = puesto;
        this.descripcionPuesto = descripcionPuesto;
        this.salarioAnualBruto = salarioAnualBruto;
        this.numeroPagas = numeroPagas;
        this.fechaIncorporacion = fechaIncorporacion;
    }
  
    // Metodo para obtener el salario
    get salarioMensualBruto() {
        return this.salarioAnualBruto / this.numeroPagas;
    }
  
    // Metodo para la antiguedad
    calcularAntiguedad() {
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
