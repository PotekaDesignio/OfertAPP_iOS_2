$(document).ready(function () {
    CargarOfertasDisponiblesMOR();
});

function ObtenerLocalStorageNumeroOfertas(data) {

    var items = "<ul id='eventList_ListaContenidoMOR' data-role='listview' data-inset ='true' class'ui-nodisc-icon ui-alt-icon'>";
    var dim_DimensionIdSeleccion = localStorage.getItem('dim_NombreDimensionMOR');



    $.each(data, function (i, theItem) {
        for (var key in theItem) {
            var rr = theItem[key].dimension.toString();
            var rrRepl = rr.replace(/ /g, "");

            var numTemp = theItem[key].numero.toString();
            //console.log(numTemp);
            var numero = numTemp.replace(".", "");
            var oferta = theItem[key].oferta.toString();
            var entidad = theItem[key].entidad.toString();

            if (dim_DimensionIdSeleccion == rrRepl) {
                items = items + "<li data-icon='plus' class='ui-nodisc-icon ui-alt-icon' id='li_" + numero + "_1' ><a href='#" + numero + "_1'  value ='' ><img src='" + imgSeleccionImagen(dim_DimensionIdSeleccion) + "' style='width: 100%; margin: 1%' /> <h1 class='wrap'>" + oferta.toUpperCase() + "</h1><p>" + entidad.toUpperCase() + "</p></a></li>";
                items = items + "<script> $('#li_" + numero + "_1').click(function () { localStorage.setItem('ofe_OfertaIdMOR', " + numero + "); filtrarOfertas('" + numero + "', '1' ); });</script>";
            }
        }
    });

    items = items + "<ul/>";
    //console.log(items);
    var container = document.getElementById("ListaContenidoMOR");
    $(container).append(items)

    $("#eventList_ListaContenidoMOR").listview();
}

function filtrarOfertas(IdOferta, idModal) {

    $('#tmpAlgo').html('');
    //alert("test");

    var retrievedObject = localStorage.getItem('OfertasMOR_OfertAPP');
    var dim_DimensionIdSeleccion = localStorage.getItem('dim_NombreDimensionMOR');
    var data = JSON.parse(retrievedObject);

    var items = "";
    var ofe_OfertaIdSeleccion = localStorage.getItem('ofe_OfertaIdMOR');

    $.each(data, function (i, theItem) {
        for (var key in theItem) {

            var ofe_OfertaIdTmp = theItem[key].numero.toString();
            var ofe_OfertaId = ofe_OfertaIdTmp.replace(".", "");
            var dim_NombreDimension = theItem[key].dimension.toString();
            var ofe_NombreOferente = theItem[key].entidad.toString();
            var ofe_NombreOferta = theItem[key].oferta.toString();
            var log_LogroId = theItem[key].logro.toString();
            var ben_Descripcion = theItem[key].paraquien.toString();
            var ofe_DescripcionOferta = theItem[key].quees.toString();

            var ofe_TipOferta = theItem[key].tip.toString();
            var ofd_LugarOferta = theItem[key].donde.toString();

            var ofe_RequisitosOferta = theItem[key].requisitos.toString();

            console.log(ofe_OfertaId);
            console.log(ofe_OfertaIdSeleccion);

            if (ofe_OfertaIdSeleccion == ofe_OfertaId) {
                console.log("entra");
                items = items + "<div data-role='popup' id='" + ofe_OfertaId + "_" + idModal + "' data-theme='b' style='top: 0%; left: 0%; right: 0%; width: 100%; height: 100%; position: fixed; overflow-y:auto; overflow-x:hidden; background-color:rgba(0, 0, 0, 0.80); display:none; z-index:1000'>";
                items = items + "<center><img src='" + imgSeleccionImagen(dim_DimensionIdSeleccion) + "' style='max-width:100%; margin:2% 1px; ' /></center>";
                items = items + "<h2 style='text-wrap:normal; text-align:center; color:white; border-color:transparent'>Oferta de " + dim_NombreDimension.toUpperCase() + "</h2>";
                items = items + "<div data-role='collapsible-set' id='" + ofe_OfertaId + "_CSet' data-mini='true' class='ui-nodisc-icon ui-alt-icon' data-theme='a' style='width: 90%; margin-left:5%; margin-right:5%;'>";

                items = items + "<div data-role='collapsible' data-collapsed='false'>";
                items = items + "<h3>Información</h3>";
                items = items + "<p style='text-wrap:normal; text-transform: capitalize;'>" + ofe_NombreOferente + "</p>";
                items = items + "<h3 style='text-transform: capitalize !important;'>" + ofe_NombreOferta + "</h3>";
                items = items + "<p style='text-wrap:normal'>Logro(s): " + log_LogroId + "</p>";
                items = items + "</div>";

                items = items + "<div data-role='collapsible'>";
                items = items + "<h3>¿Para quienes?</h3>";
                items = items + "<p style='text-wrap:normal; text-align:justify; text-transform: capitalize;'>" + ben_Descripcion + "</p>";
                items = items + "</div>";

                items = items + "<div data-role='collapsible'>";
                items = items + "<h3>¿Qué es?</h3>";
                items = items + "<p style='text-wrap:normal; text-transform: capitalize;'>" + ofe_DescripcionOferta + "</p>";
                items = items + "</div>";

                items = items + "<div data-role='collapsible'>";
                items = items + "<h3>★ Tips</h3>";
                items = items + "<p style='text-wrap:normal; text-transform: capitalize;'>" + ofe_TipOferta + "</p>";
                items = items + "</div>";

                items = items + "<div data-role='collapsible'>";
                items = items + "<h3>¿Dónde?</h3>";
                items = items + "<p style='text-wrap:normal; text-transform: capitalize;'>" + ofd_LugarOferta + "</p>";
                items = items + "</div>";

                items = items + "<div data-role='collapsible'>";
                items = items + "<h3>¿Requisitos?</h3>";
                items = items + "<p style='text-wrap:normal; text-transform: capitalize;'>" + ofe_RequisitosOferta + "</p>";
                items = items + "</div>";

                items = items + "</div>";
                items = items + "<div data-role='navbar' id='" + ofe_OfertaId + "_" + idModal + "' class='ui-nodisc-icon' style='margin:1% 5%;'>";
                items = items + "<ul data-mini='true'>";
                items = items + "<li id='li_cerrar" + ofe_OfertaId + "_" + idModal + "'><a href='detalleOfertaMOR.html' data-theme='b' style='border: none; margin: 1px 5%; background-color: rgba(139, 0, 0, 0.80); ' data-icon='delete'>Cerrar</a></li>";
                items = items + "</ul>";
                items = items + "</div>";
                items = items + "</div>";
                items = items + "<script> $('#li_cerrar" + ofe_OfertaId + "_" + idModal + "').click(function () {  $('#" + ofe_OfertaId + "_" + idModal + "').css('display', 'none');});</script>";
                return;
            }
        }
    });

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
        case "identificacion":
            img = 'images/buttons/p1_identificacion-12.png';
            break;
        case "ingresosytrabajo":
            img = 'images/buttons/p2_trabajo-12.png';
            break;
        case "educacion":
            img = 'images/buttons/p3_educacion-12.png';
            break;
        case "salud":
            img = 'images/buttons/p4_salud-12-12.png';
            break;
        case "nutricion":
            img = 'images/buttons/p5_nutricion-12.png';
            break;
        case "habitabilidad":
            img = 'images/buttons/p6_habitabilidad-12.png';
            break;
        case "dinamicafamiliar":
            img = 'images/buttons/p7_familia-12.png';
            break;
        case "bancarizacion":
            img = 'images/buttons/p8_banca-12.png';
            break;
        case "justicia":
            img = 'images/buttons/p9_justicia-12.png';
            break;
        case "primerainfancia":
            img = 'images/buttons/p10_infancia-12.png';
            break;
        case "comunitario":
            img = 'images/buttons/p11_comunitario-12.png';
            break;
    }
    return img;
}