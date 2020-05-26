<?php require_once 'db.php';

$result = "";
$password = password_hash($_POST["password2"], PASSWORD_DEFAULT);
$email = $_POST["email"];

$sql = "UPDATE users SET password=:password WHERE email=:email";
$stmt = $db->prepare($sql);
if($stmt->execute([
    ':password' => $password,
    ':email' => $email,
])){
  $result = "OK";
} else {
    $result = "FAIL";
};

echo $result;

?>