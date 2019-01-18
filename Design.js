$("#para").submit(function(click)
{   event.preventDefault;
    console.log("k");
    var row=$("#gridh").val();
    var colm=$("#gridw").val();
    for(var i=0;i<row;i++){
        $("#grid").append("<tr></tr>");
    for(var j=0;j<colm;j++){
            $("tr:last").append("<td></td>");
        }
        event.preventDefault;   
    }
    $("body").append("<button type='reset'>reset</button>");
});
