$(document).ready(function(){

    $(".pequeno").each(function(){
        var x = Math.floor(Math.random()*400)+500;
        var y = Math.floor(Math.random()*400);


        
        $(this).css({
            "top" : y,
            "left" : x
        });

        $(this).draggable();
    });

    $(".equiporojo").data("numero", 0);

    $(".pequeno").on("click", function(){
        console.log(parseInt($(this).css("left")) > 1000);
        if(parseInt($(this).css("left")) > 1200){
        $(".equiporojo").text($(".equiporojo").data("numero")+1);
        $(".equiporojo").data("numero", $(this).data("numero") + 1);
        }
    })
    

    



})