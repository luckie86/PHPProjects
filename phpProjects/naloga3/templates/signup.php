<?php

session_start();

 ?>

<?php

  $email   = $_POST["email"];
  $password  = $_POST["password"];
  $mobile  = $_POST["mobile"];
  $data = array(
    "email"  => $email,
    "password" => $password,
    "mobile" => $mobile
    );
    echo json_encode($data);


      $_SESSION["email"] = $email;
      $_SESSION["password"] = $password;
      $_SESSION["mobile"] = $mobile;

?>
