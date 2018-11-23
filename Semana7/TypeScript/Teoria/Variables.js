// TIPOS DE DATOS
// Cadenas
var miCadena = "Mi nombre es Danielito";
miCadena = "Mi nombre es Isaac";
// Tipos de datos Number
var miNumero = 7;
console.log(miNumero);
miNumero = 5;
console.log(miNumero);
// Booleano
var miBoolean = true;
// Cualquier dato
var miMultidato = "Mi bella Oshin";
console.log(miMultidato);
miMultidato = 5;
console.log(miMultidato);
// Arreglos
// 1ra forma
var lenguajes = ["Html", "JavaScript", "Python"];
console.log(lenguajes);
console.log(lenguajes[2]);
var numeros = [21, 12, 12, 12];
var letras = [];
console.log(letras);
var polyDato = ["Daniel", 28, true];
console.log(polyDato);
for (var i = 0; i < lenguajes.length; i++) {
    var element = lenguajes[i];
    console.log(element);
}
// let nombres:List<string> = 
// Variables de tipo multidato personalizados
var biDato; //Solo acepta datos de tipo numero y cadenas
biDato = "Daniel";
console.log(biDato);
// que acepta numeros y letras
var miAlfa = 45;
var miPolyData = ["Daniel", 23, "Hunter"];
console.log(miPolyData);
// let vs var
var n1 = 67;
if (n1 == 67) {
    var _n2 = 200; // Es una variable global
    var n2 = 100; // Es solo una variable local
}
console.log(_n2);
// console.log(n2);
