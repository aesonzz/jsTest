let testPosition = 0;

/**
 * TODO: Completar los if de esta función para realizar la comprobación que se indica en los comentarios sobre el valor pasado como parámetro
 */
function checkConditions(value){
    let textToReturn = '';
    //value diferente de null y undefined
    if(value){
        textToReturn += '|noNull|';
    }
    //value es numérico
    if(value){
        textToReturn += '|numerico|';
    }
    //value es un número negativo o igual que cero
    if(value){
        textToReturn += '|numNegativoOIgualQueCero|';
    }
    //value es un número par
    if(value){
        textToReturn += '|numeroPar|';
    }
    //value es númerico e igual a 5
    if(value){
        textToReturn += '|igualA5|';
    }

    return textToReturn;
}

/**
 * Función auxiliar para añadir texto al resultado del test
 */
function auxTextTest(text, ok){
    testPosition++;
    if(ok){
        return text+='<br/>Test '+testPosition+' => OK';
    }else{
        return text+='<br/>Test '+testPosition+' => KO';   
    }
}

/**
 * Función de testeo para comprobar las soluciones
 */
 function test(){
    let result = '';
    //Test 1
    result = auxTextTest(result, checkConditions(5) === '|noNull||numerico||igualA5|');
    //Test 2
    result = auxTextTest(result, checkConditions(0) === '|noNull||numerico||numNegativoOIgualQueCero||numeroPar|');
    //Test 3
    result = auxTextTest(result, checkConditions('0') === '|noNull|');
    //Test 4
    result = auxTextTest(result, checkConditions('20') === '|noNull|');
    //Test 5
    result = auxTextTest(result, checkConditions('5') === '|noNull|');
    //Test 6
    result = auxTextTest(result, checkConditions() === '');
    //Test 7
    result = auxTextTest(result, checkConditions(null) === '');
    //Test 8
    result = auxTextTest(result, checkConditions(undefined) === '');
    //TODO: Sientete libre de hacer tus propias pruebas. 
    
    testPosition = 0;
    document.getElementById("testResult").innerHTML = result;
 }