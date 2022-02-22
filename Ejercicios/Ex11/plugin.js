(function($){

   $.fn.propiedades = function(placeholder, sinfoco, confoco){
    this.on("focus", function(){
        $(this).css(confoco)
    })

    this.on("blur", function(){
        $(this).css(sinfoco)
    })

    this.attr("placeholder", placeholder );
    
   }
})(jQuery);