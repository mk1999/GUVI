<?php
session_start();
include('db.php');

if(1){

$conn = new mysqli($servername, $username, $password, $dbname);


if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}


$stmt = $conn->prepare("UPDATE users set name = ?,dob = ?,gender = ?,mobile = ? WHERE email = ?");
$stmt->bind_param("sssss", $name, $dob ,$gender , $mobile ,$email);



$email = $_SESSION['email'];
$name = $_POST['name'];
$dob = $_POST['dob'];
$gender = $_POST['sex'];
$mobile = $_POST['mobile'];
$stmt->execute();

$response = array();
$posts = array();
$posts[] = array('email'=> $email , 'name'=> $name, 'dob'=> $dob , 'gender'=> $gender , 'mobile'=> $mobile);




$fp = fopen('results.json', 'a');
fwrite($fp, json_encode($posts));
fclose($fp);

echo 200;
$_SESSION['email'] = $email;

$stmt->close();
$conn->close();

}
else{
    echo "unauthorised access";
}
?>
