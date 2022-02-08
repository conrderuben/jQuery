$(document).ready(function(){

    var numItemsActuales= ("#myList").length;
    for (i=numItemsActuales+1;i<numItemsActuales+5;i++){
        var $li=$("<li>List item"+i+"</li>");
        $("#myList").append($li);
    }


    $("#myList li:even").remove();

    $("div.module:last").append($("<h2>h2</h2>")).append($("<p>parrafo</p>"));

    $("select[name=day]").append("<option value='wednesday'>Wednesday</option>");
})

    
