window.addEventListener("load",()=>{
    var visible = true;
    var menu = document.getElementById("menuimagen");
    menu.addEventListener("click",()=>{
        var menuprincipal = document.getElementById("menuprincipal");
        if(visible){ // Si el icono esta visible
            menuprincipal.style.display = "block";
            visible = false;
        }else{menuprincipal.style.display = "none"; visible = true;}
    });
});