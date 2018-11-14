$(function(){
    // var tiene = $("#miUl").hasClass("miLista");
    // console.log(tiene);
    // $("#btnHide , #btnHide1").click(function(){
    //         $("p").hide();
    //     }
    // );
    function ocultar(){
        $("p").hide();
    }
    $("#btnHide , #btnHide1").click(ocultar);
    $("#btnJuegos").click(()=>{
        var ulJuegos = $("ul:eq(1)");
        if(ulJuegos.hasClass("juegos")){
            ulJuegos.removeClass("juegos");
        }else{
            ulJuegos.addClass("juegos");
        }
    });

    $("[nombre = red_social]").css("color","green").css("font-size","2rem").css("text-decoration","none");
});