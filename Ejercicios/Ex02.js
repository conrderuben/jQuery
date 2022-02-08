$(document).ready(function(){

    $("img[alt]").each(function(){
        console.log("valor alt=" + $(this).attr("alt"));
    })

    $("input").closest("form").attr("class", "laclase");

    $("#myList li").filter(".current").attr("class", "").next().attr("class", "current");

    $("#specials select").closest("form").find("input:submit");

    $("#slideshow li").first().attr("class", "current").nextAll().attr("class", "disabled");

})