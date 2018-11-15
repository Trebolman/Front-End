$(function(){
    // Metodo get
    // $.get("https://reqres.in/api/users?page=2");
    // Siempre que hago peticiones por url por el metodo get
    // el signo de interrogacion ? denota que le enviaremos datos
    // luego la variables y el valor (page = 2)
    // y si enviara mas de un dato lo concateno con &
    var dato = {page:1};
    $.get("https://reqres.in/api/users",{dato},function(response){
        // la respuesta 
        // console.log(response);
        // console.log(response.data);
        response.data.forEach(function(element,index){
            $(".resultado").append(`<p>${index} ${element.first_name} ${element.last_name}</p>`);
        });
    }); // que seria lo mismo que el anterior

    // Enviando por el metodo POST
    // var usuario = {name: "Isaac", job:"Ingeniero"};
    // $.post("https://reqres.in/api/users",usuario,function(response){
    //     console.log(response);
    // });

    var miForm = $("#frmCrearUsuario");
    miForm.submit(function(evento){
        evento.preventDefault();

        var usuario =   {   name: $("input[name='name']").val(), 
                            job: $("input[name='job']").val()
                        };
        // $.post(miForm.attr("action"),usuario,function(response){
        //     console.log(response);
        // });

        // Haciendo uso del objeto  ajax
        $.ajax({
            type:       "POST",
            url:        miForm.attr("action"),
            data:       usuario, //enviamos el json usuario
            timeout:    100,
            success:    function(response){
                console.log(response);
            },
            error:      function(){
                console.log("Ups! Un error ha ocurrido");
            },
            beforeSend: function(){
                console.log("Vamos a crear un nuevo usuario");
            },

        });
    });

    $("#miLink").click(function(e){
        e.preventDefault();
    });
});