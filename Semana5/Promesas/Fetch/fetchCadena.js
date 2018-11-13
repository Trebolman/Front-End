function getUsers () {
	return fetch("https://reqres.in/api/users");
}

function getRose () {
	return fetch("https://reqres.in/api/unknown/2");
}

getUsers()  .then(function(datosRecibidos1){
					return datosRecibidos1.json();
                })
            .then(function(datos){
                    console.log("datos 1");
					console.log(datos);
					return getRose();
                })
            .then(function(datosRecibidos1){
                return datosRecibidos1.json();
                })
		    .then(function(datosRecibidos2){
			   		console.log("datos 2");
					console.log(datosRecibidos2);		
				},
				function(){
					alert("NO HAY DATOS LLAMAR AL REJECT");
				});
		   