$(function(){
    // var listas = $("#miLista li");
    // // console.log(listas);
    // // foreach
    // // listas.each(function(element, index){
    // //     console.log(element);
    // // });
    // // $.each(listas,function(index,elemento){
    // //     console.log(elemento);
    // //     // elemento.addClass("lista");
    // //     console.log(index + " " + elemento.innerHTML);
    // //     elemento.setAttribute("class","lista");
    // // });

    // // // listas.attr(""); //Lo mismo que setAttribute
    // // console.log($("#miLista").attr("atributo")); //get atribute, cuando solo ingreso un argumento
    // // $("#miLista li").attr("pagina","1"); //set atributo (dos argumentos)
    // // $("#miLista li").removeAttr("pagina");
    // // $("ul").removeAttr("atributo");

    // listas.each(function(index){
    //     $(this).text("Nuevo texto" + index);
    // });

    var miLista = $("#miLista");
    $("btnAgregar").click(function(){
        miLista.append("<li>" + $("#miInput").val() + "</li>"); // Agregamos un nuevo li de lista. 
        $("#miInput").val(""); // Para borrar el input
    });
    
    $("#btnAgregar").click(function(){
        miLista.prepend("<li>" + $("#miInput").val() + "</li>"); // Agregamos un nuevo li de lista. 
        $("#miInput").val(""); // Para borrar el input
    });
});
