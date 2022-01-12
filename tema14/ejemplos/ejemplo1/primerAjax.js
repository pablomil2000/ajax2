function getXMLHTTPRequest() { //Conexion Ajax
    var obj = false;
    try {
        obj = new XMLHttpRequest();
    } catch (err1) {
        try {
            obj = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (err2) {
            try {
                obj = new ActiveXObject("Microsoft.XMLHTTP");
            } catch (err3) {
                obj = false;
            }
        }
    }
    return obj;
}

var xmlhttp = getXMLHTTPRequest(); //guardo la conexion, en php equivalente a: $conexion = Conexion::conectar();

function llamarServidor() { //Se ejecuta en ejem1.html al hacer clic en el boton
    var url = 'ejem1script.php'; //Fichero .php
    xmlhttp.open("GET", url); //Abre conexion con el servidor

    xmlhttp.onreadystatechange = respuestaServidor;

    xmlhttp.send(null);

    function respuestaServidor() {
        if (xmlhttp.readyState == 4) {
            if (xmlhttp.status == 200) {
                alert(xmlhttp.responseText);
            } else {
                alert(xmlhttp.statusText);
            }
        }
    }
}