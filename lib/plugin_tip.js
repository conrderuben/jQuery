(function($){
	$.fn.creatip = function(texto){
		this.on("mousemove", function(evento){
			$(".tip")
				.text(texto)		
				.css({
					"display": "block",
					"top": evento.pageY+5,
					"left": evento.pageX+5
				})

		})
		this.on("mouseleave", function(){
			$(".tip").css("display", "none");
		})
	}

})(jQuery);