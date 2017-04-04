$(document).ready(function () {
    'use strict';

    function cargarTemporizadores() {
        var temporizadores, cantTemp, i, segundos, inicTemp;
        temporizadores = [];
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
            alert("Hola soy el boton: " + nombre);
        });
    }

    function lanzarTemporizadores(temporizadores) {
        var i, tiempoinicial;
        for (i = 0; i < temporizadores.length; i++) {
            tiempoinicial = temporizadores[i];
            setTimeout(crearBoton, tiempoinicial, i);
        }
    }

    $("button").on("click", function () {
        event.preventDefault();
        var temporizadores = cargarTemporizadores();
        lanzarTemporizadores(temporizadores);
    });

});
