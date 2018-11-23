function getNumero(numero:number):void{
    console.log(numero);
}
function getArray(dato:any = 0):any[]{
    let arreglo:any[] = [dato];
    return arreglo;
}

let arreglo:any = [];
let numero:number = 77;
getNumero(numero);
console.log(getArray("Danielito"));

//Programa para sacar una raiz cuadrada sin usar Math.sqrt();
function getRaizCuadrada(dato:number):number{
    var contador:number = 1;
    do{
        contador++;
        if(dato%contador == 0){
            var numero:number = dato/contador;
            var numComparacion:number = 0;
            for (let i = 0; i < numero; i++) {
                numComparacion = numComparacion + numero;
            }
            if(numComparacion == dato){break;}
        }
    }
    while(contador < 100);
    return numero;
}
console.log("La raiz cuadrada es: "+ getRaizCuadrada(16));
