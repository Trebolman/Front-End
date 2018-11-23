export class Institucion{
    // public nombre:string;
    // public direccion:string;
    // public ruc:string;
    // public age:number;
    // constructor(nombre:string, direccion:string, ruc:string, age:number){
        //     this.nombre = nombre;
        //     this.direccion = direccion;
        //     this.ruc = ruc;
        //     this.age = age;
        // }

    // Otra forma de crear un constructor
    constructor(
        public nombre:string,
        public direccion:string,
        public ruc:string,
        public age:number,    
    ){}
}