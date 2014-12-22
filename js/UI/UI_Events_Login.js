$(document).ready(function () {
    
});

$("#btnLogin").click(function () {
    var strCorreo = $("#txtCorreo").val();
    var strPass = $("#txtPass").val();

    IniciarSesion(strCorreo, strPass);
});

$("#btnRecordarPassLogin").click(function () {
    window.location = "recordarPass.html";
});