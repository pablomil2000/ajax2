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

function llamarServidor(f) {
    var url = 'ejerc3_1.php';
    xmlhttp.open('POST', url, true);
    xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    var cadena = 'nombre=' + f.nombre.value + '&voto=' + f.voto.value;

    xmlhttp.onreadystatechange = respuestaServidor;

    xmlhttp.send(cadena)
    var mostrar = document.getElementById('mostrar');

    function respuestaServidor() {
        if (xmlhttp.readyState == 4) {
            if (xmlhttp.status == 200) {
                mostrar.innerHTML = xmlhttp.responseText;
            } else {
                mostrar.innerHTML = xmlhttp.statusText;
            }
        }
    }
}