"use strict";
exports.__esModule = true;
// CREACION DE CLASES
var Vehiculo = /** @class */ (function () {
    // constructor
    function Vehiculo(prop, price, col, mod, marca) {
        this._propietario = prop;
        this.precio = price;
        this.color = col;
        this.modelo = mod;
        this.marca = marca;
    }
    // metodos
    Vehiculo.prototype.setModelo = function (nuevoModelo) {
        this.modelo = nuevoModelo;
    };
    Vehiculo.prototype.getpropietario = function () {
        return this._propietario;
    };
    Vehiculo.prototype.setpropietario = function (v) {
        this._propietario = v;
    };
    return Vehiculo;
}());
exports.Vehiculo = Vehiculo;
var miCarro = new Vehiculo("Daniel", 15000, "Amarillo", "Camioneta", "Toyota Yaris");
console.log(miCarro);
// miCarro.color = "Rojo";
console.log(miCarro.color);
console.log(miCarro.getpropietario());
// console.log(miCarro.precio = 1555);
miCarro.setpropietario("Isaac");
// console.log(miCarro);
console.log(miCarro.getpropietario());
// 
