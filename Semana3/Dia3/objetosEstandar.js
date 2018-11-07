// La verdadera forma de crear un dato entero es
// var numero = new int[5];
// alert(numero); //5

// var texto = "Hola Mundo";
// var mensaje = "";
// var anterior = "";
// for (var f = 0; f < texto.length; f++) {
//     if (mensaje != "") {
//         anterior = texto[f – 1];
//         if (anterior != " " && texto[f] != " ") {
//             mensaje += ".";
//         }
//     }
//     mensaje += texto[f];
// }
// alert(mensaje);

// var fecha = new Date();
// document.write(`La fecha es ${fecha}<br>`);

// var fecha1 = new Date("24 Octubre 2018");
// document.write(`La fecha dos es: ${fecha1}<br>`);

// var fecha2 = new Date(2018, 09, 24, 12, 10, 50);
// document.write(`La fecha dos es: ${fecha2}<br>`);

// // var fecha2 = new Date(2018, 09, 24, 12, 10, 50);
// document.write(`La fecha dos es: ${fecha.getFullYear()}<br>`);
// fecha.setDate(10);
// document.write(`La fecha dos es: ${fecha}<br>`);

// var hoy = new Date(2018,10,7);
// console.log(typeof(hoy));
// hoy.toDateString();
// console.log(typeof(hoy));
// document.write(hoy);
// console.log(hoy);

// var numero = Math.floor(Math.random() * (10 - 5) + 5);
// console.log(numero);

// console.log(`Numero aleatorio entre 0 y 1: ${Math.random()}`);
// console.log(`random 0 a 2, dos decimales: ${(Math.random() * 2 ).toFixed(2)}`);