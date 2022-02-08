$(document).ready(function(){
    
    //Divs con la clase module
    $divs = $("div.module");


    //Tres selecciones que puedan  seleccionar  el tercer item de la lista 
    $seleccion =  $("#myList li:nth-child(3)");
    $seleccion =  $("#myList").children().eq(2);
    $seleccion =  $("#myList").children().next().next();



    //Seleccionar el elemento label del elemento input utilizando el selector del atributo
    $label = $("label[for=q]");


    //Averiguar cuantos elementos en la pagina estan ocultos
    $n = ($(":hidden")).lenght;


    //Saber cuantas imagenes tienen el atributo alt
    $n = $("img[alt]");

    //Selecconar todas las filas impares del cuerpo de la tabla

    $filas = $("table tr:odd");



})
