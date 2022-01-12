<?php
$servername = "localhost";
$dbname = "relacion_1";
$username = "root";
$password = "";

$conexion = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
$conexion->exec("set names utf8");


    $sql = "select * from empleados";

    $res = $conexion->query($sql);

    foreach ($res as $key => $value) {
        $vec[] = $value;
    }

    echo json_encode($vec);
