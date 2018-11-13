// 'use strict'
$(function(){
    $("p").html("Hola, hola");
    $("#btnHide").click(function(){
            $("p").hide();
        }
    );

    $("p").click(function(){
        $(this).css("color","green").css("border","1px solid orangered").css("display","inline-block");
    });
    
    $("#btnComida").click(()=>{ 
        $(".miLista>li").addClass("comida");
    });

    $("button:eq(1)").click(()=>{ //selecciona el boton 2, que como si fuera un array tiene indice 1
        $(".miLista>li").addClass("comida");
    });

    $(".btnTabla").click(()=>{
        $("#tabla1 tr:odd").css("background-color","orangered");
        $("#tabla1 tr:even").css("background-color","gray");
    });
});