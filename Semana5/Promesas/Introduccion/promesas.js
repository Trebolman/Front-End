function prenderCoche(){
    // creacion de promesa 1
    var promesa1 = new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("exitoso prendido"); //porcion de codigo asincrono
        },2000);    
    });
    return promesa1; //Devuelve la ejecucion de una promesa
}

function acelerarCoche(){
    // creacion de promesa 1
    var promesa1 = new Promise(function(resolve,reject){
        setTimeout(function(){
            reject("exitoso acelerado"); //porcion de codigo asincrono
        },500);    
    });
    return promesa1; //Devuelve la ejecucion de una promesa
}

prenderCoche().then(function(valor){ //para que then respete a la siguiente promesa, necesita retornar a dicha promesa
    console.log("Resolve: "+valor);
    return acelerarCoche();
},function(valor){
    console.log("Reject: "+valor);
}).then(function(valor){
    console.log("Resolve: "+valor);
},(valor)=>{
    console.log("Reject: "+valor);
});
//promesa.then() ejecuta dos funciones anonimas, uno para el resolve y otro para el reject
// acelerarCoche();
// avanzarCoche();
// una promesas es esperar que algunas funciones se cumplan ants de su ejecucion.
// para respetar el orden, usualmente de ejecucion de funciones. 