$(document).ready(function(){

    $("#ta").on("keypress", function(event){

        $(".caracteres").data("numero", $(".caracteres").data("numero")+1);
        $(".caracteres").text($(".caracteres").data("numero"));

    
    if(event.which == 97 || event.which == 101 || event.which == 105 || event.which == 111 || event.which == 117){
        $(".vocales").data("numero", $(".vocales").data("numero")+1);
        $(".vocales").text($(".vocales").data("numero"));
    }else if(event.which == 32){
        $(".espacios").data("numero", $(".espacios").data("numero")+1);
        $(".espacios").text($(".espacios").data("numero"));
    }else{
        $(".consonantes").data("numero", $(".consonantes").data("numero")+1);
        $(".consonantes").text($(".consonantes").data("numero"));
    }
    })

})