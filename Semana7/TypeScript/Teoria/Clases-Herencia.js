var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
    return Vehiculo;
}());
// CLASE QUE HEREDARA
var Camioneta = /** @class */ (function (_super) {
    __extends(Camioneta, _super);
    function Camioneta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Camioneta.prototype.getpickup = function () {
        return this._pickup;
    };
    Camioneta.prototype.setpickup = function (v) {
        this._pickup = v;
    };
    return Camioneta;
}(Vehiculo));
// PRINCIPAL
var miCamioneta = new Camioneta("Daniel", 14000, "Verde", "Picanto", "KIA");
miCamioneta.setpropietario("ISaac");
miCamioneta.setpickup(true);
console.log(miCamioneta);
