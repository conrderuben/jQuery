$(document).ready(function(){
	var i = 1;
	$("p").each(function(){
		
		$(".select").append("<Option value = '" + i + "' id='option-" + i +"'>Parrafo " + i +"</Option>");
		i++;
	})
	

	//numerar párrafos
	$("#numerar").on("click", function(){
		$("p").numerar(7);
		$("h1").numerar(1);
	})
	$("#colorear").on("click", function(){
		$("p").eq($(".select option:selected").val()-1).colorear($("#colorin").val());
	})
	$("#contar").on("click", function(){		
		var parrafos = $("p").contar();
		alert("Número de párrafos "+parrafos);
	})
	$("#dicolor").on("click", function(){
		$("p").dicolor();
	})