<?php
$conn = mysql_connect('localhost','root','') or die(mysql_error());

//Selecting the Database
$db = mysql_select_db('Esave') or die(mysql_error());
?>