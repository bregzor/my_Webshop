<?php
$db_server = "localhost";
$db_database = "jlwvfkou_wp888";
$db_username = "root";
$db_password = '';

// $db_server   = "localhost";
// $db_database = "lsajncro_cms";
// $db_username = "lsajncro_cms";
// $db_password = 'Chr1stopher!';


try {
    $db = new PDO(
        "mysql:host=$db_server;dbname=$db_database;charset=utf8",
        $db_username,
        $db_password
    );
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo $e->getMessage();
}
