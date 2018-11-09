window.addEventListener("load",function(){
    var btnActualizar = document.getElementById("btnActualizar");
    var divCargando = document.getElementById("cargando");
    btnActualizar.addEventListener("click",()=>{
        getUsuarios();
    });
    function getUsuarios(){
        var request = new XMLHttpRequest();
        request.open("get","https://jsonplaceholder.typicode.com/users");
        request.send(null);
        request.onreadystatechange = function(){
            if(request.readyState == 3){
                console.log("Cargando");
                // divCargando.removeAttribute("hidden");
            }
            if(request.readyState == 4){
                console.log("Carga completa");
                llenarTabla(JSON.parse(request.responseText));
            }
        };
    }
    function llenarTabla(respuesta){
        console.log(respuesta);
        var miTabla = document.getElementById("miTabla");
        miTabla.removeChild(miTabla.childNodes[2]);
        var tbody = document.createElement("tbody");
        for(var i = 0; i < respuesta.length; i++){
            var tr = document.createElement("tr");

            var tdNumero = document.createElement("td");
            tdNumero.innerHTML = (i + 1).toString();

            var tdId = document.createElement("td");
            tdId.innerHTML = respuesta[i].id;

            var tdName = document.createElement("td");
            tdName.innerHTML = respuesta[i].name;

            var tdUsername = document.createElement("td");
            tdUsername.innerHTML = respuesta[i].username;

            var tdCorreo = document.createElement("td");
            tdCorreo.innerHTML = respuesta[i].email;

            var tdAdress = document.createElement("td");
            tdAdress.innerHTML = respuesta[i].address.street;

            var tdPhone = document.createElement("td");
            tdPhone.innerHTML = respuesta[i].phone;

            var tdWebsite = document.createElement("td");
            tdWebsite.innerHTML = respuesta[i].website;

            tr.append(tdNumero);
            tr.append(tdId);
            tr.append(tdName);
            tr.append(tdUsername);
            tr.append(tdCorreo);
            tr.append(tdAdress);
            tr.append(tdPhone);
            tr.append(tdWebsite);
            tbody.append(tr);
        }
        miTabla.append(tbody);
        // for(var i = 0; i < respuesta.length; i++){
        //     var tr = document.createElement("tr");
        //     for(var i = 0; i < 7; i++){
        //         var td = document.createElement("td");
        //         if(respuesta[i])
        //         td.innerHTML = respuesta[i]
        //     }
        // }
    }
});