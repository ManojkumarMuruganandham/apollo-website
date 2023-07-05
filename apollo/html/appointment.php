<?php
$username=$_POST["name"];
$location=$_POST["location"];
$phonenumber=$_POST["phonenumber"];

$conn = new mysqli($localhost, $username,$location,$phonenumber);     // create connection 


?>