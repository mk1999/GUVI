<?php
session_start();
if (isset($_SESSION['login'])) {
    if ($_SESSION['login'] == true) {



        ?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <?php include('snippets/head.html'); ?>
    <title>Home - Guvi Task</title>
  </head>
  <body>
    <?php include('snippets/navbar.html'); ?>
    <div class="container text-center">
        <h1>
            Welcome <?php echo $_SESSION['email']; ?>
        </h1>
        <p>
            U completed all the steps.
        </p>
    </div>
    <?php include('snippets/script-include.html'); ?>
    <script src="js/complete.js"></script>
  </body>
</html>

<?php 
}
} else {
    ?>
    <script>
        window.location = "login.php";
        </script>
    <?php

}
?>
