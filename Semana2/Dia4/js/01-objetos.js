// creacion de un objeto
var persona = {
    nombre: "Danielito",
    edad:   40,
    apellidos: "Cabana",
    gustos: { //Objeto
        comida: "Aji de gallina",
        color:  "Morado",
        videojuego: "Bomberman"
    },
    getNombre : function(){
        // retornando
        return  this.nombre; //this significa que es la misma variable
    },
    setNombre: function(nombre){
        this.nombre = nombre; //
    }
};

document.write(`<h1>Nombre Inicial: ${persona.getNombre()}</h1>`);
persona.setNombre("Isaac");
document.write(`<h1>Nombre Final: ${persona.getNombre()}</h1>`);
document.write(`<h1>Apellido: ${persona["apellidos"]}</h1>`);
document.write(`<h1>Curso favorito: ${persona.gustos.videojuego}</h1>`);