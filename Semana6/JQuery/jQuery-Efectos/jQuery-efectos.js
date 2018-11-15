$(function(){
    var miDiv = $("#miDiv");
    var btnMostrar = $("#btnMostrar");
    var btnOcultar = $("#btnOcultar");
    var btnToggle = $("#btnToggle");

    miDiv.hide();
    // miDiv.mousemove(function(){
        btnMostrar.click(function(event){
            // miDiv.show("slow");
            // miDiv.fadeIn("slow");
            miDiv.fadeTo("slow",event.clientX);
        });
    // });
    
    btnOcultar.click(function(){
        // miDiv.hide("slow");
        miDiv.fadeOut("slow");
    });

    btnToggle.click(function(){
        // miDiv.toggle("slow");  
        // miDiv.slideToggle();    // Lo abre en persianas
        miDiv.fadeToggle();
    });
});