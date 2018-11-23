//Programa para sacar una raiz cuadrada sin usar Math.sqrt(); v2
function getRaizCuadrada(dato:number):number{
    var contador:number = 1;
    do{
        contador++;
        if(dato%contador == 0){
            var numero:number = dato/contador;
            // var array:number[] = [];
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