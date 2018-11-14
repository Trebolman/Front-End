$(()=>{
    var input = $("#nombre");
    var miDiv = $("#info");
    var miBolita = $("#bolita");
    input.focus(function(){
        $(this).css("width","300px").css("border-radius","2rem").css("outline","none");
    });

    input.blur(function(){
        $("#info").text($(this).val());
        $(this).val("");
        alert($("#info").text());
    });

    miDiv.mousedown(function(event){
        console.log(event.clientX);
    });

    $(document).mousemove(function(event){
        // console.log("x: "+event.clientX+" y:"+event.clientY);
        miBolita.css("left",event.clientX-10).css("top",event.clientY-10);
        miBolita.click(function(event){
            console.log($(document).event.clientX);
        });
    });
});