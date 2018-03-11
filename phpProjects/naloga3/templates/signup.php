<?php

  session_start();

  $_SESSION["favcolor"] = "green";


  $email   = $_POST["email"];
  $password  = $_POST["password"];
  $mobile  = $_POST["mobile"];
  $data = array(
    "email"  => $email,
    "password" => $password,
    "mobile" => $mobile
    );
      $_SESSION["email"] = $email;
      $_SESSION["password"] = $password;
      $_SESSION["mobile"] = $mobile;

      echo json_encode($data);

?>
