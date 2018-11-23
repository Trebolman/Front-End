// CREACION DE CLASES
var Vehiculo = /** @class */ (function () {
    // constructor
    function Vehiculo(propietario, precio, color, modelo, marca) {
        this._propietario = propietario;
        this.precio = precio;
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
    }
    // metodos
    Vehiculo.prototype.getModelo = function () {
        return this.modelo;
    };
    Vehiculo.prototype.setModelo = function (nuevoModelo) {
        this.modelo = nuevoModelo;
    };
    Vehiculo.prototype.getpropietario = function () {
        return this._propietario;
    };
    Vehiculo.prototype.setpropietario = function (v) {
        this._propietario = v;
    };
    Vehiculo.prototype.getMarcaModelo = function () {
        return this.marca + "-" + this.modelo;
    };
    return Vehiculo;
}());
var miCarro = new Vehiculo("Daniel", 15000, "Rojo", "Picanto", "KIA");
console.log(miCarro);
console.log(miCarro.getMarcaModelo());
