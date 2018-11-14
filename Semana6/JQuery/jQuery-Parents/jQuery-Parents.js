$(()=>{
    var lis = $("li");
    console.log(lis);
    // $("li.item-2").find("li").css("background-color","black").css("color","white");
    $("li.item-2").find(lis).css("background-color","black").css("color","white");

    // PARENTS
    $("li.item-a").parent().addClass("grande"); // Para buscar al padre
    console.log($("li.item-a").parent().parent().addClass("grande"));
});