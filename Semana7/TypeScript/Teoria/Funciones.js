function getNumero(numero) {
    console.log(numero);
}
function getArray(dato) {
    if (dato === void 0) { dato = 0; }
    var arreglo = [dato];
    return arreglo;
}
var arreglo = [];
var numero = 77;
getNumero(numero);
console.log(getArray("Danielito"));
//Programa para sacar una raiz cuadrada sin usar Math.sqrt();
function getRaizCuadrada(dato) {
    var contador = 1;
    do {
        contador++;
        if (dato % contador == 0) {
            var numero = dato / contador;
            var numComparacion = 0;
            for (var i = 0; i < numero; i++) {
                numComparacion = numComparacion + numero;
            }
            if (numComparacion == dato) {
                break;
            }
        }
    } while (contador < 100);
    return numero;
}
console.log("La raiz cuadrada es: " + getRaizCuadrada(16));
