<?php 

require_once 'db.php';

$selector = bin2hex(random_bytes(8));
$token = random_bytes(32);

$email = $_POST["email"];
$hash_token = password_hash($token, PASSWORD_DEFAULT);
$result = "";

$sql = "UPDATE users SET token=:token WHERE email=:email";
$stmt = $db->prepare($sql);
if($stmt->execute([
    ':token' => $hash_token ,
    ':email' => $email,
])){
   $result = "OK";
} else {
    $result = "FAIL";
};

$to = $email;
$subject = 'Reset your password request for Dreamshop';
$message = '<p>Hello, please copy code below to reset your password</p><br>';
$message .= '<p>'. $hash_token . '</p>';

$headers = "From: reset@christopherberge.tech\r\n";
$headers .= "Reply-To: reset@christopherberge.tech\r\n";
$headers .= "Content-type: text/html\r\n";

if(mail($to, $subject, $message, $headers)) {
 $result = "OK";
} else {
 $result = "FAIL to send mail";
};


echo $result;

?>
