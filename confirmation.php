<?php 
    session_start();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./assets/style/main.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
    <script src="https://kit.fontawesome.com/06f93047a6.js" crossorigin="anonymous"></script>
</head>
<body>
<?php
  require_once "./header.php";
?>

    <section class="confirmation">
    <div class="confirmation__background"></div>
    <div class="confirmation-container">
        <div class="confirmation-products">
            <div class="products-top">
                <h2 class="products-headline">Order summary</h2>
            </div>
        </div>
    
<?php


require "./admin/includes/db.php";
//require "/assets/php/db.php";

if(isset($_GET["orderID"])){
   
    $sql = "SELECT * FROM orders where :id=id";
    $stmt = $pdo->prepare($sql);
    $stmt->execute([':id'=>$_GET['orderID']]);
    $categories = "";

      
while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        
        $id = htmlspecialchars($row["ID"]);
        $name = htmlspecialchars($row["name"]);
        $mail = htmlspecialchars($row["mail"]);
        $adress = htmlspecialchars($row['adress']);
        $zip = htmlspecialchars($row['zip']);
        $city = htmlspecialchars($row['city']);
        $total = htmlspecialchars($row['total']);
        $date = htmlspecialchars($row['date']);
        $phone = htmlspecialchars($row['phone']);

        $categories .= "
        <div class='info-box'>
        <h2 class='info-box__headline'>Thank you for your order!</h2>
        <p class='info-box__text'>We've recieved your order and will get started on it right away. Once your order has been packed and shipped, you will recieve shipping confirmation.</p>
        <p class='info-box__text'>Please make sure your information is correct. Otherwise, please <a class='info-box__contact' href='contactus.php'>contact us.</a></p>
        <div id='id' data-id='$id'></div>
        <div class='info-box__info'>
            <div class='info-box__container'>
                <p class='info-box__small-headline'>Shipping adress</p>
                <p class='info-box__info-text'>$name</p>
                <p class='info-box__info-text'>$adress</p>
                <div class='info-box__zipcity'>
                    <p class='info-box__info-text info-box__zip'>$zip</p>
                    <p class='info-box__info-text info-box__city'>$city</p>
                </div>
            </div>
            <div class='info-box__container'>
                <p class='info-box__small-headline'>Contact info</p>
                <p class='info-box__info-text'>$phone</p>
                <p class='info-box__info-text'>$mail</p>
            </div>
            <div class='info-box__container'>
                <p class='info-box__small-headline'>Order date</p>
                <p class='info-box__date'>$date</p>
            </div>
        </div>
        <div id='total' data-total='$total'></div>
        <a href='./'>Back to shop</a>
        </div>";
        
   }
   echo $categories;
}

?>
</div>
</section>
<?php
  require_once "./footer.php";
?>
<script src="./assets/js/header.js"></script>
<script src="./assets/js/happyLib.js"></script>
<script src="./assets/js/confirmation.js"></script>
<script src="./assets/js/search.js"></script>

<script src="./assets/js/user/password-validation.js"></script>
    <script src="./assets/js/user/get-user-data.js"></script>
    <script src="./assets/js/user/templates.js"></script>
    <script src="./assets/js/user/order-history.js"></script>
    <script src="./assets/js/user/login-user.js"></script>
    <script src="./assets/js/user/create-user.js"></script>
    <script src="./assets/js/user/logout-user.js"></script>
    <script src="./assets/js/user/validation.js"></script>
    <script src="./assets/js/user/reset-password.js"></script>
    <script src="./assets/js/user/user-global.js"></script>
    <script src="./assets/js/user/login-init.js"></script>
</body>
</html>