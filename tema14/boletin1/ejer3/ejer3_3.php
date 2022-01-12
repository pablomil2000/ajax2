<?php

    $f1 = fopen('datos.txt', 'r');

    while (!feof($f1)) {
        echo fgets($f1);
    }