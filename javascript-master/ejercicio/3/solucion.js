let colores =
  '{"arrayColores":[{"nombreColor":"rojo","valorHexadec":"#f00"},{"nombreColor":"verde","valorHexadec":"#0f0"},{"nombreColor":"azul","valorHexadec":"#00f"},{"nombreColor":"cyan","valorHexadec":"#0ff"},{"nombreColor":"magenta","valorHexadec":"#f0f"},{"nombreColor":"amarillo","valorHexadec":"#ff0"},{"nombreColor":"negro","valorHexadec":"#000"}]}';

/**
 * TODO: Completa esta función:
 *      - Declara una constante dentro de la función y crea un JSON con la estructura descrita a continuación
 *          - personas = Array de personas
 *              - nombre: Paco, edad: 44
 *              - nombre: María, edad: 20
 *              - nombre: Luis, edad: 17
 *              - nombre: Irene, edad: 55
 *      - Muestra el JSON como una cadena de texto dentro del div con id="solucion1".
 */
function crearObjetoPersonasYPintarStringPorPantalla() {
  const personas = [
    { nombre: "Paco", edad: 44 },
    { nombre: "María", edad: 20 },
    { nombre: "Luis", edad: 17 },
    { nombre: "Irene", edad: 55 },
  ];
  //Transformacion del array a JSON
  const jsonPersonas = JSON.stringify({ personas });
  document.getElementById("solucion1").innerText = jsonPersonas;
}

/**
 * TODO:
 *   - Crear un json a partir de la variable colores.
 *   - Por cada color crearás de forma dinámica un div '<div style="background-color: codigoColor;">nombreColor</ div>' con el color en cuestión.
 *      Los div deberán estar dentro del div con id="solucion2".
 */
function mostrarColores() {
  // Transformames el Json a objeto parseandolo
  const coloresObjeto = JSON.parse(colores);
  // Obtener array de colores en el objeto
  const arrayColores = coloresObjeto.arrayColores;
  // Obetenemos el elemento solucion2
  const solucion2 = document.getElementById("solucion2");
  // Iteramos sobre cada color y creamos un nuevo div para cada color
  arrayColores.forEach((color) => {
    const div = document.createElement("div");
    div.textContent = color.nombreColor;
    div.style.backgroundColor = color.valorHexadec;
    solucion2.appendChild(div);
  });
}

/**
 * Función main: se invocará tras declarar todas las variables y funciones
 */
function main() {
  crearObjetoPersonasYPintarStringPorPantalla();
  mostrarColores();
}

main();
