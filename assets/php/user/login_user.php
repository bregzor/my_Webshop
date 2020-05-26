<?php
//session_start();
header("Content-Type: application/json; charset=UTF-8");
require_once 'db.php';
$userObject = [];

        $mail = $_POST["email"];
        $password = $_POST["password"];
        $stmt = $db->prepare("SELECT * FROM users WHERE email=:email");
        $stmt->bindParam(':email', $mail);
        $stmt->execute();
        $user = $stmt->fetch(PDO::FETCH_ASSOC);

        //check if user is not null
        if (isset($user))
        {
            //check if variable is not null
            if (isset($password))
            {
              //veryfing password against hased password in database
                if (password_verify($password, $user["password"]))
                {

                    $userArr = array(
                        "id"=>$user['ID'],
                        "name"=>$user['firstname'],
                        "lastname"=>$user['lastname'],
                        "city"=>$user['city'],
                        "adress"=>$user['street'],
                        "zip"=>$user['zip'],
                        "email"=>$user['email'],
                        "phone"=>$user['phone'],
                    );
                
                    $userObject[] = $userArr;
                }
                else
                { // show wrong password message
                    $userObject[] = array("error_password" => "wrong password, please try again");
                }
            }
        }
        else // show wrong username message
        {
            $userObject[] = array("error_nouser" => "no user with that name");
        }
 //echo $pass;

$json = json_encode($userObject, JSON_UNESCAPED_UNICODE|JSON_PRETTY_PRINT);
echo $json;

?>