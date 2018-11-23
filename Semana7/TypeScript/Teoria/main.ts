// import {Vehiculo} from "./ClaseVehiculo";
// Creacion de funcion decoradora
function decorador(palabra:string){
    return function(target:Function){
        target.prototype.decorar = function():void{
            console.log("Decorador-: " + palabra);
        } // prototype es como elegir la estructura de una clase
    }
}

// decorando
@decorador("Verde")
class Main{
    // console.log("Hola Mundo");
    public nombre:string = "Daniel";
    public apellido:string = "Cabana";
    constructor(){
        console.log("Hola nariz de bola");
    }
    // Metodos
    public getNombreCompleto(){
        return this.nombre + this.apellido;
    }
}

let objMain = new Main();
objMain.decorar();
// let objVehiculo = new Vehiculo("Daniele",15000,"Verde","Kia","Toyota");
// console.log(objVehiculo);