// CREACION DE CLASES
class Vehiculo{
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
}

// CLASE QUE HEREDARA
class Camioneta extends Vehiculo{
    private _pickup : boolean;
    public getpickup() : boolean {
        return this._pickup;
    }
    public setpickup(v : boolean) {
        this._pickup = v;
    }
    
}

// PRINCIPAL
let miCamioneta = new Camioneta("Daniel",14000,"Verde","Picanto","KIA");
miCamioneta.setpropietario("ISaac");
miCamioneta.setpickup(true);
console.log(miCamioneta);