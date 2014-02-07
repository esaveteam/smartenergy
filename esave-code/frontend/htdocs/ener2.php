<?php
$conn = mysql_connect('localhost','root','') or die(mysql_error());

//Selecting the Database
$sleep_time=1;
session_start();
$username=$_SESSION['uname'];
$db = mysql_select_db('esave') or die(mysql_error());
$q=mysql_query("select * from profile where username='".$username."'");
while($r=mysql_fetch_array($q))
{ $c= $r['username'];
  $c1=$r['hname'];
  $c2=$r['monitored'];
  $c3=$r['htype'];
  $c4=$r['temp'];
  $c5=$r['yeare'];
  $c6=$r['multi'];
  $c7=$r['floors'];
  }
  echo $c.":".$c1.":".$c2.":".$c3.":".$c4.":".$c5.":".$c6.":".$c7;
?>