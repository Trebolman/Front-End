// el constructor es lo que inicializa el objeto
// var construirPersona = function(newNombre="Sin definir",newEdad="Sin definir",newApellido="Sin definir"){
    
//     var persona = {
//         nombre: newNombre,
//         edad:   newEdad,
//         apellidos: newApellido,
//         gustos: { //Objeto
//             comida: "Aji de gallina",
//             color:  "Morado",
//             videojuego: "Bomberman"
//         },
//         getNombre : function(){
//             // retornando
//             return  this.nombre; //this significa que es la misma variable
//         },
//         setNombre: function(nombre){
//             this.nombre = nombre; //
//         }
//     };
//     return persona;
// }

// Creacion de instancias a partir de una plantilla (objeto)
// var persona1 = construirPersona();
// var persona2 = construirPersona();
// persona2.setNombre("Jorgito","18");
// persona1.setNombre("Daniel");
// console.log(persona1);
// console.log(persona2);
// persona2.nombre = "Isaquito";
// document.write(persona1.nombre);
// document.write("<br>");
// document.write(persona2.nombre);

// encapsulamiento
// debugger;
// var construirPersona = function(newNombre="Sin definir",newEdad="Sin definir",newApellido="Sin definir"){
//     var nombre = "Juan";
//     var persona = {
//         // nombre: newNombre,
//         edad:   newEdad,
//         apellidos: newApellido,
//         gustos: { //Objeto
//             comida: "Aji de gallina",
//             color:  "Morado",
//             videojuego: "Bomberman"
//         },
//         getNombre : function(){
//             // retornando
//             return  nombre;         },
//         setNombre: function(nuevoNombre){
//             nombre = nuevoNombre; //
//         }
//     };
//     return persona;
// }

// var persona1 = construirPersona();
// persona1.setNombre("Mario");
// console.log(persona1.getNombre());

// debugger;
var nombre = "Juan";
function persona(){
    // nombre: newNombre,
    this.nombre = "Sin definir";
    this.edad = "Sin definir";
    this.apellido = "Sin definir";
    // gustos: { //Objeto
    //     comida: "Aji de gallina",
    //     color:  "Morado",
    //     videojuego: "Bomberman"
    // },
    this.getNombre = function(){
        // retornando
        return this.nombre;
    }
    this.setNombre = function(nuevoNombre){
        this.nombre = nuevoNombre; //
    }
}
var persona1 = new persona();
persona1.setNombre("Daniel");

document.write(persona1.getNombre());
document.write("<br>");
console.log(persona1);