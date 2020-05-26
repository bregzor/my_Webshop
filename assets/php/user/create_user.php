<?php 

require_once 'db.php';


function checkUserExist($db, $mail) {
    $isCreated = false;
    $sql = 'SELECT * FROM users WHERE email=:mail';
    $stmt = $db->prepare($sql);
    $stmt->bindParam(':mail', $mail);
    $stmt->execute();
    if ($stmt->rowCount() > 0) {
        $isCreated = true;
    } else{
        $isCreated = false;   
    }
    return $isCreated;
}

function createUser($db, $password, $first, $last, $mail, $phone, $city, $zip, $street) {
    $password= password_hash($password, PASSWORD_DEFAULT);
    $sql = "INSERT INTO users(password,firstname, lastname, email, phone, city, zip, street) VALUES(:pass, :first, :last, :mail,:tphone, :city, :zip, :street)";
    $stmt = $db->prepare($sql);
    if($stmt->execute([
        ':pass' => $password,
        ':first' => $first,
        ':last' => $last,
        ':mail' => $mail,
        ':tphone' => $phone,
        ':city' => $city,
        ':zip' => $zip,
        ':street' => $street
         
    ])) ;
}


function clean($input) {
    trim($input);
    strtolower($input);
    return $input;
}

function resetPassword() {

}
    $response = "";
    //$username = clean($_POST['username']);
    $firstname = clean($_POST['firstname']);
    $lastname = clean($_POST['lastname']);
    $password = $_POST['password'];
    $mail = clean($_POST['mail']);
    $phone = clean($_POST['phone']);
    $city = clean($_POST['city']);
    $street = clean($_POST['street']);
    $zip = $_POST['zip'];
    

    //Check if user already exists
    if(!checkUserExist($db, $mail)) {
        createUser($db, $password, $firstname, $lastname, $mail, $phone, $city, $zip, $street);
        $response = "User created";
    } else {
        $response = "User already exists";
    }

 echo $response;

?>