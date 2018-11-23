// CREACION DE CLASES
export class Vehiculo{
    public color:string;
    public precio:number;
    private modelo:string;
    private marca:string;
    private _propietario : string;

    // constructor
    constructor (prop:string, price:number, col:string, mod:string, marca:string){
        this._propietario = prop;
        this.precio = price;
        this.color = col;
        this.modelo = mod;
        this.marca = marca;
    }

    // metodos
    public setModelo(nuevoModelo:string):void{
        this.modelo = nuevoModelo;
    }
    
    public getpropietario() : string {
        return this._propietario;
    }
    public setpropietario(v : string) {
        this._propietario = v;
    }
}

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