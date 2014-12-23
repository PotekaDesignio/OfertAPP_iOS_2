jQuery.support.cors = true;

function CargarOfertasDisponiblesMOR() {

    //delete window.localStorage["resultado"];

    jQuery.support.cors = true;
    // Obtener el objeto del local storage
    var retrievedObject = localStorage.getItem('OfertasMOR_OfertAPP');

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
                       localStorage.setItem('OfertasMOR_OfertAPP', JSON.stringify(data));
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
