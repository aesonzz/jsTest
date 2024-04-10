// Apartado 1
let aTimeStamps = []; //Array de timestamps

/**
 * Función que obtiene el timestamp actual y lo almacena en la variable aTimeStamps,
 *  además en caso de que la variable tenga más de un timestamp, mostrará la diferencia
 *  en ms entre las dos últimas pulsaciones.
 */
function getTimeStampAndShowDiff(){
    const actualTimeStamp = new Date();
    aTimeStamps.push(actualTimeStamp);
    const aTimeStampsLength = aTimeStamps.length;
    if( aTimeStampsLength > 1){
        const diff = aTimeStamps[aTimeStampsLength-1] - aTimeStamps[aTimeStampsLength-2];
        document.getElementById("timestampDiff").innerHTML = diff;
    }
}


/**
 * Función main: se invocará tras declarar todas las variables y funciones
 */
function main(){

    //IMPORTANTE: Si lo prefieres, siéntete libre de escribir el código HTML directamente en el index.html, pero siempre dentro del div='solucionX'.
    // en este caso lo hemos hecho desde el archivo js para que puedas ver cómo hacerlo.

    //Creamos un div donde mostraremos la diferencia en Ms desde que se presionó el botón por última vez.
    let html = '<div>Diferencia en milisegundos: <span id="timestampDiff"><span/></div><br/>';
    document.getElementById("solucion1").insertAdjacentHTML( 'beforeend', html );

    //Creamos botón y lo insertamos en el apartado solucion1
    html = '<button onclick="getTimeStampAndShowDiff()">Obtener TimeStamp actual</button>';
    document.getElementById("solucion1").insertAdjacentHTML( 'beforeend', html );
}

main();