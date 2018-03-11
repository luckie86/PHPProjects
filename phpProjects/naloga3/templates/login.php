<<?php

session_start();

$emailS = $_SESSION["email"];
$passwordS = $_SESSION["password"];

$emailP   = $_POST["email"];
$passwordP  = $_POST["password"];

if ($emailS == $emailP && $passwordS == $passwordP) {
  $data = array(
      "email"  => $emailP,
      "password"   => $passwordP,
      );
    echo json_encode($data);
    http_redirect("user.html");
} else {
  http_redirect("guest.html")
}

 ?>
