window.addEventListener("load",function(){
    var btnActualizar = document.getElementById("btnActualizar");
    // var divCargando = document.getElementById("cargando");
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
                // JSONObjeto = JSON.parse(request.responseText);
                // console.log(JSON.parse(request.responseText)[0]);
                JSONObjeto = JSON.parse(request.responseText);
            }
        };
    }
    function llenarTabla(respuesta){
        var miTabla = document.getElementById("miTabla");
        // miTabla.removeChild(miTabla.childNodes[2]);
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

            var tdBoton = document.createElement("button");
            tdBoton.setAttribute("id",i);
            tdBoton.setAttribute("class","btn btn-dark");

            // var tdBoton = document.createElement("td");
            // tdBoton.innerHTML = "<button class='btn btn-info' id='"+respuesta[i].id+"'>Info</button>";

            tdBoton.setAttribute("onclick","mostrarInfo(this)");
            tdBoton.innerHTML = "Ver info";
            tr.append(tdNumero);
            tr.append(tdId);
            tr.append(tdName);
            tr.append(tdUsername);
            tr.append(tdCorreo);
            tr.append(tdAdress);
            tr.append(tdPhone);
            tr.append(tdWebsite);
            tr.append(tdBoton);
            tbody.append(tr);
        }
        miTabla.append(tbody);
    }
    
});
var JSONObjeto;
function mostrarInfo(idBoton){
    var indice = parseInt(idBoton.id);
    console.log(indice);
    llenarTablita(JSONObjeto[indice]);

}
function llenarTablita(respuesta){
    console.log(respuesta);
    var miTabla = document.getElementById("miTablita");
    // miTabla.removeChild(miTabla.childNodes[2]);
    var tbody = document.createElement("tbody");
        
    var tr = document.createElement("tr");

    var tdNumero = document.createElement("td");
    tdNumero.innerHTML = "1";

    var tdId = document.createElement("td");
    tdId.innerHTML = respuesta.id;

    var tdName = document.createElement("td");
    tdName.innerHTML = respuesta.name;

    var tdUsername = document.createElement("td");
    tdUsername.innerHTML = respuesta.username;

    var tdCorreo = document.createElement("td");
    tdCorreo.innerHTML = respuesta.email;

    var tdAdressStreet = document.createElement("td");
    tdAdressStreet.innerHTML = respuesta.address.street;

    var tdAdressCity = document.createElement("td");
    tdAdressCity.innerHTML = respuesta.address.city;

    var tdAdressZipcode = document.createElement("td");
    tdAdressZipcode.innerHTML = respuesta.address.zipcode;

    var tdAdressGeoLat = document.createElement("td");
    tdAdressGeoLat.innerHTML = respuesta.address.geo.lat;

    var tdAdressGeoLng = document.createElement("td");
    tdAdressGeoLng.innerHTML = respuesta.address.geo.lng;

    var tdPhone = document.createElement("td");
    tdPhone.innerHTML = respuesta.phone;

    var tdWebsite = document.createElement("td");
    tdWebsite.innerHTML = respuesta.website;

    var tdCompany = document.createElement("td");
    tdCompany.innerHTML = respuesta.company;

    tr.append(tdNumero);
    tr.append(tdId);
    tr.append(tdName);
    tr.append(tdUsername);
    tr.append(tdCorreo);
    tr.append(tdAdressStreet);
    tr.append(tdAdressCity);
    tr.append(tdAdressZipcode);
    tr.append(tdAdressGeoLat);
    tr.append(tdAdressGeoLng);
    tr.append(tdPhone);
    tr.append(tdWebsite);
    tr.append(tdCompany);
    tbody.append(tr);
    miTabla.append(tbody);
}

function getUsuario(){
    var request = new XMLHttpRequest();
    request.onreadystatechange = function(){
        if(request.readyState == 3){

        }
        if(request.readyState == 4){
            console.log(JSON.parse(request.responseText));
        }
    };
    request.open("get","https://jsonplaceholder.typicode.com/users"+idUsuario);
    request.send(null);
}