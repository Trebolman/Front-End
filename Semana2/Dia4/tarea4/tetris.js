// var miObjeto = new Object(),
//     cadena = "miCadena",
//     aleatorio = Math.random(),
//     objeto = new Object();

// miObjeto.type                 = "Sintaxis con punto";
// miObjeto["Fecha de creación"] = "Cadena con espacios y acento";
// miObjeto[cadena]              = "String value";
// miObjeto[aleatorio]           = "Número Aleatorio";
// miObjeto[objeto]              = "Objeto";
// miObjeto[""]                  = "Incluso una cadena vacía";

// console.log(miObjeto);


// var nombreObjeto = prompt("Ingrese nombre del objeto: ");
// var objeto = new Object();
// var nroPropiedades = parseInt(prompt("Ingrese numero de atributos a añadir"));
// for(var i=0;i < nroPropiedades;i++){
//     var propiedad = prompt("Ingrese propiedad: "+i);
//     objeto.propiedad = prompt("Ingrese valor de propiedad: "+i);
// }

var persona = new Object();
persona.nombre = "Daniel";
persona.apellido = "Cabana";
persona.edad = 28;
function mostrarPropiedades(objeto, nombreObjeto) {
    var resultado = "";
    for (var i in objeto) {
      if (objeto.hasOwnProperty(i)) {
          resultado += `${nombreObjeto}.${i} = ${objeto[i]} <br>`;
      }
    }
    return resultado;
}

document.write(mostrarPropiedades(persona,"individuo"));
console.log(persona);