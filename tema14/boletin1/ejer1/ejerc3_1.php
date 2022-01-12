<?php

$nombre = $_POST['nombre'];
$voto = $_POST['voto'];

$f1 = fopen('puntuaje.txt', 'a+');
while (!feof($f1)) {
    echo '<br>'.fgets($f1);
}

fwrite($f1, 'nombre: ' . $nombre.'<br>');
fwrite($f1, 'voto: ' . $voto.'<br>');

echo 'nombre: '.$nombre.'<br>';
echo 'nombre: '.$voto.'<br>';