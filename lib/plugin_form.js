(function($){
	$.fn.campo = function(texto, clase_activo, clase_desactivo){
		this.attr("placeholder", texto);
		this.on("focusin", function(){
			$(this).removeClass(clase_desactivo).addClass(clase_activo);
		})
		this.on("focusout", function(){
			$(this).removeClass(clase_activo).addClass(clase_desactivo);
		})
	}
})(jQuery)