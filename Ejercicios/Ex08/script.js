$(document).ready(function(){

    $(".container img:gt(0)").hide();
    setInterval(function(){
        $(".container img:first-child").fadeOut(0).next("img").fadeIn(500).end().appendTo(".container");

    },3000)
})