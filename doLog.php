<?php
session_start();
include('db.php');

if(isset($_POST['email']) && isset($_POST['password'])){

$conn = new mysqli($servername, $username, $password, $dbname);


if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}


$stmt = $conn->prepare("SELECT password FROM users WHERE email = ?");
$stmt->bind_param("s", $email);


$password = sha1($_POST['password']);
$email = $_POST['email'];
$stmt->execute();
$stmt -> store_result();
$stmt -> bind_result($p);
$stmt -> fetch();

if($p == $password){
    echo 200;
    $_SESSION['login'] = true;
    $_SESSION['email'] = $email;
    $_SESSION['pwd'] = $p;
}

else{
    
    echo 400;
}

$stmt->close();
$conn->close();

}
else{
    echo "unauthorised access";
}
?>
