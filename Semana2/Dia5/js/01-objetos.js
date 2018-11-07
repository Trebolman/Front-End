function Alumno(){
    this.periodo = 0;
    this.centroDeEstudio = "Sin especificar";
    this.pagado = false;
    this.agregarPeriodo = function(dato){
        this.periodo = dato;
    }
}

function Persona(name,lastName,age){
    this.nombre = name;
    this.apellido = lastName;
    this.edad = age;
    this.alumnoPrimaria = new Alumno();
}

var Pablito = new Alumno();

console.log(Pablito);

var Pedrito = new Persona("Pedrito","Alvarez",12);
console.log(Pedrito);

// Crear un objeto llamadao vehiculo
