$(document).ready(function () {

});

$('#btnCerrarSesionHome').click(function () {

    var usuarioLogged = localStorage.getItem('UsuarioLogged_OfertAPP');

    $(usuarioLogged).find("SP_LOGIN_USUARIO").each(
            function (i, e) {

                var usu_UsuarioID = $(e).find("usu_UsuarioId").text();
                CerrarSesion(usu_UsuarioID);
                console.log($(e).find("usu_UsuarioId").text());
                return;
            }
        );
});