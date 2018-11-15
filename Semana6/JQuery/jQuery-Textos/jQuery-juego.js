$(function(){
    var cuadradito = $("#cuadradito");
    var bolita = $("#bolita");
    console.log(cuadradito.css("width"));
    $(document).mousemove(function(event){
        bolita.css("left",event.clientX-500).css("top",event.clientY-500);
    });
});