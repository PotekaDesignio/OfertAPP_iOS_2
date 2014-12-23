var img;
$(document).ready(function () {
    var dim_NombreDimensionSeleccion = localStorage.getItem('dim_NombreDimension');

    $("#lblTituloPagina").text("Estas son tus ofertas disponbles para la dimensión " + dim_NombreDimensionSeleccion.toUpperCase());
    CargarOfertasSeleccion();
});

function CargarOfertasSeleccion() {
    var ofertasUsuario = localStorage.getItem('OfertasUsuario_OfertAPP');

    var items = "<ul id='eventList_ListaContenidoMOR' data-role='listview' data-inset ='true' class'ui-nodisc-icon ui-alt-icon'>";
    var SubItems = "";
    var dim_DimensionIdSeleccion = localStorage.getItem('dim_DimensionId');

    $(ofertasUsuario).find("SP_SELECT_OFERTAS_DISPONIBLES_DETALLE_USUARIO").each(
            function (i, e) {

                var dim_DimensionId = $(e).find("dim_DimensionId").text();
                var ofe_OfertaId = $(e).find("ofe_OfertaId").text();
                var dim_NombreDimension = $(e).find("dim_NombreDimension").text();
                var ofe_NombreOferta = $(e).find("ofe_NombreOferta").text();
                var ofe_NombreOferente = $(e).find("ofe_NombreOferente").text();

                if (dim_DimensionIdSeleccion == dim_DimensionId) {
                    if (items.indexOf(ofe_OfertaId) <= 0) {
                        items = items + "<li data-icon='false' class='ui-nodisc-icon ui-alt-icon' id='li_" + ofe_OfertaId + "_1' ><a href='#" + ofe_OfertaId + "_1'  value ='' ><img src='" + imgSeleccionImagen(dim_DimensionIdSeleccion) + "' style='width: 100%; margin: 1%' /> <h1 class='wrap'>" + ofe_NombreOferta.toUpperCase() + "</h1><p>" + ofe_NombreOferente.toUpperCase() + "</p></a></li>";
                        items = items + "<script> $('#li_" + ofe_OfertaId + "_1').click(function () { localStorage.setItem('ofe_OfertaId', " + ofe_OfertaId + "); filtrarOfertas(" + ofe_OfertaId + ", 1 ); });</script>";
                    }
                }
            });

    items = items + "<ul/>";
    var container = document.getElementById("ListaContenidoOfertasUsuario");
    $(container).append(items)

    $("#eventList_ListaContenidoOfertasUsuario").listview();

}

function filtrarOfertas(IdOferta, idModal) {

    $('#tmpAlgo').html('');

    var dim_DimensionIdSeleccion = localStorage.getItem('dim_DimensionId');
    var items = "";
    var ofertasUsuario = localStorage.getItem('OfertasUsuario_OfertAPP');
    var ofe_OfertaIdSeleccion = localStorage.getItem('ofe_OfertaId');

    $(ofertasUsuario).find("SP_SELECT_OFERTAS_DISPONIBLES_DETALLE_USUARIO").each(
            function (i, e) {

                var dim_DimensionId = $(e).find("dim_DimensionId").text();
                var dim_NombreDimension = $(e).find("dim_NombreDimension").text();
                var ofe_OfertaId = $(e).find("ofe_OfertaId").text();
                var ora_Descripcion = $(e).find("ora_Descripcion").text();
                var tpo_Descripcion = $(e).find("tpo_Descripcion").text();
                var ofe_NombreOferente = $(e).find("ofe_NombreOferente").text();
                var ofe_NombreOferta = $(e).find("ofe_NombreOferta").text();
                var ofe_NombreOfertaCorto = $(e).find("ofe_NombreOfertaCorto").text();
                var log_LogroId = $(e).find("log_LogroId").text();
                var ofd_Cupos = $(e).find("ofd_Cupos").text();
                var ben_Descripcion = $(e).find("ben_Descripcion").text();
                var ofe_DescripcionOferta = $(e).find("ofe_DescripcionOferta").text();
                var ofe_TipOferta = $(e).find("ofe_TipOferta").text();
                var ofd_LugarOferta = $(e).find("ofd_LugarOferta").text();
                var dof_FechaIniVigencia = $(e).find("dof_FechaIniVigencia").text();
                var dof_FechaFinVigencia = $(e).find("dof_FechaFinVigencia").text();
                var ofd_HoraInicio = $(e).find("ofd_HoraInicio").text();
                var ofd_HoraFin = $(e).find("ofd_HoraFin").text();
                var ofe_RequisitosOferta = $(e).find("ofe_RequisitosOferta").text();
                var dof_MasInformacion = $(e).find("dof_MasInformacion").text();

                if (ofe_OfertaIdSeleccion === ofe_OfertaId) {


                    items = items + "<div data-role='popup' id='" + ofe_OfertaId + "_" + idModal + "' data-theme='b' style='top: 0%; left: 0%; right: 0%; width: 100%; height: 100%; position: fixed; overflow-y:auto; overflow-x:hidden; background-color:rgba(0, 0, 0, 0.80); display:none; z-index:1000'>";
                    items = items + "<center><img src='" + imgSeleccionImagen(dim_DimensionIdSeleccion) + "' style='max-width:100%; margin:2% 1px; ' /></center>";
                    items = items + "<h2 style='text-wrap:normal; text-align:center; color:white; border-color:transparent'>Oferta de " + dim_NombreDimension.toUpperCase() + "</h2>";
                    items = items + "<div data-role='collapsible-set' id='" + ofe_OfertaId + "_CSet' data-mini='true' class='ui-nodisc-icon ui-alt-icon' data-theme='a' style='width: 90%; margin-left:5%; margin-right:5%;'>";

                    items = items + "<div data-role='collapsible' data-collapsed='false'>";
                    items = items + "<h3>Información</h3>";
                    items = items + "<p style='text-wrap:normal'>" + ora_Descripcion + " - " + ofe_NombreOferente + " - " + tpo_Descripcion + "</p>";
                    items = items + "<h3>" + ofe_NombreOfertaCorto + "</h3>";
                    items = items + "<p style='text-wrap:normal'>Logro(s): " + log_LogroId + " - Cupo(s): " + ofd_Cupos + "</p>";
                    items = items + "</div>";

                    items = items + "<div data-role='collapsible'>";
                    items = items + "<h3>¿Para quienes?</h3>";
                    items = items + "<p style='text-wrap:normal; text-align:justify'>" + ben_Descripcion + "</p>";
                    items = items + "</div>";

                    items = items + "<div data-role='collapsible'>";
                    items = items + "<h3>¿Qué es?</h3>";
                    items = items + "<p style='text-wrap:normal'>" + ofe_NombreOferta + " " + ofe_DescripcionOferta + "</p>";
                    items = items + "</div>";

                    items = items + "<div data-role='collapsible'>";
                    items = items + "<h3>★ Tips</h3>";
                    items = items + "<p style='text-wrap:normal'>" + ofe_TipOferta + "</p>";
                    items = items + "</div>";

                    items = items + "<div data-role='collapsible'>";
                    items = items + "<h3>¿Dónde?</h3>";
                    items = items + "<p style='text-wrap:normal'>" + ofd_LugarOferta + "</p>";
                    items = items + "</div>";

                    items = items + "<div data-role='collapsible'>";
                    items = items + "<h3>¿Cuándo?</h3>";
                    items = items + "<p style='text-wrap:normal'>Fecha de inicio: " + dof_FechaIniVigencia + "</p>";
                    items = items + "<p style='text-wrap:normal'>Fecha de finalización: " + dof_FechaFinVigencia + "</p>";
                    items = items + "<br />";
                    items = items + "<p style='text-wrap:normal'>Hora de inicio: " + ofd_HoraInicio + "</p>";
                    items = items + "<p style='text-wrap:normal'>Hora de finalización: " + ofd_HoraFin + "</p>";
                    items = items + "</div>";

                    items = items + "<div data-role='collapsible'>";
                    items = items + "<h3>¿Requisitos?</h3>";
                    items = items + "<p style='text-wrap:normal'>" + ofe_RequisitosOferta + "</p>";
                    items = items + "</div>";

                    items = items + "<div data-role='collapsible'>";
                    items = items + "<h3>Más Información</h3>";
                    items = items + "<p style='text-wrap:normal'>" + dof_MasInformacion + "</p>";
                    items = items + "</div>";

                    items = items + "</div>";
                    items = items + "<div data-role='navbar' id='" + ofe_OfertaId + "_" + idModal + "' class='ui-nodisc-icon' style='margin:1% 5%;'>";
                    items = items + "<ul data-mini='true'>";
                    items = items + "<li id='li_cerrar" + ofe_OfertaId + "_" + idModal + "'><a href='detalleOferta.html' data-theme='b' style='border: none; margin: 1px 5%; background-color: rgba(139, 0, 0, 0.80); ' data-icon='delete'>Cerrar</a></li>";
                    items = items + "</ul>";
                    items = items + "</div>";
                    items = items + "</div>";
                    items = items + "<script> $('#li_cerrar" + ofe_OfertaId + "_" + idModal + "').click(function () {  $('#" + ofe_OfertaId + "_" + idModal + "').css('display', 'none');});</script>";
                    return;
                }
            }
        );

    items = items + "";

    var container = document.getElementById("tmpAlgo");
    $(container).append(items)

    $("div[id$='Pref']").popup();
    $("div[id$='_CSet']").collapsibleset();
    $("div[id$='_" + idModal + "']").navbar();

    $("#" + ofe_OfertaIdSeleccion + "_" + idModal).css('display', 'block');
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



