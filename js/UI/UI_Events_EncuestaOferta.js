
$(document).ready(function () {
    CargarDimensionesDisponibles();
});

function CargarDimensiones() {

    var usuarioLogged = localStorage.getItem('UsuarioLogged_OfertAPP');
    var usu_UsuarioID = null;

    if (ofertasUsuario == null) {
        $(usuarioLogged).find("SP_LOGIN_USUARIO").each(
            function (i, e) {
                usu_UsuarioID = $(e).find("usu_UsuarioId").text();
                return;
            }
        );
        if (usu_UsuarioID == null) {
            $(usuarioLogged).find("SP_CREACION_USUARIO").each(
            function (i, e) {
                usu_UsuarioID = $(e).find("usu_UsuarioId").text();
                return;
            }
        );
        }
    }

    var ofertasUsuario = localStorage.getItem('Dimensiones_OfertAPP');

    var items = "<ul id='eventList_ListaContenidoEncuestaOferta' data-role='listview' data-inset ='true' class'ui-nodisc-icon ui-alt-icon'>";

    var identificacion = 0,
        ingresos = 0,
        educacion = 0,
        salud = 0,
        nutricion = 0,
        habitabilidad = 0,
        dinamica = 0,
        banca = 0,
        justicia = 0,
        primeraInfancia = 0,
        comunitario = 0;


    $(ofertasUsuario).find("SP_SELECT_DIMENSION").each(
            function (i, e) {
                var dim_DimensionId = $(e).find("dim_DimensionId").text();
                var dim_NombreDimension = $(e).find("dim_NombreDimension").text();

                items = items + "<li data-icon='false' class='ui-nodisc-icon ui-alt-icon' id='li_" + dim_DimensionId + "_1' ><a href='#" + dim_DimensionId + "_1'  value =" + dim_NombreDimension + " ><img src='" + imgSeleccionImagen(dim_DimensionId) + "' style='width: 100%; margin: 1%' /> <h1 class='wrap'>" + dim_NombreDimension.toUpperCase() + "</h1><p>¡Vota por esta Dimensión!</p></a></li>";
                items = items + "<script> $('#li_" + dim_DimensionId + "_1').click(function () { var answer = confirm('Vas a votar por la dimensión " + dim_NombreDimension.toUpperCase() + ". ¿Confirmas tu selección?'); if (answer){ EncuestaOferta(" + usu_UsuarioID + ", " + dim_DimensionId + "); } });</script>";

            });

    items = items + "<ul/>";
    var container = document.getElementById("ListaContenidoEncuestaOferta");
    $(container).append(items)

    $("#eventList_ListaContenidoEncuestaOferta").listview();

}


function imgSeleccionImagen(seccion) {

    switch (seccion) {
        case "1":
            img = 'images/buttons/p1_identificacion-12.png';
            break;
        case "2":
            img = 'images/buttons/p2_trabajo-12.png';
            break;
        case "3":
            img = 'images/buttons/p3_educacion-12.png';
            break;
        case "4":
            img = 'images/buttons/p4_salud-12-12.png';
            break;
        case "5":
            img = 'images/buttons/p5_nutricion-12.png';
            break;
        case "6":
            img = 'images/buttons/p6_habitabilidad-12.png';
            break;
        case "7":
            img = 'images/buttons/p7_familia-12.png';
            break;
        case "8":
            img = 'images/buttons/p8_banca-12.png';
            break;
        case "9":
            img = 'images/buttons/p9_justicia-12.png';
            break;
        case "10":
            img = 'images/buttons/p10_infancia-12.png';
            break;
        case "11":
            img = 'images/buttons/p11_comunitario-12.png';
            break;
    }
    return img;
}




