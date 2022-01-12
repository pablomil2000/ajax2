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

function cargarEmpleados() {
    var url = 'codigo.php';
    xmlhttp.open('GET', url, false);
    xmlhttp.send(null);

    resultadoJson = respuestaServidor();

    const empleados = JSON.parse(resultadoJson);

    var id = document.getElementById('resultado');

    var cadena = '<table>';
    cadena += '<thead>';
    cadena += '<tr><td>Codigo</td>';
    cadena += '<td>Nombre</td>';
    cadena += '<td>departamento</td>';
    cadena += '<td>sueldo</td>';
    cadena += '</thead>';
    cadena += '</tr>';
    cadena += '<tbody>';
    for (const key in empleados) {
        cadena += '<tr><td><a href="#" onclick="editar(' + empleados[key]['idempleado'] + ')">' + empleados[key]['idempleado'] + '</a></td>';
        cadena += '<td>' + empleados[key]['nombres'] + '</td>';
        cadena += '<td>' + empleados[key]['departamento'] + '</td>';
        cadena += '<td>' + empleados[key]['sueldo'] + '</td>';
        cadena += '</tr>';
    }
    cadena += '</tbody>';
    cadena += '</table>';
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

function editar(id) {
    var url = 'codigo.php';
    xmlhttp.open('GET', url, false);
    xmlhttp.send(null);

    resultadoJson = respuestaServidor();

    const empleados = JSON.parse(resultadoJson);

    var mostrar = document.getElementById('modelo');

    var formu = document.getElementById('formu');
    var cadena = '<form action="" method="post"><p>Nombre:<input type="text" value="' + empleados[id]['nombres'] + '"name="nombre" placeholder="Nombre"></form></p><p>Departamento:<select name="departamento" id=""><option value="Informatica">Informatica</option><option value="Contabilidad">Contabilidad</option><option value="Administracion">Administracion</option></select></p><p>Sueldo:<input type="number" name="sueldo" placeholder="Sueldo" min="0" value = "' + empleados[id]['sueldo'] + '"></p></form>'

    formu.innerHTML = cadena;

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