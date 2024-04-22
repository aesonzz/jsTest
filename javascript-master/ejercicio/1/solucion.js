let aNumbers = [];

/**
 * Función que recupera el valor del input del formulario y lo añade a la variable aNumbers.
 */
function addNumber() {
  const value =
    document.getElementById("formApartado1").elements["numberInput"].value;
  if (value || value === 0) {
    aNumbers.push(value);
    updateNumbersDisplay();
  }
}

/**
 * Función para mostrar los números insertados y los números pares.
 */
function updateNumbersDisplay() {
  const insertedNumbersDiv = document.getElementById("insertedNumbers");
  const evenNumbersDiv = document.getElementById("evenNumbers");

  // Muestra los datos
  insertedNumbersDiv.textContent = "Números insertados: " + aNumbers.join(", ");

  // Filtrar los numeros pares y los ordena de menor a mayor
  const evenNumbers = aNumbers
    .filter((number) => number % 2 === 0)
    .sort((a, b) => a - b);
  evenNumbersDiv.textContent = "Números pares: " + evenNumbers.join(", ");
}

/**
 * Función para convertir los números impares en pares sumándoles 1.
 */
function convertOddToEven() {
  // Modifica el array original cambiando los numero impares a pares
  for (let i = 0; i < aNumbers.length; i++) {
    if (aNumbers[i] % 2 !== 0) {
      aNumbers[i]++;
    }
  }
  // Actualiza la visualizacion de numeros
  updateNumbersDisplay();
}

// Obtiene el botón del apartado 2 y añade un event listener para llamar a la funcion convertOddToEven
document.getElementById("solucion2").innerHTML =
  '<button onclick="convertOddToEven()">Convertir Impares en Pares</button>';
