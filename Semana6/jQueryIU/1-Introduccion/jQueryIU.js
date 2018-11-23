$(function(){
    // Mover elementos
    // $(".elemento").draggable(); // Que se puede arrastrar algunos elementos

    // // Redimensionar elementos
    // $(".elemento").resizable();

    // Sortable = elementos 
    // var ListaJuegos = $(".lista > li");
    // ListaJuegos.forEach(function(index, element){
    //     element.attr("id",index);
    // });
    // function OrdenLista(){
    //     ListaJuegos.each(function(index, elemento){
    //         console.log(`${index} ${elemento.innerHTML}`);
    //     });
    // }
    // OrdenLista();
    $(".lista").sortable({
        update: function(event, ui){
            console.log("La lista ha cambiado");
            // OrdenLista();
        }
    });

    // Dropable es un contenedor que puede contener elementos dragable
    $(".contenido").draggable();
    $(".contenedor").droppable({
        drop: function(){
            console.log("Han soltado un elemento en el contenedor");
            $(".contenido").css("background-color","red");
        }
    });

    // ANIMACIONES
    $("#btnAnimar").click(function(){
        // $("#objetivo").effect("explode");
        // $("#objetivo").toggle("bind");
        // $("#objetivo").toggle("slide");
        // $("#objetivo").toggle("drop");
        // $("#objetivo").toggle("puff",2000);
        // $("#objetivo").toggle("fold",2000);
        // $("#objetivo").toggle("scale",2000);
        $("#objetivo").effect("shake",500);
    });

    // TOOLTIP
    $(document).tooltip(); //Le pone un estilo

    // MODAL
    $("#btnAbrir").click(function(){
        $("#modal").dialog();
    });
});