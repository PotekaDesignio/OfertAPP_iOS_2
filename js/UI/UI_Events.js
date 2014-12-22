$(document).ready(function () {
    $('#btnRegistro').click(function () {
        window.location = "registro.html";
    });

    $('#btnIniciarSesion').click(function () {
        window.location = "login.html";
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


});


