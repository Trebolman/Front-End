var promesa = new Promise(function(resolve,reject){
    const bandera = 5;
    if(bandera == 5)
        resolve("Todo bien!");
    else
        reject(Error("Algo salio mal"));
});

promesa.then()