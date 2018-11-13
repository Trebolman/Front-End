function getUsers () {
	return new Promise(function(resolve,reject){
		// CODIGO ASINCRONO
		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function(){
			if (xhr.readyState == 3) {
				//cargando
			}
			if (xhr.readyState == 4 && xhr.status == 200)  {
				resolve(JSON.parse(xhr.responseText));
			}
			if (xhr.readyState == 4 && xhr.status == 404)  {
				reject();
			}
		};
		xhr.open("GET","https://reqres.in/api/users");
		xhr.send(null);
		// HACER ALGUNA VALIDACIÓN PARA LANZAR resolver

		// EN CASO CONTRARIO LANZA reject
	});
}

function getRose () {
	return new Promise(function(resolve,reject){
		// CODIGO ASINCRONO
		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function(){
			if (xhr.readyState == 3) {
				//cargando
			}
			if (xhr.readyState == 4 && xhr.status == 200)  {
				resolve(JSON.parse(xhr.responseText));
			}
			if (xhr.readyState == 4 && xhr.status == 404)  {
				reject();
			}
		};
		xhr.open("GET","https://reqres.in/api/unknown/2");
		xhr.send(null);
		// HACER ALGUNA VALIDACIÓN PARA LANZAR resolver

		// EN CASO CONTRARIO LANZA reject
	});
}

getUsers().then(function(datosRecibidos1){
					console.log("datos 1");
					console.log(datosRecibidos1);
					return getRose();
				},
				function(){
					alert("NO HAY DATOS LLAMAR AL REJECT");
				})
		   .then(
			   	function(datosRecibidos2){
			   		console.log("datos 2");
					console.log(datosRecibidos2);		
				},
				function(){
					alert("NO HAY DATOS LLAMAR AL REJECT");
				});
		   