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


function llamarServidor(puntos) {
    var url = 'coches.json';
    xmlhttp.open('POST', url, true);
    xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    var cadena = 'voto';
    console.log(cadena);

    xmlhttp.onreadystatechange = respuestaServidor;

    xmlhttp.send(cadena);

    function respuestaServidor() {
        if (xmlhttp.readyState == 4) {
            if (xmlhttp.status == 200) {
                var datosJson = JSON.parse(xmlhttp.responseText);
                document.getElementById('coche1').innerHTML = datosJson.coche1.codigo + "->" + datosJson.coche1.velocidad_maxima + "km/h";
                document.getElementById('coche2').innerHTML = datosJson.coche2.codigo + "->" + datosJson.coche2.velocidad_maxima + "km/h";
                document.getElementById('coche3').innerHTML = datosJson.coche3.codigo + "->" + datosJson.coche3.velocidad_maxima + "km/h";
            } else {
                console.log(xmlhttp.status);
                var res = xmlhttp.statusText;
            }
        }
    }
}