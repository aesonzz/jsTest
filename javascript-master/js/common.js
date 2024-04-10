if(!PageNumber && PageNumber !== 0){
    console.log('ERROR: PageNumber not found');
}else{
    //Añadimos paginación
    let navigationHtmlCode = '<div class="nav">';
    switch(PageNumber){
        case -1:
            navigationHtmlCode += '<div class="empty-div"></div>';
            navigationHtmlCode += '<img src="./img/logo.png" class="logo"/>';
            navigationHtmlCode += '<a class="common-button next" href="./ejercicio/ejemplo/index.html">Ejemplo ></a>';
            break;
        case 0: 
            navigationHtmlCode += '<a class="common-button prev" href="../../index.html"><span> < </span>Introducción</a> ';
            navigationHtmlCode += '<img src="../../img/logo.png" class="logo"/>';
            navigationHtmlCode += '<a class="common-button next" href="../'+(PageNumber+1)+'/index.html">Ejercicio '+(PageNumber+1)+' <span> > </span></a>';
            break;
        case 1:
            navigationHtmlCode += '<a class="common-button prev" href="../ejemplo/index.html"><span> < </span>Ejemplo</a> ';
            navigationHtmlCode += '<img src="../../img/logo.png" class="logo"/>';
            navigationHtmlCode += '<a class="common-button next" href="../'+(PageNumber+1)+'/index.html">Ejercicio '+(PageNumber+1)+' <span> > </span></a>';
            break;
        case 10:
            navigationHtmlCode += '<a class="common-button prev" href="../'+(PageNumber-1)+'/index.html"><span> < </span>Ejercicio '+(PageNumber-1)+'</a> ';
            navigationHtmlCode += '<img src="../../img/logo.png" class="logo"/>';
            navigationHtmlCode += '<div class="empty-div"></div>';
            break;
        default:
            navigationHtmlCode += '<a class="common-button prev" href="../'+(PageNumber-1)+'/index.html"><span> < </span>Ejercicio '+(PageNumber-1)+'</a> ';
            navigationHtmlCode += '<img src="../../img/logo.png" class="logo"/>';
            navigationHtmlCode += '<a class="common-button next" href="../'+(PageNumber+1)+'/index.html">Ejercicio '+(PageNumber+1)+' <span> > </span></a>';
    }
    document.body.insertAdjacentHTML( 'afterbegin', navigationHtmlCode+'</div>' );

    //Seteamos el título si existe    
    if(document.getElementById('ejercicioTitle')){
        document.getElementById('ejercicioTitle').innerHTML = 'Ejercicio '+PageNumber+':';
    }
}

/**
 * Rellena un valor "number" con ceros a la izquierda hasta que tenga una longitud "len"
 * @param {Number | String} number 
 * @param {Number} len 
 * @returns {String} 
 */
const fillStringWithZerosOnLeft = (number, len ) => "0".repeat(len - number.toString().length) + number.toString();

/**
 * Devuelve una fecha random entre dos fechas pasadas por parámetro
 * @param {String (dd/mm/yyyy)} fecha1 
 * @param {String (dd/mm/yyyy)} fecha2 
 * @returns {String (dd/mm/yyyy)}
 */
const getRandomDateBetweenDates = (fecha1, fecha2) => {
    fecha1 = fecha1.split("/");
    fecha2 = fecha2.split("/");
    if(fecha1.length !== 3 && fecha2.length !== 3) return;
    let fecha1Date = new Date( fecha1[2], fecha1[1] - 1, fecha1[0]);
    let fecha2Date = new Date( fecha2[2], fecha2[1] - 1, fecha2[0]);
    let diff = fecha2Date.getTime() - fecha1Date.getTime();
    let newFecha = new Date(fecha1Date.getTime()+Math.floor(Math.random() * diff));
    let day = fillStringWithZerosOnLeft(newFecha.getDate(),2);
    let month = fillStringWithZerosOnLeft(newFecha.getMonth() + 1,2);
    let year = newFecha.getFullYear();
    return day+'/'+month+'/'+year;
}

/**
 * Devuelve un número aleatorio entre dos números dados (ambos inclusive)
 * @param {Number} min 
 * @param  {Number} max 
 * @returns {Number}
 */
const getRandomNumberBetween = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

/**
 * Genera un DNI aleatorio
 * @returns {String}
 */
const getRandomDNI = () => {
    const letrasDNI = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
    const nDni = getRandomNumberBetween(0,99999999);
    return fillStringWithZerosOnLeft(nDni, 8)+letrasDNI[nDni % 23];
}


/**
 * Devuelve un apellido al azar
 * @returns {string}
 */
 function getApellidoRandom(){
    const apellidos = ["Vélez","Vilanova","Ordóñez","Fernandez","Tejada","Solera","Barreda","Macario","Saez","Pedrero","Arteaga","Gimeno","Pérez","Palacio","Villena","Rivas","Roldán-Carrasco","Jover-Alegre","Estevez","Cano","Romeu","Garriga","Blanco","Jara","Carmen","Echeverría","Zurita","Barranco","Cervantes","Cortés","Raya","Palomares","Marisa","Linares","Franch","Angélica","Sancho","Catalá","Benítez","Bosch","Mendoza","Calderon","Cuéllar","Haro","Felicia","Naranjo","Aguirre","Albero","Bellido","Casanovas","Mena","Rómulo","Blázquez","Navarro","Oliveras","Pavón","Balduino","Bautista","Agudo","Belda","Pina","Morante","Torres","Falcón","Herrero","Ferreras","Ayllón","Calderon","Valderrama","Barragán","Rosales","Chaves-Amorós","Esther","Peláez","Cornejo","Rivera","Peña","Garcés","Ani","Armengol","Lledó","Tomás","Zamora","Andrade","Vergara","Tejero","Lerma","Roselló","Viña","Murcia","Sofía","Garcés","Angulo","Rueda","Gonzalez","Morata","Girona","Barriga","Crespi","Plaza","Baeza","Violeta","Sánchez","Salinas","Álvaro","Antúnez","Quirós","Fermín","Ureña","Luz","Marí","Salgado","Roldan","Segura","Pedraza","José","Sevilla","Lorenzo","Botella","Iglesias","Arribas","Rivero","Carbó","Soriano","Héctor","Villalobos","Moliner","Chaves","Rubio","Almansa","Galvez","Castillo","Pagès","Sala","Lamas","Cardona","Jose","Luis","Correa","Estevez","Bartolomé","Montero","Bejarano","Pujol","Mesa","Cañas","Ruano","Chamorro","Cloe","Baeza","Costa","Colomer","Mármol","Navarrete","Romero","Pallarès","Chico","Carlos","Huertas","Villalobos","Camacho","Trillo","Beltrán","Busquets","Julián","Arnal-Fonseca","Abellán","Villalba","Arellano","Isaac","Moreno","Ferrando","Tena","Borrell","Farré-Cano","María","Segarra","Bustos-Yáñez","Filomena","AlcalMoreno","Roda","Real","Exposito","Calzada","Vergara","Perera","Quintero","Mayo","Franch","Vicens-Alcaraz","Quintana","Frías"];
    return apellidos[getRandomNumberBetween(0,apellidos.length-1)]
}

/**
 * Devuelve un nombre al azar
 * @returns {string}
 */
 function getNombreRandom(){
    const nombres = [{nombre:"Isidora", sexo: "F"},{nombre:"Gisela", sexo: "F"},{nombre:"Elisabet", sexo: "F"},{nombre:"Isa", sexo: "F"},{nombre:"Néstor", sexo: "M"},{nombre:"Emiliano", sexo: "M"},{nombre:"Ramón", sexo: "M"},{nombre:"Nicolasa", sexo: "F"},{nombre:"Ángela", sexo: "F"},{nombre:"Pedro", sexo: "M"},{nombre:"Rodrigo", sexo: "M"},{nombre:"Lara", sexo: "F"},{nombre:"Isidro", sexo: "M"},{nombre:"María", sexo: "F"},{nombre:"Graciela", sexo: "F"},{nombre:"Aarón", sexo: "M"},{nombre:"Ruperta", sexo: "F"},{nombre:"Camila", sexo: "F"},{nombre:"Pepita", sexo: "F"},{nombre:"Herminia", sexo: "F"},{nombre:"Porfirio", sexo: "M"},{nombre:"Brígida", sexo: "F"},{nombre:"Maxi", sexo: "M"},{nombre:"Asdrubal", sexo: "M"},{nombre:"Teobaldo", sexo: "M"},{nombre:"Marcial", sexo: "M"},{nombre:"Curro", sexo: "M"},{nombre:"Vicente", sexo: "M"},{nombre:"Otilia", sexo: "F"},{nombre:"Flavia", sexo: "F"},{nombre:"José", sexo: "M"},{nombre:"Susanita", sexo: "F"},{nombre:"Basilio", sexo: "M"},{nombre:"Lupita", sexo: "F"},{nombre:"Rosario", sexo: "F"},{nombre:"Rufina", sexo: "F"},{nombre:"Martirio", sexo: "F"},{nombre:"Baltasar", sexo: "M"},{nombre:"Jordana", sexo: "F"},{nombre:"Chus", sexo: "F"},{nombre:"Calisto", sexo: "M"},{nombre:"Ariadna", sexo: "F"},{nombre:"Juliana", sexo: "F"},{nombre:"Esteban", sexo: "M"},{nombre:"Fanny", sexo: "F"},{nombre:"Ana", sexo: "F"},{nombre:"Luciana", sexo: "F"},{nombre:"Flavia", sexo: "F"},{nombre:"Tamara", sexo: "F"},{nombre:"Abril", sexo: "F"},{nombre:"Ligia", sexo: "F"},{nombre:"Óscar", sexo: "M"},{nombre:"Ovidio", sexo: "M"},{nombre:"Roque", sexo: "M"},{nombre:"Leandro", sexo: "M"},{nombre:"Paulino", sexo: "M"},{nombre:"Juan", sexo: "M"},{nombre:"Aránzazu", sexo: "F"},{nombre:"Teófilo", sexo: "M"},{nombre:"Natividad", sexo: "F"},{nombre:"Demetrio", sexo: "M"},{nombre:"Lino", sexo: "M"},{nombre:"Ibán", sexo: "M"},{nombre:"Natalio", sexo: "M"},{nombre:"Rafa", sexo: "M"},{nombre:"Amaro", sexo: "F"},{nombre:"Marcos", sexo: "M"},{nombre:"Socorro", sexo: "F"},{nombre:"Itziar", sexo: "F"},{nombre:"Salomón", sexo: "M"},{nombre:"Amador", sexo: "M"},{nombre:"Albert", sexo: "M"},{nombre:"Fabricio", sexo: "M"},{nombre:"Plácido", sexo: "M"},{nombre:"Gaspar", sexo: "M"},{nombre:"Natalia", sexo: "F"},{nombre:"Socorro", sexo: "F"},{nombre:"Omar", sexo: "M"},{nombre:"Elvira", sexo: "F"},{nombre:"Rosalina", sexo: "F"},{nombre:"Juan", sexo: "M"},{nombre:"Úrsula", sexo: "F"},{nombre:"Aurelia", sexo: "F"},{nombre:"Nieves", sexo: "F"},{nombre:"Wilfredo", sexo: "M"},{nombre:"Diego", sexo: "M"},{nombre:"Perla", sexo: "F"},{nombre:"Aníbal", sexo: "M"},{nombre:"Benjamín", sexo: "M"},{nombre:"Jacinto", sexo: "M"},{nombre:"Rosa", sexo: "F"},{nombre:"Anabel", sexo: "F"},{nombre:"Elodia", sexo: "F"},{nombre:"Nicolasa", sexo: "F"},{nombre:"Agustina", sexo: "F"},{nombre:"Marina", sexo: "F"},{nombre:"Bautista", sexo: "F"},{nombre:"Marita", sexo: "F"},{nombre:"Gabino", sexo: "m"},{nombre:"Manuelita", sexo: "F"}];
    return nombres[getRandomNumberBetween(0,nombres.length-1)];
}

/**
 * Devuelve una profesión al azar
 * @returns {string}
 */
 function getProfesionRandom(){
    const profesiones = ["Abogado","Administrador","Antropólogo","Archivólogo","Arqueólogo","Arquitecto","Bibliotecólogo","Biólogo","Botánico","Científicos","Computista","Contador","Ecólogo","Economista","Electricista","Enfermero","Farmacólogo","Filólogo","Filósofo","Físico","Geógrafo","Historiador","Informático","Ingeniero","Lingüista","Matemático","Médico cirujano","Músico","Paleontólogo","Paramédico","Periodista","Politólogo","Profesor","Psicoanalista","Psicólogo","Químico","Radiólogo","Secretaria","Sociólogo","Técnico de sonido","Técnico en turismo","Terapeuta","Actor / Actriz.","Agricultor","Animador","Artesano","Barbero","Barrendero","Cajero","Cerrajero","Chofer o conductor","Cocinero","Deshollinador","Editor","Electricista","Escritor","Escultor","Exterminador","Fontanero o plomero","Frutero","Ganadero","Herrero","Impresor","Lavandero","Lechero","Leñador","Locutor","Mecánico","Obrero","Panadero","Peletero","Pintor de brocha gorda","Pintor","Policía","Repartidor","Sastre","Soldador","Tornero","Vendedor","Vigilante"];
    return profesiones[getRandomNumberBetween(0,profesiones.length-1)];
}


