var tabla = document.getElementById("miTabla");
function ImprimirTabla(usuarios){
    for(var i = 0; i < usuarios.length; i++){
        var tr = document.createElement("tr");
        var tdNombre = document.createElement("td");
        tdNombre.innerHTML = usuarios[i].first_name+" "+usuarios[i].last_name;
        var tdFoto = document.createElement("td");
        var tdImg = document.createElement("img");
        tdImg.setAttribute("src",usuarios[i].avatar);
        
        tdFoto.append(tdImg);
        tr.append(tdNombre);
        tr.append(tdFoto);
        tabla.append(tr);
    }
}

fetch("https://reqres.in/api/users")
.then(function(data){
    return data.json();
    // return data.json();
})
.then(function(datos){
    // for(var i = 0; i < datos.lenght; i++){
    //     console.log(datos[i].name);
    // }
    console.log(datos); 
    ImprimirTabla(datos.data);
    
});