<?php
$servername = "localhost";
$dbname = "boletin_1";
$username = "root";
$password = "";

$conexion = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
$conexion->exec("set names utf8");


if (isset($_POST['marca'])) {
    // var_dump($_POST);
    $marca = $_POST['marca'];
    // $marca=1;
    $sql = "select * from modelos WHERE id_marca LIKE '$marca'";

    $res = $conexion->query($sql);
    // var_dump($res->fetchAll());
    foreach ($res as $key => $value) {
        // echo $value[0].'<br>';
        
        echo "<option value='$key'>".$value['nombre_m']."</option>";
        // $vec[] = $value;
    }
    // echo json_encode($vec);
} else {
    $sql = "select * from marcas";

    $res = $conexion->query($sql);

    foreach ($res as $key => $value) {
        $vec[] = $value;
    }
    echo json_encode($vec);
}
