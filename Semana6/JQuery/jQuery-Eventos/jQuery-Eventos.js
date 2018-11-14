$(()=>{
    // eventosMouse
    var miDiv = $("#miDiv");
    // miDiv.mouseover(function () { 
    //     miDiv.css("background-color", "green").css("cursor","progress");
    // });
    // miDiv.mouseout(function () { 
    //     miDiv.css("background-color", "yellow");
    // });
    miDiv.click(function () { 
        miDiv.css("background-color", "black");
    });
    miDiv.hover(()=>{ 
        miDiv.css("background-color", "white");
    },()=>{
        miDiv.css("background-color", "blue");
    });

    var divBolita = $("#bolita");
    divBolita.hide();
    miDiv.click(()=>{ 
        divBolita.show();
    });

    miDiv.dblclick(function () { 
        miDiv.css("background-color", "red");
    });
});