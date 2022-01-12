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

function llamarServidor(cargar) {
    var url = 'ajax.php';
    xmlhttp.open("POST", url, true);
    xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xmlhttp.onreadystatechange = respuestaServidor;

    var cadena = 'cargar=' + cargar;

    xmlhttp.send(cadena);

    function respuestaServidor() {

        container = document.getElementById('container');

        if (xmlhttp.readyState == 4) {
            if (xmlhttp.status == 200) {
                container.innerHTML = xmlhttp.responseText;
            } else {
                container.innerHTML = xmlhttp.statusText;
            }
        }
    }
}