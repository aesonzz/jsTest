const BankApiCall = class {
  constructor(){};

  /**
   * Obtiene la información que hay en el localstorage asociada a un usuario.
   * @param {String} userName 
   * @returns {any} userData
   */
  getDataFromLocalStorage(userName){
    if(localStorage.getItem(userName)){
      return JSON.parse(atob(localStorage.getItem(userName)));
    }else{
      return null;
    }
  }

  /**
   * Almacena en el localStorage la información asociada a un usuario.
   * @param {any} data 
   */
  saveDataToLocalStorage(data){
    localStorage.setItem(data.usuario.nombre, btoa(JSON.stringify(data)))
  }

  /**
   * Realiza el login y devuelve un token asociado al usuario.
   * Si el usuario existe devuelve el token asociado a dicho usuario.
   * Si el usuario no existe lo crea y devuelve el token asociado a dicho usuario.
   * @param {String} userName 
   * @returns {Promise<String>} Promise token
   */
  banklogin(userName) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          let data = this.getDataFromLocalStorage(userName);
          if(data){
            resolve(btoa(JSON.stringify(data.usuario)));
          }else{
            let usuario = {
                nombre: userName,
                profesion: getProfesionRandom(),
                edad: getRandomNumberBetween(18,45),
                dni: getRandomDNI()
            }
            let cuenta = {
                saldo: getRandomNumberBetween(0,2000),
                nCuenta: fillStringWithZerosOnLeft(getRandomNumberBetween(0,9999999999),10)
            }
            let ultimosMovimientos = [];
            this.saveDataToLocalStorage({
              usuario: usuario,
              cuenta: cuenta,
              ultimosMovimientos: ultimosMovimientos
            })
            resolve(
              btoa(JSON.stringify(usuario))
            );
          }
        }, getRandomNumberBetween(500,3000));
      });
  }

  /**
   * Devuelve los datos asociados a un usuario.
   * @param {String} token 
   * @returns {Promise<any>} Promise userData
   */
  getDatosUsuario(token){
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let user = JSON.parse(atob(token));
        let data = this.getDataFromLocalStorage(user.nombre);
        if(data){
            resolve(data.usuario);
        }else{
            reject('Usuario no registrado');
        }
      }, getRandomNumberBetween(500,3000));
    });
  }

  /**
   * Devuelve la cuenta corriente asociada a un usuario.
   * @param {String} token 
   * @returns {Promise<any>} Promise cuentaCorrienteUsuario
   */
  getCuentaCorrienteUsuario(token){
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          let user = JSON.parse(atob(token));
          let data = this.getDataFromLocalStorage(user.nombre);
          if(data){
              resolve(data.cuenta);
          }else{
              reject('Usuario no registrado');
          }
        }, getRandomNumberBetween(500,3000));
      });
  }

  /**
   * Devuelve los últimos movimientos asociados a un usuario. 
   * @param {String} token 
   * @returns {Promise<any>} Promise ultimosMovimientoUsuario
   */
  getUltimosMovimientos(token){
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          let user = JSON.parse(atob(token));
          let data = this.getDataFromLocalStorage(user.nombre);
          if(data){
              resolve(data.ultimosMovimientos);
          }else{
              reject('Usuario no registrado');
          }
        }, getRandomNumberBetween(500,3000));
      });
  }

  /**
   * Ingresa una cierta cantidad de dinero pasada como parámetro en la cuenta asociada al usuario.
   * @param {String} token 
   * @param {Number} cantidad 
   * @returns {Promise<String>} Promise resultadoOperacion
   */
  ingresarDinero(token, cantidad){
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          let user = JSON.parse(atob(token));
          let data = this.getDataFromLocalStorage(user.nombre);
          if(data){
              data.cuenta.saldo += Math.abs(cantidad); 
              data.ultimosMovimientos.push({
                  fecha: new Date(),
                  nCuenta: data.cuenta.nCuenta,
                  operacion: 'ingreso',
                  cantidad: cantidad,
                  saldoEnCuenta: data.cuenta.saldo
              });
              this.saveDataToLocalStorage(data);
              resolve('Operación realizada con éxito.');
          }else{
              reject('Usuario no registrado');
          }
        }, getRandomNumberBetween(500,3000));
      });
  }

  /**
   * Retira una cierta cantidad de dinero pasada como parámetro en la cuenta asociada al usuario.
   * @param {String} token 
   * @param {Number} cantidad 
   * @returns {Promise<String>} Promise resultadoOperacion
   */
  retirarDinero(token, cantidad){
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          let user = JSON.parse(atob(token));
          let data = this.getDataFromLocalStorage(user.nombre);
          if(data){
            cantidad = Math.abs(cantidad);
            if(data.cuenta.saldo - cantidad >= 0){
                data.cuenta.saldo -= cantidad; 
                data.ultimosMovimientos.push({
                    fecha: new Date(),
                    nCuenta: data.cuenta.nCuenta,
                    operacion: 'retirada',
                    cantidad: cantidad,
                    saldoEnCuenta: data.cuenta.saldo
                });
                this.saveDataToLocalStorage(data);
                resolve('Operación realizada con éxito.');
            }else{
                reject('Saldo insuficiente');
            }            
          }else{
              reject('Usuario no registrado');
          }
        }, getRandomNumberBetween(500,3000));
      });
  }
}