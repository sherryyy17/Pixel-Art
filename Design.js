//make grid when form is submitted
$("#para").submit(function(click)
{  
    var row=$("#gridh").val();
    var colm=$("#gridw").val();
    $("tr").remove(); //deinitialises grid
    $("button").remove();
    for(var i=0;i<row;i++){
        $("#grid").append("<tr></tr>");
    for(var j=0;j<colm;j++){
            $("tr:last").append("<td></td>");
            //adds cells to the the last child tr
        }   
    }
    $("body").append("<button type='reset'>reset</button>");
    //reset button
});

//to fill the clicked cells with selected colors 
$("#grid").on("click","td",function(){
    if($(this).attr("style"))
        $(this).removeAttr("style"); //unfill filled cells
    else
        $(this).css("background",function(){
        var colo=$("#color").val();
        return colo;
        //callback func
    });
}
);
//reset the grid
$("body").on("click","button",function(){
    $("td").removeAttr("style");
});