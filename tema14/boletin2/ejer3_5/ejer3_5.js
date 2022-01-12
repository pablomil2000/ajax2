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
    var url = 'coches.xml';
    xmlhttp.open('GET', url, false);


    xmlhttp.send();
    xmlhttp.onreadystatechange = respuestaServidor();
    // console.table(xmlhttp);
    xmlDoc = xmlhttp.responseXML;
    // console.log(xmlDoc);


    var marca = xmlDoc.getElementsByTagName("marca");

    for (let i = 0; i < marca.length; i++) {
        a = i + 1
        document.write('<br>Marca del coche ' + a + ':' + marca[i].innerHTML);

    }

    function respuestaServidor() {
        if (xmlhttp.readyState == 4) {
            if (xmlhttp.status == 200) {
                return (xmlhttp.responseText);
            } else {
                return (xmlhttp.statusText);
            }
        }
    }
}

llamarServidor();