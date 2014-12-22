$(document).ready(function () {

    var usuUsuarioLogin = localStorage.getItem('UsuarioLogged_OfertAPP');

    if (usuUsuarioLogin != null) {
        window.location = "home.html";
    }

});


