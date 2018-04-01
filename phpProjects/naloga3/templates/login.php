<?php

session_start();

?>

<?php

$emailP   = $_POST["email"];
$passwordP  = $_POST["password"];

$emailS = $_SESSION["email"];
$passwordS = $_SESSION["password"];

if ($emailS == $emailP && $passwordS == $passwordP) {
  $data = array(
      "email"  => $emailP,
      "password"   => $passwordP
      );
    echo json_encode($data);
} else {
    exit;
}

 ?>
