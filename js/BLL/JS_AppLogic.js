$(document).ready(function () {


//    $('#btnReiniciarDatos').click(function () {

//        delete window.localStorage["estadoAvance"];
//        delete window.localStorage["narrador"];
//        delete window.localStorage["resultado"];
//        delete window.localStorage["ContadorIngresosActuales"];
//        delete window.localStorage["ContadorGastosActuales"];
//        delete window.localStorage["contadorSeAtreve"];

//        delete window.localStorage["respuestaCorrecta"];
//        delete window.localStorage["mensajeCorrecto"];
//        delete window.localStorage["mensajeError"];
//        delete window.localStorage["preguntasResueltas"];

//        for (var i = 0; i <= 6; i++) {

//            delete window.localStorage["Presupuesto_" + i.toString()];
//            delete window.localStorage["Ahorro_" + i.toString()];
//        }

//        //Equipo Android
//        //window.location = "../html/index.html";
//        //Navegador web
//        window.location = "index.html";

//    });
//    /* Fin Configuración de la aplicación */

//    function capitaliseFirstLetter(string) {
//        return string.charAt(0).toUpperCase() + string.slice(1);
//    }

//    /*Inicio Capacitaciones*/
//    $('#btnCargarOfertas').click(function () {


//        cargarOfertas();
//    });

//    function cargarOfertas() {

//        jQuery.support.cors = true;
//        var retrievedObject = localStorage.getItem('resultado');

//        $("select[name='ddlOfertasDummie'] > option").each(function () {
//            $(this).remove();
//        });

//        $.each(JSON.parse(retrievedObject), function (i, theItem) {
//            var combo = document.getElementById("ddlOfertasDummie");

//            for (var key in theItem) {

//                var option1 = document.createElement("option");
//                var option2 = document.createElement("option");
//                var option3 = document.createElement("option");
//                var option4 = document.createElement("option");
//                var option5 = document.createElement("option");
//                var option6 = document.createElement("option");
//                var option7 = document.createElement("option");
//                var option8 = document.createElement("option");
//                var option9 = document.createElement("option");
//                var option10 = document.createElement("option");



//                var rr1 = theItem[key].dimension.toString();
//                var rr2 = theItem[key].numero.toString();
//                var rr3 = theItem[key].entidad.toString();
//                var rr4 = theItem[key].oferta.toString();
//                var rr5 = theItem[key].logro.toString();
//                var rr6 = theItem[key].quees.toString();
//                var rr7 = theItem[key].paraquien.toString();
//                var rr8 = theItem[key].donde.toString();
//                var rr9 = theItem[key].requisitos.toString();
//                var rr10 = theItem[key].tip.toString();

//                try {
//                    
//                    option1.text = rr1;
//                    option1.value = rr1;

//                    option2.text = rr2;
//                    option2.value = rr2;

//                    option3.text = rr3;
//                    option3.value = rr3;

//                    option4.text = rr4;
//                    option4.value = rr4;

//                    option5.text = rr5;
//                    option5.value = rr5;

//                    option6.text = rr6;
//                    option6.value = rr6;

//                    option7.text = rr7;
//                    option7.value = rr7;

//                    option8.text = rr8;
//                    option8.value = rr8;

//                    option9.text = rr9;
//                    option9.value = rr9;

//                    option10.text = rr10;
//                    option10.value = rr10;

//                    combo.add(option1, null); 
//                    combo.add(option2, null);
//                    combo.add(option3, null);
//                    combo.add(option4, null);
//                    combo.add(option5, null);
//                    combo.add(option6, null);
//                    combo.add(option7, null);
//                    combo.add(option8, null);
//                    combo.add(option9, null);
//                    combo.add(option10, null); 
//                }
//                catch (error) {
//                    //alert('error found' + error.toString());
//                    //combo.add(option);
//                }

//            }

//        });

//        var usedNames = {};
//        var indice = 0;
//        var addrow = 1;

//        var table = document.getElementById("tableEventosCapacitaciones");
//        var rowCount = table.rows.length;
//        var newRow1 = table.insertRow(rowCount);

//        if (rowCount == 1) {
//            $("select[name='ddlOfertasDummie'] > option").each(function () {

//                usedNames[this.text] = this.value;

//                var strResultado = this.value
//                strResultado = strResultado.replace(/;/g, ",");

//                if (addrow == 0) {
//                    addrow++;
//                    rowCount = table.rows.length;
//                    newRow1 = table.insertRow(rowCount);
//                }

//                if (addrow == 1) {

//                    var cell0 = newRow1.insertCell(0);
//                    var element0 = document.createElement("span");
//                    element0.textContent = strResultado;
//                    element0.style.height = "220px";

//                    cell0.appendChild(element0);
//                }
//                if (addrow == 2) {
//                    var newRow2 = table.insertRow(rowCount);
//                    var cell0 = newRow1.insertCell(0);
//                    var element0 = document.createElement("span");
//                    element0.textContent = strResultado;
//                    element0.style.height = "220px";
//                    cell0.appendChild(element0);
//                }
//                if (addrow == 3) {
//                    var newRow3 = table.insertRow(rowCount);
//                    var cell0 = newRow1.insertCell(0);
//                    var element0 = document.createElement("span");
//                    element0.textContent = strResultado;
//                    element0.style.height = "220px";
//                    cell0.appendChild(element0);
//                }
//                if (addrow == 4) {
//                    var newRow4 = table.insertRow(rowCount);
//                    var cell0 = newRow1.insertCell(0);
//                    var element0 = document.createElement("span");
//                    element0.textContent = strResultado;
//                    element0.style.height = "220px";
//                    cell0.appendChild(element0);
//                }
//                if (addrow == 5) {
//                    var newRow5 = table.insertRow(rowCount);
//                    var cell0 = newRow1.insertCell(0);
//                    var element0 = document.createElement("span");
//                    element0.textContent = strResultado;
//                    element0.style.height = "220px";
//                    cell0.appendChild(element0);
//                }
//                if (addrow == 6) {
//                    var newRow6 = table.insertRow(rowCount);
//                    var cell0 = newRow1.insertCell(0);
//                    var element0 = document.createElement("span");
//                    element0.textContent = strResultado;
//                    element0.style.height = "220px";
//                    cell0.appendChild(element0);
//                }
//                if (addrow == 7) {
//                    var newRow7 = table.insertRow(rowCount);
//                    var cell0 = newRow1.insertCell(0);
//                    var element0 = document.createElement("span");
//                    element0.textContent = strResultado;
//                    element0.style.height = "220px";
//                    cell0.appendChild(element0);
//                }
//                if (addrow == 8) {
//                    var newRow8 = table.insertRow(rowCount);
//                    var cell0 = newRow1.insertCell(0);
//                    var element0 = document.createElement("span");
//                    element0.textContent = strResultado;
//                    element0.style.height = "220px";
//                    cell0.appendChild(element0);
//                }
//                if (addrow == 9) {
//                    var newRow9 = table.insertRow(rowCount);
//                    var cell0 = newRow1.insertCell(0);
//                    var element0 = document.createElement("span");
//                    element0.textContent = strResultado;
//                    element0.style.height = "220px";
//                    cell0.appendChild(element0);
//                }
//                if (addrow == 9) {
//                    addrow = 0;
//                }
//                else {
//                    addrow++;
//                }

//            });
//        }
//    }
//    /*Fin Capacitaciones*/

});


