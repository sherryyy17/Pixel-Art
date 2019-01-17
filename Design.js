$("#sub").on('click',function(){
    var row=$('#gridh').val();
    var cell=$('#gridw').val();
    makeGrid(row,cell);
});
function makeGrid(r,c){
for(var i=0;i<r;i++)
{   $("table").append("<tr></tr>");
    for(var j=0;j<c;j++)
    {  $("tr:last").append("<td></td>");
    }
    event.preventDefault();
}
}