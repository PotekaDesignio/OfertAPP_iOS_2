$(document).ready(function () {
    ObtenerDepartamentos();
});

$("#ddlDepartamento").change(function () {

    var selectedItem = $(this).val();

    $("#ddlMunicipio").empty();
    $(document.createElement('option')).attr('value', '').text('Selecciona').appendTo("#ddlMunicipio");
    ObtenerMunicipios(selectedItem);
    document.getElementById("ddlMunicipio").selectedIndex = "0";

});

$("#btnCrearUsuario").click(function () {

    var strNombres = $("#txtNombres").val();
    var strApellidos = $("#txtApellidos").val();
    var strCorreo = $("#txtCorreo").val();
    var strPass = $("#txtPass").val();
    var strDeptoId = $("#ddlDepartamento").val();
    var strMunId = $("#ddlMunicipio").val();

    CrearUsuario(strNombres, strApellidos, strCorreo, strPass, strDeptoId, strMunId);
});

