var row,cell;
$('#sub').on('click',function(){
    row=$('#gridh').val();
    cell=$('#gridw').val();
    $('tr').remove();
    makeGrid(row,cell);
});
function makeGrid(r,c){
for(var i=0;i<r;i=i+1)
{   $("#grid").append("<tr></tr>");
    for(var j=0;j<c;j=j+1)
    {   
        $("tr:last").append("<td></td>");
    }
}
}