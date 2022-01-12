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

function consultar() {
    var url = 'codigo.php';
    xmlhttp.open('GET', url, false);
    xmlhttp.send(null);

    resultadoJson = respuestaServidor();

    const empleados = JSON.parse(resultadoJson);

    var id = document.getElementById('resultado');

    var cadena = '';
    // cadena += 'idempleado' + ' --> ';
    // cadena += 'nombres' + ' --> ';
    // cadena += 'departamento' + ' --> ';
    // cadena += 'sueldo';
    // cadena += '<br>';
    for (const key in empleados) {
        cadena += empleados[key]['idempleado'] + ' --> ';
        cadena += empleados[key]['nombres'] + ' --> ';
        cadena += empleados[key]['departamento'] + ' --> ';
        cadena += empleados[key]['sueldo'];
        cadena += '<br>';
    }
    id.innerHTML = cadena;

    function respuestaServidor() {
        if (xmlhttp.readyState == 4) {
            if (xmlhttp.status == 200) {
                return (xmlhttp.responseText);
            } else {
                alert(xmlhttp.statusText);
            }
        }
    }
}