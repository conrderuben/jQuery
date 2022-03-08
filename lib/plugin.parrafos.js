(function($){
	//plugin con métodos para párrafos
	$.fn.numerar = function(inicio){
		//método que numera los párrafos del documento
		//var i=inicio;

		this.each(function(){
			$(this).prepend(inicio+".- ");
			inicio++;
		})	
	}
	$.fn.colorear = function(color){
		//método que cambia el color de letra de los párrafos
		this.css("color", color);

	}
	$.fn.contar = function(){
		return this.length;
	}
	$.fn.dicolor = function(){
		return this.css("color");
	}
})(jQuery);