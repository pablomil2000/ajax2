<?php

$f1 = fopen('puntuaje.txt', 'r');
while (!feof($f1)) {
    echo '<br>'.fgets($f1);
}