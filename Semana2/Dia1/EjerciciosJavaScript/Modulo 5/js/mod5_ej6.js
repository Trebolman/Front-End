/*var nombres = [];
var edades = [];
var edadMayor = 0;
var numeroAlumnos = 4;

for(var i = 0; i < numeroAlumnos; i++){
    nombres[i] = prompt('Ingrese nombre ' + i + ': ');
    
    for(var i = 0; i < numeroAlumnos; i++){
        edades[i] = parseInt(prompt('Ingrese edad ' + i + ': '));
    }
}


edadMayor = Math.max(...edades);

console.log(nombres);
console.log(edades);
console.log(edadMayor);*/

var indices = [];
/*var array = ['a', 'b', 'a', 'c', 'a', 'd'];*/
var array = [];
for(var i=0;i<3;i++){
    array[i] = parseInt(prompt('Ingrese numero de array: '));
}
var element = parseInt(prompt('Ingrese numero a buscar del array: '));;
var idx = array.indexOf(element);
while (idx != -1) {
  indices.push(idx);
  idx = array.indexOf(element, idx + 1);
}

console.log(array);
console.log(indices);
// [0, 2, 4]