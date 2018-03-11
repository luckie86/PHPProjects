<?php
  $name   = $_POST["username"];
  $email  = $_POST["useremail"];
  $password  = $_POST["userpassword"];
  $data = array(
    "username"  => $name,
    "useremail"   => $email,
    "userpassword" => $password
    );
      echo json_encode($data);
  ?>
