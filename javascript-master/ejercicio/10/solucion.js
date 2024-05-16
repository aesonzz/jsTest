let token = null;
let bankApiCall = new BankApiCall();

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

async function clearLocalStorage(){
    localStorage.clear();
    document.getElementById("datosUsuario").innerHTML = "";
    document.getElementById("cuentaCorrienteUsuario").innerHTML = "";
    document.getElementById("movimientosUsuario").innerHTML = "";
}

async function logout(){
    token = null;
    clearLocalStorage();
}

async function showData(){
    await getInfoUsuario();
    await getCuentaUsuario();
    await getMovimientosUsuario();
}

async function getInfoUsuario(){
    try {
        const userData = await bankApiCall.getDatosUsuario(token);
        document.getElementById("datosUsuario").innerHTML = `
            <p>Nombre: ${userData.nombre}</p>
            <p>Profesión: ${userData.profesion}</p>
            <p>Edad: ${userData.edad}</p>
            <p>DNI: ${userData.dni}</p>
        `;
    } catch (error) {
        alert(error);
    }
}

async function getCuentaUsuario(){
    try {
        const cuentaData = await bankApiCall.getCuentaCorrienteUsuario(token);
        document.getElementById("cuentaCorrienteUsuario").innerHTML = `
            <p>Número de cuenta: ${cuentaData.nCuenta}</p>
            <p>Saldo: ${cuentaData.saldo}</p>
        `;
    } catch (error) {
        alert(error);
    }
}

async function getMovimientosUsuario(){
    try {
        const movimientosData = await bankApiCall.getUltimosMovimientos(token);
        const movimientosList = movimientosData.map(movimiento => `
            <p>Fecha: ${movimiento.fecha}</p>
            <p>Operación: ${movimiento.operacion}</p>
            <p>Cantidad: ${movimiento.cantidad}</p>
            <p>Saldo en cuenta: ${movimiento.saldoEnCuenta}</p>
            <hr>
        `).join("");
        document.getElementById("movimientosUsuario").innerHTML = movimientosList;
    } catch (error) {
        alert(error);
    }
}

async function ingresarDinero(){
    const cantidad = document.getElementById("formApartado1Operacion").elements["cantidad"].value;
    try {
        await bankApiCall.ingresarDinero(token, cantidad);
        showData();
    } catch (error) {
        alert(error);
    }
}

async function retirarDinero(){
    const cantidad = document.getElementById("formApartado1Operacion").elements["cantidad"].value;
    try {
        await bankApiCall.retirarDinero(token, cantidad);
        showData();
    } catch (error) {
        alert(error);
    }
}

main();
