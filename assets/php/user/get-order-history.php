<?php 

require_once 'db.php';

$userID = $_POST["user_id"];
$HTML = null;


    $sql = "SELECT * from orders WHERE user_id=:id";
    $stmt = $db->prepare($sql);
    $stmt->execute([':id' => $userID]);

    //GET ALL ORDERS
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        
        $HTML .= "<div class='modal__user-profile__item'>
          <p>total ". $row["total"] . "</p>";
        
        //GETS PRODUCT ID AND QUANTITY 
        $id = $row["ID"];
        $sql = "SELECT * from ordered_products WHERE order_id=:ordid";
        $stmt2 = $db->prepare($sql);
        $stmt2->execute([':ordid' => $id]);
        $row2 = $stmt2->fetch(PDO::FETCH_ASSOC);
        
        $HTML .= "<p>Quantity: " .$row2["quantity"] . "</p>";

        //GET ALL PRODUCT INFO
        $pID = $row2["product_id"];
        $sql = "SELECT * from products WHERE ID=:pid";
        $stmt3 = $db->prepare($sql);
        $stmt3->execute([':pid' => $pID]); 
        $row3 =  $stmt3->fetch(PDO::FETCH_ASSOC);
        $HTML .=  "
        <p>". $row3["name"] . "</p>
        <img width='150px' src='./admin/images/". $row3["image"] . "'>";
       
        //     while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        //        "; 
        //     }
 




        // while ($row = $stmt2->fetch(PDO::FETCH_ASSOC)) {    
        //    // $row = $stmt->fetch(PDO::FETCH_ASSOC);
        //     $HTML .= "<p>Quantity: " .$row["quantity"] . "</p>";
        // }
        
        
        //$pID = $stmt->fetch(PDO::FETCH_ASSOC)["product_id"];
         

            
        // }

        // while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        //     $HTML .= "<p>Product: ". $row["name"] . "</p>";
        //     
        // }

       $HTML .= "</div>";

    }

    echo $HTML;
?>