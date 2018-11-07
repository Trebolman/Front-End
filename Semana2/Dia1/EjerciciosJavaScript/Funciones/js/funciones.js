//Crear menu para que el usuario elija la operacion e introduzca dos numeros a operar. 

//Variables globales
var n1 = parseInt(prompt('Ingrese numero 1: '));
var n2 = parseInt(prompt('Ingrese numero 2: '));
var res = 0;
var verif = true;
var menu = " --- MENU --- \n";
menu += "1) 's' Sumar\n";
menu = menu + "2) 'r' Restar\n";
menu = menu + "3) 'm' Multiplicar\n";
menu = menu + "4) 'd' Dividir\n";
menu = menu + "--------------\n";
menu = menu + "Elija operacion a realizar";

//Funciones
function sumar(valor1,valor2){
    return valor1 + valor2;
}
function restar(valor1,valor2){
    return valor1 - valor2;
}
function multiplicar(valor1,valor2){
    return valor1 * valor2;
}
function dividir(valor1,valor2){
    return valor1 / valor2;
}

do{
      var opcion = prompt(menu);

        switch(opcion){
            case 's':
                res = sumar(n1, n2);
                opcion = 'Suma';
                verif = true;
                break;
                
            case 'r':
                res = restar(n1, n2);
                opcion = 'Resta';
                verif = true;
                break;
                
            case 'm':
                res = multiplicar(n1, n2);
                opcion = 'Multiplicación';
                verif = true;
                break;
            
            case 'd':
                res = dividir(n1, n2);
                opcion = 'División';
                verif = true;
                break;
            
            default:
                alert('Ingrese opción válida');
                verif = false;
        }
      }
while(verif == false);

console.log(opcion);
console.log(res);