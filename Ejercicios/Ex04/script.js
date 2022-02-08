$(document).ready(function(){

    $(".cuadrado").on(
        {"click":function(){$(".container").css("background-color", $(this).css("background-color"))}}
        );

        $(".cuadrado").on(
            
            {"mousemove": function(event){
                $color = $(this).text();
                $(".tooltip").text($color);
                $(".tooltip").css("background-color", $(this).css("background-color"));
                $(".tooltip").css({
                    "background-color":$color,
                    "color":"white",
                    "position":"absolute",
                    "top" : event.pageY +5,
                    "left": event.pageX +5});
            }}
            );




})