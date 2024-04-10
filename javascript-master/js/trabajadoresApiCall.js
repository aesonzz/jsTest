/**
 * Devuelve un objeto con los atributos de un Trabajador
 * @param {String} dni 
 * @param {String} dniProgenitor 
 * @param {String (dd/mm/yyyy)} annoNacimiento 
 * @param {String} primerApellido 
 * @param {String} segudoApellido 
 * @returns {Object}
 */
function getRandomTrabajador(dni = null, dniProgenitor = null, annoNacimiento = null, primerApellido = null, segudoApellido = null){
    let trabajador = {};
    let nombre = getNombreRandom();
    trabajador['nombre'] = nombre.nombre;
    trabajador['apellido1'] = primerApellido? primerApellido : getApellidoRandom();
    trabajador['apellido2'] = segudoApellido? segudoApellido : getApellidoRandom();
    trabajador['sexo'] = nombre.sexo;
    trabajador['dni'] = dni ? dni : getRandomDNI();
    trabajador['fechaNacimiento'] = annoNacimiento? getRandomDateBetweenDates('01/01/'+annoNacimiento,'31/12/'+annoNacimiento) : getRandomDateBetweenDates('01/01/1960','31/12/2005');
    trabajador['dniProgenitor1'] = dniProgenitor? dniProgenitor: getRandomDNI();
    trabajador['dniProgenitor2'] = getRandomNumberBetween(0,1)? getRandomDNI(): null;
    trabajador['puesto'] = getProfesionRandom();
    trabajador['descripcionPuesto'] = trabajador['puesto']+'  ...';
    trabajador['salarioAnualBruto'] = getRandomNumberBetween(18000,45000);
    trabajador['numeroPagas'] = getRandomNumberBetween(0,1) ? 12 : 14;
    annoNacimiento = parseInt((trabajador['fechaNacimiento'].split('/'))[2]);
    let annoActual = (new Date()).getFullYear();
    let maxYear = annoActual-3 > annoNacimiento+40 ?annoNacimiento+40: annoActual-3;
    let minYear = annoNacimiento+18;
    let firstYear = getRandomNumberBetween(minYear, maxYear);
    trabajador['fechaIncorporacion'] = getRandomDateBetweenDates('01/01/'+firstYear , '31/12/'+maxYear);
    return trabajador;
}

/**
 * Devuelve un array de objetos con los atributos de la clase Trabajador en formato String.
 * Por parámetro puede recibir el tamaño deseado del array devuelto, si no se le pasa nada, la longitud del array será de 10.
 * @param {Number} nTrabajadores 
 * @returns {String} String trabajadores
 */
function getTrabajadores(nTrabajadores = 10){
    let trabajadores = [];
    for(let x = 0; x<nTrabajadores; x++){
        trabajadores.push(getRandomTrabajador());
    }
    return JSON.stringify(trabajadores);
}
