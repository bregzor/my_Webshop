<?php
require_once '../includes/db.php';
if (isset($_POST['updateCat'])) {
    //Save if new image is uploaded
    $imageName = $_FILES['image']['name'];
    $imageError = $_FILES['image']['error'];
    $imageTemp = $_FILES['image']['tmp_name'];
    $imagePath = "../images/";

    if(is_uploaded_file($imageTemp)) {
        move_uploaded_file($imageTemp, $imagePath . $imageName);
    } else {
        $image = "";
    }

    $id = $_POST['ID'];
    $name = trim($_POST['name']);

    if (!empty($name) && !empty($imageName)) {
        $sql = 'UPDATE category 
        SET image=:image, name=:name WHERE id=:id';
        $stmt = $pdo->prepare($sql);
        $stmt->execute([
          ':id' => $id,
          ':name' => $name,
          ':image' => $imageName
        ]);
    } else if(!empty($imageName)) {
        $sql = 'UPDATE category 
        SET image=:image WHERE id=:id';
        $stmt = $pdo->prepare($sql);
        $stmt->execute([
            ':id' => $id,
            ':image' => $imageName
        ]);
    } else if(!empty($name)) {
        $sql = 'UPDATE category 
        SET name=:name WHERE id=:id';
        $stmt = $pdo->prepare($sql);
        $stmt->execute([
            ':id' => $id,
            ':name' => $name
        ]);
    }
    header('Location:../index.php');
  }
