<?php 
header("Content-Type: application/json; charset=UTF-8");
require_once 'db.php';

$orderObject = [];
$userID = $_POST["user_id"];


$sql = "SELECT ID from orders WHERE user_ID = :id";
$stmt = $db->prepare($sql);
$stmt->execute([':id' => $userID]);
$id = $stmt->fetch(PDO::FETCH_ASSOC)["ID"];

$sql = "SELECT * from ordered_products WHERE ID=:id";
$stmt = $db->prepare($sql);
$stmt->execute([':id' => $id]);
$row = $stmt->fetch(PDO::FETCH_ASSOC);


//$sql = "SELECT * from ordered_products WHERE ID = "

$sql = "SELECT 
    orders.*, orders.name AS order_name, 
    products. *, products.name AS prod_name, 
    ordered_products.order_id AS order_id, 
    ordered_products.product_id, ordered_products.quantity
    FROM orders, ordered_products, products 
    WHERE orders.user_id = :id";

    $stmt = $db->prepare($sql);
    $stmt->execute([':id' => $userID]);

    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        $orders = array(
            "image"=>$row['image'],
            "prodname"=>$row['prod_name'],
            "quantity"=>$row['quantity'],
            "total"=>$row['total']
        );
        $orderObject[] = $orders;
    }

    $json = json_encode($orderObject, JSON_UNESCAPED_UNICODE|JSON_PRETTY_PRINT);
    echo $json
?>