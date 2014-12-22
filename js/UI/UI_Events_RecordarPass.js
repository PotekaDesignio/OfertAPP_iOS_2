$(document).ready(function () {
    
});

$("#btnRecordarPassword").click(function () {
    var strCorreo = $("#txtCorreo").val();
    
    RecordarPassword(strCorreo);
});