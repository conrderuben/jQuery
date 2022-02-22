$(document).ready(function(){

    $(".cuadrado").on(
        {"click":function(){$(".container").css("background-color", $(this).css("background-color"))}}
        );

        $(".cuadrado").tooltip();




})