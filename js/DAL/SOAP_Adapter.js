
function ObtenerDepartamentos() {
    var wsUrl = "http://mssql-2014.cloudapp.net:1213/wsofertapp.asmx?op=ObtenerDepartamentosXML";

    var soapRequest =
                '<?xml version="1.0" encoding="utf-8"?> \
                <soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" \
                    xmlns:xsd="http://www.w3.org/2001/XMLSchema" \
                    xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"> \
                    <soap:Body> \
                        <ObtenerDepartamentosXML xmlns="http://mssql-2014.cloudapp.net:1213/wsOfertAPP.asmx/ObtenerDepartamentosXML" /> \
                    </soap:Body> \
                </soap:Envelope>';

    $.ajax({
        type: "POST",
        url: wsUrl,
        contentType: "text/xml",
        headers: {
            SOAPAction: 'http://mssql-2014.cloudapp.net:1213/wsOfertAPP.asmx/ObtenerDepartamentosXML'
        },
        dataType: "xml",
        data: soapRequest,
        success: processSuccessDepartamentos,
        error: processErrorDepartamentos
    });
}

function processSuccessDepartamentos(data, status, req) {
    if (status == "success") {

        $(req.responseText).find("SP_DEPARTAMENTO_SELECT").each(
            function (i, e) {
                console.log($(e).find("dep_CodigoDepartamentoDANE").text());
                console.log($(e).find("dep_NombreDepartamento").text());
                $(document.createElement('option')).attr('value', $(e).find("dep_CodigoDepartamentoDANE").text()).text($(e).find("dep_NombreDepartamento").text()).appendTo("#ddlDepartamento");
            }

        );

        console.log(req.responseText);
    }
}

function processErrorDepartamentos(data, status, req) {
    alert(req.responseText + " " + status);
}

function ObtenerMunicipios(dep_CodigoDepartamentoDANE) {
    var wsUrl = "http://mssql-2014.cloudapp.net:1213/wsofertapp.asmx?op=ObtenerMunicipiosPorDeptoXML";

    var soapRequest =
                '<?xml version="1.0" encoding="utf-8"?> \
                <soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" \
                    xmlns:xsd="http://www.w3.org/2001/XMLSchema" \
                    xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"> \
                    <soap:Body>\
                        <ObtenerMunicipiosPorDeptoXML xmlns="http://mssql-2014.cloudapp.net:1213/wsOfertAPP.asmx/"> \
                            <pCodDepto>' + dep_CodigoDepartamentoDANE + '</pCodDepto>\
                        </ObtenerMunicipiosPorDeptoXML> \
                    </soap:Body> \
                </soap:Envelope>';

    $.ajax({
        type: "POST",
        url: wsUrl,
        contentType: "text/xml",
        headers: {
            SOAPAction: 'http://mssql-2014.cloudapp.net:1213/wsOfertAPP.asmx/ObtenerMunicipiosPorDeptoXML'
        },
        dataType: "xml",
        data: soapRequest,
        success: processSuccessMunicipios,
        error: processErrorMunicipios
    });
}

function processSuccessMunicipios(data, status, req) {
    if (status == "success") {

        $(req.responseText).find("SP_MUNICIPIO_DEPARTAMENTO_SELECT").each(
            function (i, e) {
                console.log($(e).find("mun_CodigoMunicipioDANE").text());
                console.log($(e).find("mun_nombreMunicipio").text());
                $(document.createElement('option')).attr('value', $(e).find("mun_CodigoMunicipioDANE").text()).text($(e).find("mun_nombreMunicipio").text()).appendTo("#ddlMunicipio");
            }

        );

        console.log(req.responseText);
    }
}

function processErrorMunicipios(data, status, req) {
    alert(req.responseText + " " + status);
}

function CrearUsuario(strNombreUsuario, strApellidosUsuario, strCorreoElectronico, strPassword, strCodigoDepto, strCodigoMun) {
    var wsUrl = "http://mssql-2014.cloudapp.net:1213/wsofertapp.asmx?op=CrearUsuarioXML";

    var soapRequest =
                '<?xml version="1.0" encoding="utf-8"?> \
                <soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" \
                xmlns:xsd="http://www.w3.org/2001/XMLSchema" \
                xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"> \
                    <soap:Body> \
                        <CrearUsuarioXML xmlns="http://mssql-2014.cloudapp.net:1213/wsOfertAPP.asmx/"> \
                              <pNombresUsuario>' + strNombreUsuario + '</pNombresUsuario> \
                              <pApellidosUsuario>' + strApellidosUsuario + '</pApellidosUsuario> \
                              <pCorreoElectronico>' + strCorreoElectronico + '</pCorreoElectronico> \
                              <pPassword>' + strPassword + '</pPassword> \
                              <pCodigoDepto>' + strCodigoDepto + '</pCodigoDepto> \
                              <pCodigoMun>' + strCodigoMun + '</pCodigoMun> \
                              <pCodigoInstancia>N/A</pCodigoInstancia> \
                              <pTipoInstancia>2</pTipoInstancia> \
                            </CrearUsuarioXML> \
                          </soap:Body> \
                        </soap:Envelope>';


    $.ajax({
        type: "POST",
        url: wsUrl,
        contentType: "text/xml",
        headers: {
            SOAPAction: 'http://mssql-2014.cloudapp.net:1213/wsOfertAPP.asmx/CrearUsuarioXML'
        },
        dataType: "xml",
        data: soapRequest,
        success: processSuccessCrearUsuario,
        error: processErrorCrearUsuario
    });
}

function processSuccessCrearUsuario(data, status, req) {
    if (status == "success") {
        localStorage.setItem('UsuarioLogged_OfertAPP', req.responseText);
        window.location = "home.html";
    }
}

function processErrorCrearUsuario(data, status, req) {
    alert(req.responseText + " " + status);
}

function IniciarSesion(strCorreoElectronico, strPassword) {
    var wsUrl = "http://mssql-2014.cloudapp.net:1213/wsofertapp.asmx?op=LoginUsuarioXML";

    var soapRequest =
                '<?xml version="1.0" encoding="utf-8"?> \
                <soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" \
                xmlns:xsd="http://www.w3.org/2001/XMLSchema" \
                xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"> \
                <soap:Body> \
                    <LoginUsuarioXML xmlns="http://mssql-2014.cloudapp.net:1213/wsOfertAPP.asmx/"> \
                        <pCorreoUsuario>' + strCorreoElectronico + '</pCorreoUsuario> \
                        <pPassword>' + strPassword + '</pPassword> \
                        <pInstanciaID>N/A</pInstanciaID> \
                        <pTipoInstancia>2</pTipoInstancia> \
                    </LoginUsuarioXML> \
                </soap:Body> \
            </soap:Envelope>';


    $.ajax({
        type: "POST",
        url: wsUrl,
        contentType: "text/xml; charset=utf-8",
        headers: {
            SOAPAction: 'http://mssql-2014.cloudapp.net:1213/wsOfertAPP.asmx/LoginUsuarioXML'
        },
        dataType: "xml",
        data: soapRequest,
        success: processSuccessIniciarSesion,
        error: processErrorIniciarSesion
    });
}

function processSuccessIniciarSesion(data, status, req) {
    if (status == "success") {
        localStorage.setItem('UsuarioLogged_OfertAPP', req.responseText);
        window.location = "home.html";
    }
}

function processErrorIniciarSesion(data, status, req) {
    alert(req.responseText + " " + status);
}

function CerrarSesion(strUsuarioID) {
    var wsUrl = "http://mssql-2014.cloudapp.net:1213/wsofertapp.asmx?op=CerrarSesionInstanciaUsuario";

    var soapRequest =
                '<?xml version="1.0" encoding="utf-8"?> \
                <soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" \
                xmlns:xsd="http://www.w3.org/2001/XMLSchema" \
                xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"> \
                  <soap:Body> \
                    <CerrarSesionInstanciaUsuario xmlns="http://mssql-2014.cloudapp.net:1213/wsOfertAPP.asmx/"> \
                      <pCodigoInstancia>N/A</pCodigoInstancia> \
                      <pUsuarioId>' + strUsuarioID + '</pUsuarioId> \
                    </CerrarSesionInstanciaUsuario> \
                  </soap:Body> \
                </soap:Envelope>';

    $.ajax({
        type: "POST",
        url: wsUrl,
        contentType: "text/xml; charset=utf-8",
        headers: {
            SOAPAction: 'http://mssql-2014.cloudapp.net:1213/wsOfertAPP.asmx/CerrarSesionInstanciaUsuario'
        },
        dataType: "xml",
        data: soapRequest,
        success: processSuccessCerrarSesion,
        error: processErrorCerrarSesion
    });
}

function processSuccessCerrarSesion(data, status, req) {
    if (status == "success") {
        delete window.localStorage["UsuarioLogged_OfertAPP"];
        window.location = "index.html";
    }
}

function processErrorCerrarSesion(data, status, req) {
    alert(req.responseText + " " + status);
}
