<?php
session_start();
include('db.php');

if(isset($_POST['email']) && isset($_POST['password'])){

$conn = new mysqli($servername, $username, $password, $dbname);


if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
$password = sha1($_POST['password']);
$email = $_POST['email'];

$stmt = $conn->prepare("SELECT email FROM users WHERE email = ?");
$stmt->bind_param("s", $email);



$stmt->execute();
$stmt -> store_result();
$stmt -> bind_result($e);
$stmt -> fetch();

if($e == $email){
    echo 111;
}
else{

$stmt2 = $conn->prepare("INSERT INTO users (email, password) VALUES (?, ?)");
$stmt2->bind_param("ss", $email, $password);



$stmt2->execute();


echo 200;
$_SESSION['email'] = $email;

$stmt2->close();


}
$stmt->close();
$conn->close();
}
else{
    echo "unauthorised access";
}
?>
