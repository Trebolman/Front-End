// Ingreso dos matrices y las resto.
var i, j;
var M = parseInt(prompt('Ingrese dimensión M: '));
var N = parseInt(prompt('Ingrese dimensión N: '));

var matrizA = new Array(M);
var fin = false;
/*var esDiagonal = false;*/

alert('Ingresamos valores para la matriz A');
for (i = 0; i < M; i++)
{
    matrizA[i] = new Array(N);
    for (j = 0; j < N; j++)
    {
        matrizA[i][j] = parseInt(prompt('Ingrese el termino '+i+','+j+' : '));
        if(i !== j){
            if(matrizA[i][j]!== 0){
                fin = true;
            }else{
                continue;
            }
        }
    }
    if(fin){
        break;
    }
}
console.log(matrizA); 
alert('No es diagonal');
/*alert('La matriz no es diagonal');*/

  