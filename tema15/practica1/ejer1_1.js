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


function cargaMarcas() {
    var xmlhttp = getXMLHTTPRequest();
    var url = 'ejer1_1.php';
    xmlhttp.open('GET', url, false);
    xmlhttp.send();

    xmlhttp.onreadystatechange = respuestaServidor();

    marcasJson = respuestaServidor();
    console.log(marcasJson);
    var marca = document.getElementById('marca');

    const marcas = JSON.parse(marcasJson);


    for (const key in marcas) {
        const option = document.createElement('option');
        // console.log(marcas[key]);
        option.value = marcas[key]['id'];
        option.text = marcas[key]['nombre'];
        marca.appendChild(option);
    }

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

function cargaCoches(marca) {
    var url = 'ejer1_1.php';
    xmlhttp.open('POST', url, true);
    xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    var cadena = 'marca=' + marca;

    xmlhttp.onreadystatechange = respuestaServidor;

    xmlhttp.send(cadena)
    var mostrar = document.getElementById('modelo');


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