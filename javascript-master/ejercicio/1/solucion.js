let aNumbers = [];

/**
 * Función que recupera el valor del input del formulario y lo añade a la variable aNumbers.
 */
function addNumber(){
    const value = document.getElementById("formApartado1").elements["numberInput"].value;
    if(value || value === 0){
        aNumbers.push(value);
    }
}