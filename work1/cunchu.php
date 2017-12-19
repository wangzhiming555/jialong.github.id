<?php
session_start();
$user=$_GET['use'];
$_SESSION['user']=$user;
echo $user;
?>