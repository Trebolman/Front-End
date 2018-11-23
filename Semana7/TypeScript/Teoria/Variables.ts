// TIPOS DE DATOS
// Cadenas
let miCadena:string = "Mi nombre es Danielito";
miCadena = "Mi nombre es Isaac";

// Tipos de datos Number
let miNumero:number = 7;
console.log(miNumero);
miNumero = 5;
console.log(miNumero);

// Booleano
let miBoolean:boolean = true;

// Cualquier dato
let miMultidato:any = "Mi bella Oshin";
console.log(miMultidato);
miMultidato = 5;
console.log(miMultidato);

// Arreglos
// 1ra forma
let lenguajes:Array<string> = ["Html", "JavaScript", "Python"];
console.log(lenguajes);
console.log(lenguajes[2]);

let numeros:number[] = [21,12,12,12];
let letras:string[] = [];
console.log(letras);

let polyDato:any[] = ["Daniel",28,true];
console.log(polyDato);

for (let i = 0; i < lenguajes.length; i++) {
    const element = lenguajes[i];
    console.log(element);
}
// let nombres:List<string> = 

// Variables de tipo multidato personalizados
let biDato:number|string; //Solo acepta datos de tipo numero y cadenas
biDato = "Daniel";
console.log(biDato);

// Variables multidato con pseudonimo
type alfanumerico = string|number; //definicion de un nuevo tipo de dato
                                    // que acepta numeros y letras
let miAlfa:alfanumerico = 45;
let miPolyData:alfanumerico[] = ["Daniel", 23, "Hunter"];
console.log(miPolyData);

// let vs var
var n1:number = 67; 
if(n1 == 67){
    var _n2:number = 200; // Es una variable global
    let n2:number = 100; // Es solo una variable local
}
console.log(_n2);
// console.log(n2);

