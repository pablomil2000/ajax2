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
    var url = 'ejer3_4.xml';
    xmlhttp.open('GET', url, false);


    xmlhttp.send();
    xmlhttp.onreadystatechange = respuestaServidor();
    // console.table(xmlhttp);
    xmlDoc = xmlhttp.responseXML;
    // console.log(xmlDoc);


    var de = xmlDoc.getElementsByTagName("de")[0];
    var para = xmlDoc.getElementsByTagName("para")[0];
    var entete = xmlDoc.getElementsByTagName("entete")[0];
    var mensaje = xmlDoc.getElementsByTagName("mensaje")[0];

    document.write('<p><b>de:</b>' + de.innerHTML + '</p>')
    document.write('<p><b>para:</b>' + para.innerHTML + '</p>')
    document.write('<p><b>entete:</b>' + entete.innerHTML + '</p>')
    document.write('<p><b>mensaje:</b>' + mensaje.innerHTML + '</p>')



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