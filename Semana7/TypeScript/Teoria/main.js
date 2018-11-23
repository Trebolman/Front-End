var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// import {Vehiculo} from "./ClaseVehiculo";
// Creacion de funcion decoradora
function decorador(palabra) {
    return function (target) {
        target.prototype.decorar = function () {
            console.log("Color: " + palabra);
        }; // prototype es como elegir la estructura de una clase
    };
}
// decorando
var Main = /** @class */ (function () {
    function Main() {
        // console.log("Hola Mundo");
        this.nombre = "Daniel";
        this.apellido = "Cabana";
        console.log("Hola nariz de bola");
    }
    // Metodos
    Main.prototype.getNombreCompleto = function () {
        return this.nombre + this.apellido;
    };
    Main = __decorate([
        decorador("Verde")
    ], Main);
    return Main;
}());
var objMain = new Main();
objMain.decorar();
// let objVehiculo = new Vehiculo("Daniele",15000,"Verde","Kia","Toyota");
// console.log(objVehiculo);
