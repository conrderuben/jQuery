$(document).ready(function(){
   
   //onsubmit =  $($(#text).text()).insertAfter("ul.lista li:last");
    $(".add").on("click", function(){

        $(".lista").append("<li>"+ $(".texto").val() + "</li>");
        $(".texto").val("");
   })
});