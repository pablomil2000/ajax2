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

var xmlhttp = getXMLHTTPRequest();

function llamarServidor() {
    var url = 'ejer3_3.php';

    xmlhttp.open("GET", url)

    xmlhttp.onreadystatechange = respuestaServidor;

    xmlhttp.send(null);

    function respuestaServidor() {

        mensaje = document.getElementById('mensaje');

        if (xmlhttp.readyState == 4) {
            if (xmlhttp.status == 200) {
                mensaje.innerHTML = xmlhttp.responseText;
            } else {
                mensaje.innerHTML = xmlhttp.statusText;
            }
        }
    }
}