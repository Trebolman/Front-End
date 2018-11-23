//Programa para sacar una raiz cuadrada sin usar Math.sqrt();
//
function getRaizCuadrada(dato:number):number{
    var contador:number = 1;
    do{
        contador++;
        if(dato%contador == 0){
            var numero:number = dato/contador; 
            if(numero * numero == dato){break;}
        }
    }
    while(contador < 100);
    return numero;
}
console.log("La raiz cuadrada es: "+ getRaizCuadrada(4));