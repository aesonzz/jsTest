let token = null;
let bankApiCall = null;

function main(){
    bankApiCall = new BankApiCall();
}

async function login(){
    try{
        const value = document.getElementById("formApartado1Login").elements["userName"].value;
        if(value){
            token = await bankApiCall.banklogin(value);
            showData();
        }else{
            alert('Debe escribir un nombre de usuario.');
        }
    }catch(error){
        alert(error);
    } 
}

function clearLocalStorage(){
    localStorage.clear();
    //TODO: vaciar contenido de las diferentes secciones
}

function logout(){
    token = null;
    //TODO: debes borrar el contenido de las secciones datosUsuario, cuentaCorrienteUsuario y movimientosUsuario.
}

function showData(){
    //TOOD invocar funciones para mostrar toda la información necesaria dentro de las diferenetes secciones.
}

async function getInfoUsuario(){
    //TODO: añadir código necesario 
}

async function getCuentaUsuario(){
    //TODO: añadir código necesario 
}

async function getMovimientosUsuario(){
    //TODO: añadir código necesario
}

async function ingresarDinero(){
    //TODO: añadir código necesario => además de invocar la función correspondiente al apiCall deberás refrescar los datos 
    //      que se visualizan en la sección Cuenta corriente y Movimientos
}

async function retirarDinero(){
    //TODO: añadir código necesario => además de invocar la función correspondiente al apiCall deberás refrescar los datos 
    //      que se visualizan en la sección Cuenta corriente y Movimientos
}

main();