function main() {
  const trabajadoresString = getTrabajadores();

  const trabajadoresArray = JSON.parse(trabajadoresString);

  const solucion2Div = document.getElementById("solucion2");

  // Iteramos cada trabajador
  trabajadoresArray.forEach((trabajador) => {
    const fichaTrabajador = document.createElement("div");
    fichaTrabajador.classList.add("card");

    const persona = new Persona(
      trabajador.nombre,
      trabajador.apellido1,
      trabajador.apellido2,
      trabajador.sexo,
      trabajador.dni,
      trabajador.fechaNacimiento
    );

    const antiguedad = new Trabajador(
      trabajador.nombre,
      trabajador.apellido1,
      trabajador.apellido2,
      trabajador.sexo,
      trabajador.dni,
      trabajador.fechaNacimiento,
      trabajador.dniProgenitor1,
      trabajador.puesto,
      trabajador.descripcionPuesto,
      trabajador.salarioAnualBruto,
      trabajador.numeroPagas,
      trabajador.fechaIncorporacion,
      trabajador.dniProgenitor2
    );
    // Creamos una ficha de cada uno de ellos
    fichaTrabajador.innerHTML = `
            <ul>
                <li>Nombre: ${persona.nombreCompleto} - DNI: ${persona.dni}</li>
                <li>Edad: ${persona.calcularEdad()} - Profesión: ${
      trabajador.puesto
    } (${trabajador.descripcionPuesto})</li>
                <li>Salario mensual bruto: ${(
                  trabajador.salarioAnualBruto / trabajador.numeroPagas
                ).toFixed(2)} €/mes</li>
                <li>Años antigüedad: ${antiguedad.calcularAntiguedad()} años</li>
            </ul>
        `;
    solucion2Div.appendChild(fichaTrabajador);
  });
}

main();
