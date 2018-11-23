// INTERFAZ 
/*
Interfaz es un contrato que no se puede cambiar.
Es una plantilla de lo que se tiene que implementar.
*/
// Definicion de una interface
interface iVehiculo{
    setModelo(nuevoModelo:string):void;
    getModelo():string;
    getMarcaModelo():string;
}

// CREACION DE CLASES
export class Vehiculo implements iVehiculo{
    public color:string;
    public precio:number;
    private modelo:string;
    private marca:string;
    private _propietario : string;

    // constructor
    constructor (propietario:string, precio:number, color:string, modelo:string, marca:string){
        this._propietario = propietario;
        this.precio = precio;
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
    }

    // metodos
    public getModelo():string{
        return this.modelo;
    }

    public setModelo(nuevoModelo:string):void{
        this.modelo = nuevoModelo;
    }
    
    public getpropietario() : string {
        return this._propietario;
    }
    public setpropietario(v : string) {
        this._propietario = v;
    }
    public getMarcaModelo():string{
        return this.marca + "-" + this.modelo;
    }
}

var miCarro = new Vehiculo("Daniel",15000,"Rojo","Picanto","KIA");
console.log(miCarro);
console.log(miCarro.getMarcaModelo());
