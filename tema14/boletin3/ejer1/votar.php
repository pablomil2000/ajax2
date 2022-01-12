<?php
$voto = $_POST['voto'];

$f1 = fopen('puntuaje.txt', 'a+');

fwrite($f1, $voto.'<br>');