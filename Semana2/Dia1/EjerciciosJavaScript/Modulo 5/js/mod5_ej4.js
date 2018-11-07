// Ingreso dos matrices y las resto.
var i, j;
var M = parseInt(prompt('Ingrese dimensión M: '));
var N = parseInt(prompt('Ingrese dimensión N: '));

var matrizA = new Array(M);
var matrizB = new Array(M);

alert('Ingresamos valores para la matriz A');
for (i = 0; i < M; i++)
{
    matrizA[i] = new Array(N);

    for (j = 0; j < N; j++)
    {
        matrizA[i][j] = parseInt(prompt('Ingrese el termino '+i+','+j+' : '));
    }
}

alert('Ingresamos valores para la matriz B');
for (i = 0; i < M; i++)
{
    matrizB[i] = new Array(N);

    for (j = 0; j < N; j++)
    {
        matrizB[i][j] = parseInt(prompt('Ingrese el termino '+i+','+j+' : '));
    }
}

alert('Realizamos la operación A - B');
var resultado = [];
/*resultado = matrizA - matrizB;*/
for (i = 0; i < M; i++)
{
    resultado[i] = new Array(N);

    for (j = 0; j < N; j++)
    {
        resultado[i][j] = matrizA[i][j] - matrizB[i][j];
    }
}

console.log(matrizA);
console.log(matrizB);
console.log(resultado);