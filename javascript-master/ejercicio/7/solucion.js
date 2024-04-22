function main() {
  const trabajadoresString = getTrabajadores(15);

  const trabajadoresArray = JSON.parse(trabajadoresString);

  const solucion1Div = document.getElementById("solucion1");

  // Iteramos sobre cada trabajador y creamos un elemento de lista para cada uno
  const ul = document.createElement("ul");
  trabajadoresArray.forEach((trabajador) => {
    console.log("Trabajador:", trabajador);

    const li = document.createElement("li");
    // Edad calculada del metodo persona
    const edad = new Persona(
      trabajador.nombre,
      trabajador.apellido1,
      trabajador.apellido2,
      trabajador.sexo,
      trabajador.dni,
      trabajador.fechaNacimiento,
      trabajador.dniProgenitor1,
      trabajador.dniProgenitor2
    ).calcularEdad();
    // Verificamos que las propiedades del trabajador esten definidas
    const nombreCompleto =
      trabajador.nombre && trabajador.apellido1
        ? `${trabajador.nombre} ${trabajador.apellido1}`
        : "Nombre no disponible";
    const dni = trabajador.dni ? trabajador.dni : "DNI no disponible";
    li.textContent = `Nombre: ${nombreCompleto} - DNI: ${dni} - Edad: ${edad} años`;
    ul.appendChild(li);
  });

  solucion1Div.appendChild(ul);

  const solucion2Div = document.getElementById("solucion2");

  // Calculos para las edades
  const conteoPorEdad = {
    "<20": 0,
    "20-29": 0,
    "30-39": 0,
    "40-49": 0,
    ">=50": 0,
  };

  trabajadoresArray.forEach((trabajador) => {
    // Calculamos la edad de cada trabajador
    const edad = new Persona(
      trabajador.nombre,
      trabajador.apellido1,
      trabajador.apellido2,
      trabajador.sexo,
      trabajador.dni,
      trabajador.fechaNacimiento,
      trabajador.dniProgenitor1,
      trabajador.dniProgenitor2
    ).calcularEdad();
    // Incrementamos el contador correspondiente para cada edad de trabajador
    if (edad < 20) {
      conteoPorEdad["<20"]++;
    } else if (edad >= 20 && edad <= 29) {
      conteoPorEdad["20-29"]++;
    } else if (edad >= 30 && edad <= 39) {
      conteoPorEdad["30-39"]++;
    } else if (edad >= 40 && edad <= 49) {
      conteoPorEdad["40-49"]++;
    } else {
      conteoPorEdad[">=50"]++;
    }
  });

  // Creamos la lista con los resultados
  const resultados2 = Object.entries(conteoPorEdad).map(
    ([rangoEdad, count]) => {
      return `<p>Rango de edades [${rangoEdad}]: ${count} trabajadores</p>`;
    }
  );

  solucion2Div.innerHTML = resultados2.join("");
}

main();
