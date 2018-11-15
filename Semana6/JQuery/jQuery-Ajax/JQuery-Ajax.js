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
        console.log(response);
        console.log(response.data);
        response.data.forEach(function(element,index){
            $(".resultado").append(`<p>${index} ${element.first_name} ${element.last_name}</p>`);
        });
    }); // que seria lo mismo que el anterior
});