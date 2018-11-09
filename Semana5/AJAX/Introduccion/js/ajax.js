var miRequest = new XMLHttpRequest(); //Todo el resultado de una pagina se guarda en el objeto miRequest0
if(miRequest.readyState == 0){
    console.log("Se creó el XMLHTTP request, pero aun no se usó");
}
// miRequest.open("verboHTTP","URLdepagina");
// Cuando pido una pagina o clickeo hago una peticion "get"
//Al ser una definicion asincrona, por lo que no se puede controlar nada. 
//Por eso realizaremos un escuchador. El codigo se va a ejecutar tantas veces el estado cambie.
miRequest.onreadystatechange = function(){
    // console.log(miRequest.readyState);
    if(miRequest.readyState == 1){
        // console.log("1 Se invocó al metodo open");
        console.log(miRequest.status);
    }if(miRequest.readyState == 2){
        console.log("2 Se invocó al metodo send");
    }if(miRequest.readyState == 3){
        console.log("3 Se esta esperando una rta del servidor");
    }if(miRequest.readyState == 4){
        console.log("4 La operacion finalizó, se recibió una respuesta");
        console.log(JSON.parse(miRequest.responseText)[1].address.zipcode);
    }
};

miRequest.open("get","https://jsonplaceholder.typicode.com/users");
//Cualquier pagina que se pide por get, necesita que se envie algo
//Por eso no le enviaremos nada. 
miRequest.send(null);
