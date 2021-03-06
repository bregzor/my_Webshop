<?php
require "../includes/db.php";
if (isset($_POST['updateProduct'])) {

  $id = $_POST['update-id'];
  $name = trim($_POST['name']);
  $description = trim($_POST['description']);
  $price = trim($_POST['price']);
  $in_stock =  trim($_POST['in_stock']);
  $featured =  trim($_POST['featured']);
  $cat_id = trim($_POST['cat_id']);
  $isOld = trim($_POST['is_old']);
    
  $targetDir = "../images/";
  $allowTypes = array("jpg", "png", "jpeg", "gif", "JPG","PNG", "GIF");
  $fileNames = array_filter($_FILES["image"]["tmp_name"]);
  $imagePath = "../images/";
  $fName;

    
  $salePercentage = 0.9;
  if($isOld > 0) {
    $sql = "UPDATE products SET sale_price = price * $salePercentage WHERE is_old = 1";
    $stmt = $pdo->prepare($sql);
    $stmt->execute();
  }

  if (!empty($fileNames)) {
      
      $sql = "DELETE FROM images WHERE product_id=:product_id";
      $stmt = $pdo->prepare($sql);
      $stmt->execute([
        ':product_id' => $id,
      ]);
      foreach ($_FILES["image"]["name"] as $key => $val) {
        $fileName = basename($_FILES["image"]["name"][$key]);
        $targetDir = $targetDir . $fileName;
        $fileType = pathinfo($targetDir, PATHINFO_EXTENSION);
        if (in_array($fileType, $allowTypes)) {
          //if file exists
          if (move_uploaded_file($_FILES["image"]["tmp_name"][$key], "../images/$fileName")) {
            $sql = "INSERT INTO images(image, product_id) VALUES (:image,:product_id)";
            $stmt = $pdo->prepare($sql);
            $stmt->execute([
              ':image' => $fileName,
              ':product_id' => $id,
            ]);
          }
        }
        $fName = $fileName;
      }  

      $sql = 'UPDATE products SET name=:name,description=:description,price=:price, image=:image, featured=:featured,in_stock=:in_stock, cat_id=:cat_id, is_old=:is_old WHERE id=:id';
      $stmt = $pdo->prepare($sql);
      $stmt->execute([
        ':id' => $id,
        ':name' => $name,
        ':description' => $description,
        ':price' => $price,
        ':image' => $fName,
        ':featured' => $featured,
        ':in_stock' => $in_stock,
        ':cat_id' => $cat_id,
        ':is_old' => $isOld,
      ]);
    } else {
      $sql = 'UPDATE products SET name=:name,description=:description,price=:price, featured=:featured,in_stock=:in_stock, cat_id=:cat_id, is_old=:is_old WHERE id=:id';
      $stmt = $pdo->prepare($sql);
      $stmt->execute([
        ':id' => $id,
        ':name' => $name,
        ':description' => $description,
        ':price' => $price,
        ':featured' => $featured,
        ':in_stock' => $in_stock,
        ':cat_id' => $cat_id,
        ':is_old' => $isOld,
      ]);
    }
    header('Location:products.php');
}
