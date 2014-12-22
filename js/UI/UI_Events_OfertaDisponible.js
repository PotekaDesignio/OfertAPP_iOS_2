
$(document).ready(function () {
    CargarOfertasVigentes();
});

function CargarOfertasVigentes() {
    var ofertasUsuario = localStorage.getItem('OfertasUsuario_OfertAPP');

    var items = "<ul id='eventList_ListaContenidoMOR' data-role='listview' data-inset ='true' class'ui-nodisc-icon ui-alt-icon'>";

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


    $(ofertasUsuario).find("SP_SELECT_OFERTAS_DISPONIBLES_DETALLE_USUARIO").each(
            function (i, e) {
                var dim_DimensionId = $(e).find("dim_DimensionId").text();
                var dim_NombreDimension = $(e).find("dim_NombreDimension").text();

                switch (dim_DimensionId) {
                    case "1": identificacion++;
                        if (identificacion == 1)
                            items = items + "<li data-icon='plus' class='ui-nodisc-icon ui-alt-icon' id='li_" + dim_NombreDimension + "_1' ><a href='#" + dim_NombreDimension + "_1'  value =" + dim_NombreDimension + " ><img src='images/buttons/p1_identificacion-12.png' style='width: 100%; margin: 1%' /> <h1 class='wrap'>" + dim_NombreDimension.toUpperCase() + "</h1><p>Hay Información Publicada</p></a></li>";
                        break;
                    case "2": ingresos++;
                        if (ingresos == 1)
                            items = items + "<li data-icon='plus' class='ui-nodisc-icon ui-alt-icon' id='li_" + dim_NombreDimension + "_1' ><a href='#" + dim_NombreDimension + "_1'  value =" + dim_NombreDimension + " ><img src='images/buttons/p2_trabajo-12.png' style='width: 100%; margin: 1%' /> <h1 class='wrap'>" + dim_NombreDimension.toUpperCase() + "</h1><p>Hay Información Publicada</p></a></li>";
                        break;
                    case "3": educacion++;
                        if (educacion == 1)
                            items = items + "<li data-icon='plus' class='ui-nodisc-icon ui-alt-icon' id='li_" + dim_NombreDimension + "_1' ><a href='#" + dim_NombreDimension + "_1'  value =" + dim_NombreDimension + " ><img src='images/buttons/p3_educacion-12.png' style='width: 100%; margin: 1%' /> <h1 class='wrap'>" + dim_NombreDimension.toUpperCase() + "</h1><p>Hay Información Publicada</p></a></li>";
                        break;
                    case "4": salud++;
                        if (salud == 1)
                            items = items + "<li data-icon='plus' class='ui-nodisc-icon ui-alt-icon' id='li_" + dim_NombreDimension + "_1' ><a href='#" + dim_NombreDimension + "_1'  value =" + dim_NombreDimension + " ><img src='images/buttons/p4_salud-12-12.png' style='width: 100%; margin: 1%' /> <h1 class='wrap'>" + dim_NombreDimension.toUpperCase() + "</h1><p>Hay Información Publicada</p></a></li>";
                        break;
                    case "5": nutricion++;
                        if (nutricion == 1)
                            items = items + "<li data-icon='plus' class='ui-nodisc-icon ui-alt-icon' id='li_" + dim_NombreDimension + "_1' ><a href='#" + dim_NombreDimension + "_1'  value =" + dim_NombreDimension + " ><img src='images/buttons/p5_nutricion-12.png' style='width: 100%; margin: 1%' /> <h1 class='wrap'>" + dim_NombreDimension.toUpperCase() + "</h1><p>Hay Información Publicada</p></a></li>";
                        break;
                    case "6": habitabilidad++;
                        if (habitabilidad == 1)
                            items = items + "<li data-icon='plus' class='ui-nodisc-icon ui-alt-icon' id='li_" + dim_NombreDimension + "_1' ><a href='#" + dim_NombreDimension + "_1'  value =" + dim_NombreDimension + " ><img src='images/buttons/p6_habitabilidad-12.png' style='width: 100%; margin: 1%' /> <h1 class='wrap'>" + dim_NombreDimension.toUpperCase() + "</h1><p>Hay Información Publicada</p></a></li>";
                        break;
                    case "7": dinamica++;
                        if (dinamica == 1)
                            items = items + "<li data-icon='plus' class='ui-nodisc-icon ui-alt-icon' id='li_" + dim_NombreDimension + "_1' ><a href='#" + dim_NombreDimension + "_1'  value =" + dim_NombreDimension + " ><img src='images/buttons/p7_familia-12.png' style='width: 100%; margin: 1%' /> <h1 class='wrap'>" + dim_NombreDimension.toUpperCase() + "</h1><p>Hay Información Publicada</p></a></li>";
                        break;
                    case "8": banca++;
                        if (banca == 1)
                            items = items + "<li data-icon='plus' class='ui-nodisc-icon ui-alt-icon' id='li_" + dim_NombreDimension + "_1' ><a href='#" + dim_NombreDimension + "_1'  value =" + dim_NombreDimension + " ><img src='images/buttons/p8_banca-12.png' style='width: 100%; margin: 1%' /> <h1 class='wrap'>" + dim_NombreDimension.toUpperCase() + "</h1><p>Hay Información Publicada</p></a></li>";
                        break;
                    case "9": justicia++;
                        if (justicia == 1)
                            items = items + "<li data-icon='plus' class='ui-nodisc-icon ui-alt-icon' id='li_" + dim_NombreDimension + "_1' ><a href='#" + dim_NombreDimension + "_1'  value =" + dim_NombreDimension + " ><img src='images/buttons/p9_justicia-12.png' style='width: 100%; margin: 1%' /> <h1 class='wrap'>" + dim_NombreDimension.toUpperCase() + "</h1><p>Hay Información Publicada</p></a></li>";
                        break;
                    case "10": primeraInfancia++;
                        if (primeraInfancia == 1)
                            items = items + "<li data-icon='plus' class='ui-nodisc-icon ui-alt-icon' id='li_" + dim_NombreDimension + "_1' ><a href='#" + dim_NombreDimension + "_1'  value =" + dim_NombreDimension + " ><img src='images/buttons/p10_infancia-12.png' style='width: 100%; margin: 1%' /> <h1 class='wrap'>" + dim_NombreDimension.toUpperCase() + "</h1><p>Hay Información Publicada</p></a></li>";
                        break;
                    case "11": comunitario++;
                        if (comunitario == 1)
                            items = items + "<li data-icon='plus' class='ui-nodisc-icon ui-alt-icon' id='li_" + dim_NombreDimension + "_1' ><a href='#" + dim_NombreDimension + "_1'  value =" + dim_NombreDimension + " ><img src='images/buttons/p11_comunitario-12.png' style='width: 100%; margin: 1%' /> <h1 class='wrap'>" + dim_NombreDimension.toUpperCase() + "</h1><p>Hay Información Publicada</p></a></li>";
                        break;
                }
            });

    items = items + "<ul/>";
    var container = document.getElementById("ListaContenidoOfertasUsuario");
    $(container).append(items)

    $("#eventList_ListaContenidoOfertasUsuario").listview();

}


