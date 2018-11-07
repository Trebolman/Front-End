//15/10/2018

var dia =   7;
var diaSemana =['Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo'];
var nombreDia = '';

if(dia>=1 && dia<=7){
    nombreDia = diaSemana[dia-1];
}
else{
    nombreDia = 'Dia no valido';
}
console.log(nombreDia);

//Switch case
var dia = 4;
switch(dia){
    case 1:
        console.log('Lunes');
        break;
    case 2:
        console.log('Martes');
        break;
}

var miArreglo= [1,2,3,4,5,6,7,8,9];
for(var i=0;i<9;i++){
    console.log(miArreglo[i]);
}

var i = 20;
while(i>1){
    
}