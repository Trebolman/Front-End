$(function(){
    var miDiv = $("#miDiv");
    var btnMostrar = $("#btnMostrar");
    var btnOcultar = $("#btnOcultar");
    var btnToggle = $("#btnToggle");
    var btnAnimar = $("#btnAnimar");

    miDiv.hide();
    // miDiv.mousemove(function(){

    btnMostrar.click(function(){
        // miDiv.show("slow");
        // miDiv.fadeIn("slow");
        miDiv.show("slow",function(){
            alert("Ya terminó la animación");
            // miDiv.mousemove(function(){

            // });
        });
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

    btnAnimar.click(function(){
        console.log($(".container").width());
        // console.log(posX);
        // console.log(typeof(posX));

        var posX = ($(".container").width()/2).toString();
        console.log(typeof(posX));
        var posY = ($(".container").height()/2).toString();

        var animacion1 = {
                            marginLeft: posX,
                            marginTop: '0px',
                            fontSize: '2rem'
                        };

        var animacion2 = {
                            marginTop: posY,
                            // fontSize: '2rem'
                        };
        
        var animacion3 = {
                            marginLeft: '0',
                            // fontSize: '2rem'
                        };

        var animacion4 = {
                            marginTop: '0',
                            // fontSize: '2rem'
                        };

        miDiv.animate(animacion1,"slow")
        .animate(animacion2,"slow")
        .animate(animacion3,"slow")
        .animate(animacion4,"slow");
    });
});