$(document).ready(function(){

    $(".list li").on("click",
        function(){
            $(this).slideUp(500).slideDown(1000,function(){
                $(this).css("color", "black");
            })
            
        })

})