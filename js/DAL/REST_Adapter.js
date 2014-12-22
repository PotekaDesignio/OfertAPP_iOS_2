jQuery.support.cors = true;

function CargarOfertasDisponiblesMOR() {

    //delete window.localStorage["resultado"];

    jQuery.support.cors = true;
    // Obtener el objeto del local storage
    var retrievedObject = localStorage.getItem('resultado');

    if (retrievedObject == null) {
        $.ajax(
               {
                   type: "GET",
                   url: 'http://servicedatosabiertoscolombia.cloudapp.net/v1/anspe/dataofertapp?$format=json&callback=?',
                   data: "",
                   contentType: "application/json; charset=utf-8",
                   dataType: "json",
                   success: function (data) {

                       ObtenerLocalStorageNumeroOfertas(data);
                       localStorage.setItem('resultado', JSON.stringify(data));
                   },
                   error: function (msg, url, line) {
                       alert('error trapped in error: function(msg, url, line)');
                       alert('msg = ' + msg + ', url = ' + url + ', line = ' + line);

                   }
               });
    }
    else {
        ObtenerLocalStorageNumeroOfertas(JSON.parse(retrievedObject));
    }

}

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
            console.log(rr);
            switch (rr) {
                case "identificacion": identificacion++;
                    if (identificacion == 1)
                        items = items + "<li data-icon='plus' class='ui-nodisc-icon ui-alt-icon' id='li_" + rr + "_1' ><a href='#" + rr + "_1'  value =" + rr + " ><img src='images/buttons/p1_identificacion-12.png' style='margin:10px; height: 60px; width: 60px;' /> <h1 class='wrap'>" + rr.toUpperCase() + "</h1><p>Hay Información Publicada</p></a></li>";
                    break;
                case "ingresos y trabajo": ingresos++;
                    if (ingresos == 1)
                        items = items + "<li data-icon='plus' class='ui-nodisc-icon ui-alt-icon' id='li_" + rr + "_1' ><a href='#" + rr + "_1'  value =" + rr + " ><img src='images/buttons/p2_trabajo-12.png' style='margin:10px; height: 60px; width: 60px;' /> <h1 class='wrap'>" + rr.toUpperCase() + "</h1><p>Hay Información Publicada</p></a></li>";
                    break;
                case "educacion": educacion++;
                    if (educacion == 1)
                        items = items + "<li data-icon='plus' class='ui-nodisc-icon ui-alt-icon' id='li_" + rr + "_1' ><a href='#" + rr + "_1'  value =" + rr + " ><img src='images/buttons/p3_educacion-12.png' style='margin:10px; height: 60px; width: 60px;' /> <h1 class='wrap'>" + rr.toUpperCase() + "</h1><p>Hay Información Publicada</p></a></li>";
                    break;
                case "salud": salud++;
                    if (salud == 1)
                        items = items + "<li data-icon='plus' class='ui-nodisc-icon ui-alt-icon' id='li_" + rr + "_1' ><a href='#" + rr + "_1'  value =" + rr + " ><img src='images/buttons/p4_salud-12-12.png' style='margin:10px; height: 60px; width: 60px;' /> <h1 class='wrap'>" + rr.toUpperCase() + "</h1><p>Hay Información Publicada</p></a></li>";
                    break;
                case "nutricion": nutricion++;
                    if (nutricion == 1)
                        items = items + "<li data-icon='plus' class='ui-nodisc-icon ui-alt-icon' id='li_" + rr + "_1' ><a href='#" + rr + "_1'  value =" + rr + " ><img src='images/buttons/p5_nutricion-12.png' style='margin:10px; height: 60px; width: 60px;' /> <h1 class='wrap'>" + rr.toUpperCase() + "</h1><p>Hay Información Publicada</p></a></li>";
                    break;
                case "habitabilidad": habitabilidad++;
                    if (habitabilidad == 1)
                        items = items + "<li data-icon='plus' class='ui-nodisc-icon ui-alt-icon' id='li_" + rr + "_1' ><a href='#" + rr + "_1'  value =" + rr + " ><img src='images/buttons/p6_habitabilidad-12.png' style='margin:10px; height: 60px; width: 60px;' /> <h1 class='wrap'>" + rr.toUpperCase() + "</h1><p>Hay Información Publicada</p></a></li>";
                    break;
                case "dinamica familiar": dinamica++;
                    if (dinamica == 1)
                        items = items + "<li data-icon='plus' class='ui-nodisc-icon ui-alt-icon' id='li_" + rr + "_1' ><a href='#" + rr + "_1'  value =" + rr + " ><img src='images/buttons/p7_familia-12.png' style='margin:10px; height: 60px; width: 60px;' /> <h1 class='wrap'>" + rr.toUpperCase() + "</h1><p>Hay Información Publicada</p></a></li>";
                    break;
                case "bancarizacion": banca++;
                    if (banca == 1)
                        items = items + "<li data-icon='plus' class='ui-nodisc-icon ui-alt-icon' id='li_" + rr + "_1' ><a href='#" + rr + "_1'  value =" + rr + " ><img src='images/buttons/p8_banca-12.png' style='margin:10px; height: 60px; width: 60px;' /> <h1 class='wrap'>" + rr.toUpperCase() + "</h1><p>Hay Información Publicada</p></a></li>";
                    break;
                case "justicia": justicia++;
                    if (justicia == 1)
                        items = items + "<li data-icon='plus' class='ui-nodisc-icon ui-alt-icon' id='li_" + rr + "_1' ><a href='#" + rr + "_1'  value =" + rr + " ><img src='images/buttons/p9_justicia-12.png' style='margin:10px; height: 60px; width: 60px;' /> <h1 class='wrap'>" + rr.toUpperCase() + "</h1><p>Hay Información Publicada</p></a></li>";
                    break;
                case "primera infancia": primeraInfancia++;
                    if (primeraInfancia == 1)
                        items = items + "<li data-icon='plus' class='ui-nodisc-icon ui-alt-icon' id='li_" + rr + "_1' ><a href='#" + rr + "_1'  value =" + rr + " ><img src='images/buttons/p10_infancia-12.png' style='margin:10px; height: 60px; width: 60px;' /> <h1 class='wrap'>" + rr.toUpperCase() + "</h1><p>Hay Información Publicada</p></a></li>";
                    break;
                case "comunitario": comunitario++;
                    if (comunitario == 1)
                        items = items + "<li data-icon='plus' class='ui-nodisc-icon ui-alt-icon' id='li_" + rr + "_1' ><a href='#" + rr + "_1'  value =" + rr + " ><img src='images/buttons/p11_comunitario-12.png' style='margin:10px; height: 60px; width: 60px;' /> <h1 class='wrap'>" + rr.toUpperCase() + "</h1><p>Hay Información Publicada</p></a></li>";
                    break;
            }

        }
    });

    items = items + "<ul/>";
    var container = document.getElementById("ListaContenidoMOR");
    $(container).append(items)

    $("#eventList_ListaContenidoMOR").listview();
}
