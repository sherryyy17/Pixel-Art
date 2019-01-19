$("#para").submit(function(click)
{   event.preventDefault;
    var row=$("#gridh").val();
    var colm=$("#gridw").val();
    $("tr").remove();
    $("button").remove();
    for(var i=0;i<row;i++){
        $("#grid").append("<tr></tr>");
    for(var j=0;j<colm;j++){
            $("tr:last").append("<td></td>");
        }
        event.preventDefault;   
    }
    $("body").append("<button type='reset'>reset</button>");

});
$("#grid").on("click","td",function(){
    if($(this).attr("style"))
        $(this).removeAttr("style");
    else
        $(this).css("background",function(){
        var colo=$("#color").val();
        return colo;
    });
}
);
$("body").on("click","button",function(){
    $("td").removeAttr("style");
});