$(document).ready(function () {
    $('#btnRegistro').click(function () {
        window.location = "registro.html";
    });

    $('#btnIniciarSesion').click(function () {
        window.location = "login.html";
    });

    $('#btnEncuestaOferta').click(function () {
        window.location = "encuestaOferta.html";
    });

    $('#btnMOR').click(function () {
        window.location = "ofertaMor.html";
    });

    $('#btnOfertasDisponibles').click(function () {
        window.location = "ofertaDisponible.html";
    });

    $('#btnVolverMOR').click(function () {

        var usuUsuarioLogin = localStorage.getItem('UsuarioLogged_OfertAPP');

        if (usuUsuarioLogin != null) {
            window.location = "home.html";
        }
        else {
            window.location = "index.html";
        }
    });

    $('#btnVolverRegistro').click(function () {
        window.location = "index.html";
    });

    $('#btnVolverLogin').click(function () {
        window.location = "index.html";
    });
    
    $('#btnVolver').click(function () {
        window.location = "home.html";
    });




});


