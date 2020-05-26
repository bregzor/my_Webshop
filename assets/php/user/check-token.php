<?php

require_once 'db.php';

$result = "";
$token = $_POST["token"];
$sql = "SELECT * FROM users WHERE token=:token";
$stmt = $db->prepare($sql);
if($stmt->execute([
    ':token' => $token,
])){ 
  $row = $stmt->fetch(PDO::FETCH_ASSOC);
  if($row) {
    $result = "OK";
  } else {
      $result = "FAIL CODE";
  }
} else {
  $result = "FAIL IN SQL";
};

echo $result;

?>