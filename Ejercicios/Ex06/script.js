$(document).ready(function(){

    $(document).on("keypress", function(event){
        console.log(event.charCode);
        if(event.which == 37){
            $(".div").animate({
                left: "-=10px"
            }, "fast");
        }else if(event.which == 39){
            $(".div").animate({
                left: "+=10px"
            }, "fast");
        }else if(event.which == 38){
            $(".div").animate({
                top: "-=10px"
            }, "fast");
        }else if(event.which == 40){
            $(".div").animate({
                top: "+=10px"
            }, "fast");
        }
    })


})