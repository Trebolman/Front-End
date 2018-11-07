
if (typeof (Storage) != 'undefined') {
	console.log("Si tiene localStorage");
} else {
	console.log("No tiene localStorage");
}

// localStorage.setItem("curso", "Front End");

// console.log(localStorage.getItem("curso"));

// var nombres = ["Daniel","Isaac","Blablabla"];
// var JSONnombres = JSON.stringify(nombres);
// console.log(nombres);
// console.log(JSONnombres);
// console.log(typeof(nombres));
// console.log(typeof(JSONnombres));

// var objetoPersona = {
// 	nombre: "Danielito",
// 	apellido: "Cabana",
// 	edad: 28
// }
// console.log(objetoPersona);
// console.log(JSON.stringify(objetoPersona));

// localStorage.setItem("objetoEjemplo",objetoPersona);

// console.log(localStorage.getItem("curso"));
	// document.write("<h2>" + localStorage.getItem("nombre") + "</h2>");

	var autos = [
				 {color : 'Verde', motor : '1500',marca : 'Chancho'},
				 {color : 'Amarillo',motor : '1900',marca : 'Hyundai'}
				];

	localStorage.setItem("objetos", JSON.stringify(autos));

	var autosJSON = JSON.parse(localStorage.getItem("objetos"));

	for (var i = 0; i < autosJSON.length; i++) {
		console.log(autosJSON[i].color);
	}
