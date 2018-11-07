// JavaScript Document
window.addEventListener("load",()=>{
    var botonEnviar = document.getElementsByClassName("boton");
    botonEnviar.addEventListener("click",()=>{
        var nombre = document.getElementById("nombre");
        var nombreEntrada = nombre.value;
        localStorage.setItem("name",nombreEntrada);
    });
});