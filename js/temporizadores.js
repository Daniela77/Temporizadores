$(document).ready(function(){

    $("button").on("click", function(){
       event.preventDefault();
       var temporizadores = cargarTemporizadores();
       lanzarTemporizadores(temporizadores);
    });

    function cargarTemporizadores() {
      var temporizadores=[];
      var cantTemp = $("#inputTemp").val();
      $("#inputTemp").val("");
      for (i=0; i <cantTemp ; i++) {
        var segundos=Math.floor((Math.random() * 5)+1);
        var inicTemp= segundos*1000;
        temporizadores.push(inicTemp);
      }
      return temporizadores;
    }

    function lanzarTemporizadores(temporizadores) {
      for ( i = 0; i < temporizadores.length; i++) {
        var tiempoinicial= temporizadores[i];
        activarTimer(tiempoinicial, i);
      }
    }

    function activarTimer(segundos, nombre){
      setTimeout(function(){crearBoton(nombre);},segundos);
    }

    function crearBoton(nombre){
      $("body").append("<button id='tempbutton"+nombre+"'>Boton "+nombre+"</button>");
      $("#tempbutton"+nombre).on("click", function(){
         alert("Hola soy el boton: " + nombre);
      });
    }

});
