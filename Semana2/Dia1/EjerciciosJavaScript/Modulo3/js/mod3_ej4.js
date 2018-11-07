//capitulo 3 - ejercicio 4
var numHoras = parseInt(prompt('Ingrese numero de horas: '));

if(numHoras < 2){
    console.log('El costo es: ',numHoras*5);
}

if((numHoras > 3)&&(numHoras < 6)){
    console.log('El costo es: ',numHoras*4);
}

if((numHoras > 5)&&(numHoras < 11)){
    console.log('El costo es: ',numHoras*3);
}

if(numHoras > 10){
    console.log('El costo es: ',numHoras*2);
}