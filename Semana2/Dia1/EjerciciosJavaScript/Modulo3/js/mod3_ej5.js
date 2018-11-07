//capitulo 3 - ejercicio 5
var nombre1 = prompt('Ingrese nombre persona 1: ');
var edad1 = parseInt(prompt('Ingrese edad persona 1: '));

var nombre2 = prompt('Ingrese nombre persona 2: ');
var edad2 = parseInt(prompt('Ingrese edad persona 2: '));

var nombre3 = prompt('Ingrese nombre persona 3: ');
var edad3 = parseInt(prompt('Ingrese edad persona 3: '));

var menorEdad = 0;
var nombre = '';

if((edad1 < edad2) && (edad1 < edad3)){
    menorEdad = edad1;
    nombre = nombre1;
    }else{
        if((edad2 < edad1)&&(edad2 < edad3)){
            menorEdad = edad2;
            nombre = nombre2;
        }else{
            menorEdad = edad3;
            nombre = nombre3;
        } 
    }
console.log('La persona de menor edad es: ', nombre + ' con: ' + menorEdad);