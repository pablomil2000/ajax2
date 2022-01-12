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

function votar(puntos) {
    var url = 'votar.php';
    xmlhttp.open('POST', url, true);
    xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    var cadena = 'voto=' + puntos;
    // var cadena = puntos;
    console.log(cadena);

    xmlhttp.onreadystatechange = respuestaServidor;

    xmlhttp.send(cadena);

    function respuestaServidor() {
        if (xmlhttp.readyState == 4) {
            if (xmlhttp.status == 200) {
                var res = xmlhttp.responseText;
            } else {
                console.log(1);
                var res = xmlhttp.statusText;
            }
        }
    }
}

function verResultados(){
    
    var url = 'resultados.php';
    xmlhttp.open('POST', url, true);
    xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    xmlhttp.onreadystatechange = respuestaServidor;

    xmlhttp.send(null);
    var mostrar = document.getElementById('mostrar');



    function respuestaServidor() {
        if (xmlhttp.readyState == 4) {
            if (xmlhttp.status == 200) {
                mostrar.innerHTML = xmlhttp.responseText;
            } else {
                console.log(1);
                mostrar.innerHTML = xmlhttp.responseText;
            }
        }
    }
}

function resultados(f) {
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

function mostrar() {
    var url = 'ejerc3_1.php';
    xmlhttp.open('POST', url, true);
    xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');


    xmlhttp.onreadystatechange = respuestaServidor;

    xmlhttp.send(null)
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