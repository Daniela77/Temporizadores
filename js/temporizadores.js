$(document).ready(function () {
    'use strict';
    var valor = 0;

    function cargarTemporizadores(temporizadores) {
        var cantTemp, i, segundos, inicTemp;
        cantTemp = $("#inputTemp").val();
         $("#inputTemp").val("");
        for (i = 0; i < cantTemp; i++) {
            segundos = Math.floor((Math.random() * 5) + 1);
            inicTemp = segundos * 1000;
            temporizadores.push(inicTemp);
        }
        return temporizadores;
    }

    function crearBoton(nombre) {
        $("body").append("<button id=tempbutton" + nombre + ">Boton " + nombre + "</button>");
        $("#tempbutton" + nombre).on("click", function () {
            alert(" Boton: " + nombre);
        });
    }

    function lanzarTemporizadores(temporizadores) {
        var i, tiempoinicial;
        for (i = 0; i < temporizadores.length; i++) {
            tiempoinicial = temporizadores[i];
            valor = valor + 1;
            setTimeout(crearBoton, tiempoinicial, valor);
        }
    }

    $("button").on("click", function () {
        event.preventDefault();
        var temporizadores = [];
        cargarTemporizadores(temporizadores);
        lanzarTemporizadores(temporizadores);
    });

});
