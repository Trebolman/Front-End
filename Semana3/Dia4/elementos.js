function darFormato(){
    var parrafo = document.getElementById("parrafo");
    // parrafo.style.fontSize = "5em";
    parrafo.style.border = "2px solid #ff0000";
}
function aumentar(){
    var parrafo = document.getElementById("parrafo");

    // Opcion 1
    var tamano = window.getComputedStyle(parrafo).fontSize;
    var texto = tamano.split("p");
    var tamanoTexto = parseInt(texto[0]);
    tamanoTexto = tamanoTexto + 2;
    parrafo.style.fontSize = tamanoTexto+"px";
    console.log(tamanoTexto);
    // parrafo.style.fontSize = "5em";
    // var borde = window.getComputedStyle(parrafo).borderWidth;
    // var anchoBorde = borde.split("p");
    // var tamanoBorde = parseInt(anchoBorde[0]);
    // tamanoBorde = tamanoBorde + 2;
    // parrafo.style.fontSize = tamanoBorde+"px";
    // console.log(tamanoBorde);
}
function reducir(){
    var parrafo = document.getElementById("parrafo");

    // Opcion 1
    var tamano = window.getComputedStyle(parrafo).fontSize;
    var texto = tamano.split("p");
    var tamanoTexto = parseInt(texto[0]);
    console.log(texto);
    console.log(tamanoTexto,typeof(tamanoTexto));
    tamanoTexto = tamanoTexto - 2;
    parrafo.style.fontSize = tamanoTexto+"px";
    console.log(tamanoTexto);

}
function negrita(){
    var parrafo = document.getElementById("parrafo");
    if(parrafo.style.fontWeight == "bold"){parrafo.style.fontWeight = "normal";}
    else{parrafo.style.fontWeight = "bold";}
}
function oblicua(){
    var parrafo = document.getElementById("parrafo");
    if(parrafo.style.fontStyle == "italic"){parrafo.style.fontStyle = "normal";}
    else{parrafo.style.fontStyle = "italic";}
    // parrafo.style.fontStyle = "italic";
}
function subrayado(){
    var parrafo = document.getElementById("parrafo");
    if(parrafo.style.textDecoration == "underline"){parrafo.style.textDecoration = "none";}
    else{parrafo.style.textDecoration = "underline";}
    // parrafo.style.textDecoration = "underli  ne";
}
function normal(){
    var parrafo = document.getElementById("parrafo");
    parrafo.style.fontWeight = "normal";
}

// Cambiar texto
function cambiarTexto(){
    var entradaP = document.getElementById("miParrafo");
    var entradaT = document.getElementById("miTitulo");
    var parrafo = document.getElementById("miParrafo");
    var titulo = document.getElementById("miTitulo");
    parrafo.innerHTML = entradaP.value;
    titulo.innerHTML = entradaT.value;
}

//insertar input
function insertarInput(){
    var miLabel = document.createElement("label");
    miLabel.innerHTML = "Mi etiqueta";
    console.log(miLabel);
    var miFormulario = document.getElementById("formulario");
    miFormulario.appendChild(miLabel);
}