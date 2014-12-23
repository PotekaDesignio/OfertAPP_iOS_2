$(document).ready(function () {
    CargarOfertasDisponiblesMOR();
});

function ObtenerLocalStorageNumeroOfertas(data) {

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

    $.each(data, function (i, theItem) {
        for (var key in theItem) {
            var rr = theItem[key].dimension.toString();
            var rrRepl = rr.replace(/ /g, "");
            switch (rrRepl) {
                case "identificacion":
                    identificacion++;
                    if (identificacion == 1) {
                        items = items + "<li data-icon='plus' class='ui-nodisc-icon ui-alt-icon' id='li_" + rrRepl + "_1' ><a href='#'  value ='' ><img src='images/buttons/p1_identificacion-12.png' style='width: 100%; margin: 1%' /> <h1 class='wrap'>" + rr.toUpperCase() + "</h1><p>Hay Información Publicada</p></a></li>";
                        items = items + "<script> $('#li_" + rrRepl + "_1').click(function () { localStorage.setItem('dim_NombreDimensionMOR', '" + rrRepl + "'); window.location = 'detalleOfertaMOR.html';  });</script>";
                    }
                    break;
                case "ingresosytrabajo":
                    ingresos++;
                    if (ingresos == 1) {
                        items = items + "<li data-icon='plus' class='ui-nodisc-icon ui-alt-icon' id='li_" + rrRepl + "_1' ><a href='#'  value ='' ><img src='images/buttons/p2_trabajo-12.png' style='width: 100%; margin: 1%' /> <h1 class='wrap'>" + rr.toUpperCase() + "</h1><p>Hay Información Publicada</p></a></li>";
                        items = items + "<script> $('#li_" + rrRepl + "_1').click(function () { localStorage.setItem('dim_NombreDimensionMOR', '" + rrRepl + "'); window.location = 'detalleOfertaMOR.html';  });</script>";
                    }
                    break;
                case "educacion":
                    educacion++;
                    if (educacion == 1) {
                        items = items + "<li data-icon='plus' class='ui-nodisc-icon ui-alt-icon' id='li_" + rrRepl + "_1' ><a href='#'  value ='' ><img src='images/buttons/p3_educacion-12.png' style='width: 100%; margin: 1%' /> <h1 class='wrap'>" + rr.toUpperCase() + "</h1><p>Hay Información Publicada</p></a></li>";
                        items = items + "<script> $('#li_" + rrRepl + "_1').click(function () { localStorage.setItem('dim_NombreDimensionMOR', '" + rrRepl + "'); window.location = 'detalleOfertaMOR.html';  });</script>";
                    }
                    break;
                case "salud":
                    salud++;
                    if (salud == 1) {
                        items = items + "<li data-icon='plus' class='ui-nodisc-icon ui-alt-icon' id='li_" + rrRepl + "_1' ><a href='#'  value ='' ><img src='images/buttons/p4_salud-12-12.png' style='width: 100%; margin: 1%' /> <h1 class='wrap'>" + rr.toUpperCase() + "</h1><p>Hay Información Publicada</p></a></li>";
                        items = items + "<script> $('#li_" + rrRepl + "_1').click(function () { localStorage.setItem('dim_NombreDimensionMOR', '" + rrRepl + "'); window.location = 'detalleOfertaMOR.html';  });</script>";
                    }
                    break;
                case "nutricion":
                    nutricion++;
                    if (nutricion == 1) {
                        items = items + "<li data-icon='plus' class='ui-nodisc-icon ui-alt-icon' id='li_" + rrRepl + "_1' ><a href='#'  value ='' ><img src='images/buttons/p5_nutricion-12.png' style='width: 100%; margin: 1%' /> <h1 class='wrap'>" + rr.toUpperCase() + "</h1><p>Hay Información Publicada</p></a></li>";
                        items = items + "<script> $('#li_" + rrRepl + "_1').click(function () { localStorage.setItem('dim_NombreDimensionMOR', '" + rrRepl + "'); window.location = 'detalleOfertaMOR.html';  });</script>";
                    }
                    break;
                case "habitabilidad":
                    habitabilidad++;
                    if (habitabilidad == 1) {
                        items = items + "<li data-icon='plus' class='ui-nodisc-icon ui-alt-icon' id='li_" + rrRepl + "_1' ><a href='#'  value ='' ><img src='images/buttons/p6_habitabilidad-12.png' style='width: 100%; margin: 1%' /> <h1 class='wrap'>" + rr.toUpperCase() + "</h1><p>Hay Información Publicada</p></a></li>";
                        items = items + "<script> $('#li_" + rrRepl + "_1').click(function () { localStorage.setItem('dim_NombreDimensionMOR', '" + rrRepl + "'); window.location = 'detalleOfertaMOR.html';  });</script>";
                    }
                    break;
                case "dinamicafamiliar":
                    dinamica++;
                    if (dinamica == 1) {
                        items = items + "<li data-icon='plus' class='ui-nodisc-icon ui-alt-icon' id='li_" + rrRepl + "_1' ><a href='#'  value ='' ><img src='images/buttons/p7_familia-12.png' style='width: 100%; margin: 1%' /> <h1 class='wrap'>" + rr.toUpperCase() + "</h1><p>Hay Información Publicada</p></a></li>";
                        items = items + "<script> $('#li_" + rrRepl + "_1').click(function () { localStorage.setItem('dim_NombreDimensionMOR', '" + rrRepl + "'); window.location = 'detalleOfertaMOR.html';  });</script>";
                    }
                    break;
                case "bancarizacion":
                    banca++;
                    if (banca == 1) {
                        items = items + "<li data-icon='plus' class='ui-nodisc-icon ui-alt-icon' id='li_" + rrRepl + "_1' ><a href='#'  value ='' ><img src='images/buttons/p8_banca-12.png' style='width: 100%; margin: 1%' /> <h1 class='wrap'>" + rr.toUpperCase() + "</h1><p>Hay Información Publicada</p></a></li>";
                        items = items + "<script> $('#li_" + rrRepl + "_1').click(function () { localStorage.setItem('dim_NombreDimensionMOR', '" + rrRepl + "'); window.location = 'detalleOfertaMOR.html';  });</script>";
                    }
                    break;
                case "justicia":
                    justicia++;
                    if (justicia == 1) {
                        items = items + "<li data-icon='plus' class='ui-nodisc-icon ui-alt-icon' id='li_" + rrRepl + "_1' ><a href='#'  value ='' ><img src='images/buttons/p9_justicia-12.png' style='width: 100%; margin: 1%' /> <h1 class='wrap'>" + rr.toUpperCase() + "</h1><p>Hay Información Publicada</p></a></li>";
                        items = items + "<script> $('#li_" + rrRepl + "_1').click(function () { localStorage.setItem('dim_NombreDimensionMOR', '" + rrRepl + "'); window.location = 'detalleOfertaMOR.html';  });</script>";
                    }
                    break;
                case "primerainfancia":
                    primeraInfancia++;
                    if (primeraInfancia == 1) {
                        items = items + "<li data-icon='plus' class='ui-nodisc-icon ui-alt-icon' id='li_" + rrRepl + "_1' ><a href='#'  value ='' ><img src='images/buttons/p10_infancia-12.png' style='width: 100%; margin: 1%' /> <h1 class='wrap'>" + rr.toUpperCase() + "</h1><p>Hay Información Publicada</p></a></li>";
                        items = items + "<script> $('#li_" + rrRepl + "_1').click(function () { localStorage.setItem('dim_NombreDimensionMOR', '" + rrRepl + "'); window.location = 'detalleOfertaMOR.html';  });</script>";
                    }
                    break;
                case "comunitario":
                    comunitario++;
                    if (comunitario == 1) {
                        items = items + "<li data-icon='plus' class='ui-nodisc-icon ui-alt-icon' id='li_" + rrRepl + "_1' ><a href='#'  value ='' ><img src='images/buttons/p11_comunitario-12.png' style='width: 100%; margin: 1%' /> <h1 class='wrap'>" + rr.toUpperCase() + "</h1><p>Hay Información Publicada</p></a></li>";
                        items = items + "<script> $('#li_" + rrRepl + "_1').click(function () { localStorage.setItem('dim_NombreDimensionMOR', '" + rrRepl + "'); window.location = 'detalleOfertaMOR.html';  });</script>";
                    }
                    break;
            }
        }
    });

    items = items + "<ul/>";
    var container = document.getElementById("ListaContenidoMOR");
    $(container).append(items)

    $("#eventList_ListaContenidoMOR").listview();
}