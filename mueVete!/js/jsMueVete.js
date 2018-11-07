window.addEventListener("load",iniciar);
    function iniciar(){
        var barraTiempo = document.getElementById("tiempo");
        var cuadrito = document.getElementById("caja");
        var tamaño = 50;
        var puntaje = 0;
        // cuadrito.addEventListener("click",()=>{
        //     tamaño -= 2;
        //     cuadrito.style.width = tamaño +"px";
        //     cuadrito.style.height = tamaño +"px";
        // });
        barraTiempo.addEventListener("mousemove",deslizarBarra);
    }

    function deslizarBarra(){
        // var alturaBarra = evento.offsetY;
        var alturaBarra = barraTiempo.style.height;
        // alturaBarra = evento.
        if(alturaBarra < 0){alturaBarra=0;}
        else if(alturaBarra > 400){alturaBarra = 400;}
        var elemento = document.getElementById("tiempo");
        elemento.style.height = alturaBarra+"px";
    }