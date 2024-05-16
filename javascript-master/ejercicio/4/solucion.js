// Definimos la Clase Persona

class Persona {
  constructor(
    nombre,
    apellido1,
    apellido2,
    sexo,
    dni,
    fechaNacimiento,
    profesion,
    dniProgenitor1,
    dniProgenitor2 = null
  ) {
    this.nombre = nombre;
    this.apellido1 = apellido1;
    this.apellido2 = apellido2;
    this.sexo = sexo;
    this.dni = dni;
    this.fechaNacimiento = fechaNacimiento;
    this.profesion = profesion;
    this.dniProgenitor1 = dniProgenitor1;
    this.dniProgenitor2 = dniProgenitor2;
  }

  // Metodo para obtener el nombre completo

  get nombreCompleto() {
    let nombreCompleto = this.nombre + " " + this.apellido1;
    if (this.apellido2) {
      nombreCompleto += " " + this.apellido2;
    }
    return nombreCompleto;
  }

  // Metodo para obtener la edad

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

// Creamos el objeto Persona

const mercedes = new Persona(
  "Mercedes",
  "López",
  "Ramirez",
  "F",
  "54824443S",
  "1978-12-30",
  "Doctora",
  "44587993R",
  null
);

// Accedemos al div solucion2
const solucion2Div = document.getElementById("solucion2");
// Creamos el elemento <p> para mostrar la informacion de mercedes
const infoMercedes = document.createElement("p");
// Asignamos el contenido a los elementos <p>
infoMercedes.textContent = `Nombre: ${mercedes.nombreCompleto} - Dni: ${mercedes.dni}`;
// Agregamos los elementos <p> al div solucion2
solucion2Div.appendChild(infoMercedes);
const infoEdadProfesion = document.createElement("p");
infoEdadProfesion.textContent = `Edad: ${mercedes.edad} - Profesión: ${mercedes.profesion}`;
solucion2Div.appendChild(infoEdadProfesion);
