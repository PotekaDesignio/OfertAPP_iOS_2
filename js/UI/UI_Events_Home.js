$(document).ready(function () {

    var ofertasUsuario = localStorage.getItem('OfertasUsuario_OfertAPP');
    var usuarioLogged = localStorage.getItem('UsuarioLogged_OfertAPP');
    var usu_UsuarioID = null;

    if (ofertasUsuario == null) {
        $(usuarioLogged).find("SP_LOGIN_USUARIO").each(
            function (i, e) {
                var usu_UsuarioID = $(e).find("usu_UsuarioId").text();
                console.log(usu_UsuarioID);
                CargarOfertasDisponiblesUsuario(usu_UsuarioID);
                return;
            }
        );
        if (usu_UsuarioID == null) {
            $(usuarioLogged).find("SP_CREACION_USUARIO").each(
            function (i, e) {
                var usu_UsuarioID = $(e).find("usu_UsuarioId").text();
                console.log(usu_UsuarioID);
                CargarOfertasDisponiblesUsuario(usu_UsuarioID);
                return;
            }
        );
        }
    }
});

$('#btnCerrarSesionHome').click(function () {

    var usuarioLogged = localStorage.getItem('UsuarioLogged_OfertAPP');
    var usu_UsuarioID = null;


    $(usuarioLogged).find("SP_LOGIN_USUARIO").each(
            function (i, e) {

                var usu_UsuarioID = $(e).find("usu_UsuarioId").text();
                CerrarSesion(usu_UsuarioID);
                console.log($(e).find("usu_UsuarioId").text());
                return;
            }
    );
    if (usu_UsuarioID == null) {
        $(usuarioLogged).find("SP_CREACION_USUARIO").each(
            function (i, e) {
                var usu_UsuarioID = $(e).find("usu_UsuarioId").text();
                console.log(usu_UsuarioID);
                CerrarSesion(usu_UsuarioID);
                return;
            }
        );
    }

});

