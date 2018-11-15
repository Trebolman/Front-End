$(function(){
    var IsClickDown = false;
    var bolita = $("#bolita");
    $('table').mousedown(function(event) {
        IsClickDown = true;
        let selected = $(event.target);
    });
    $('table').on("dragstart",function(event) {
        event.preventDefault();   
    });
    $("td").mouseenter(function(event){
        if(IsClickDown) 
        {
          let selected = $(event.target);
          var x = event.clientX;
          var y = event.clientY;
          bolita.css("left",x)
                .css("top",y);
          if(y>10 && y<415 && x>290 && x<550){
            alert("Perdiste");
          };
          if(y>150 && y<565 && x>10 && x<135){
            alert("Perdiste");
          };
          if(y>430 && y<565 && x>560 && x<570){
            alert("Buena Campeonnn");
          };

        }
    });
    $('table').mouseup(function(event) {
        IsClickDown = false;
        bolita.css("left",11)
                .css("top",14);
    });
})