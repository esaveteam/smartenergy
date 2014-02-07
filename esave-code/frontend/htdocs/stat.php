<?php
$conn = mysql_connect('localhost','root','') or die(mysql_error());

//Selecting the Database
$sleep_time=1;
$db = mysql_select_db('esave') or die(mysql_error());
$q=mysql_query("select status from device where name='fan'");
while($r=mysql_fetch_array($q))
{ $c= $r['status'];
  
  }
  $q=mysql_query("select status from device where name='lamp'");
while($r=mysql_fetch_array($q))
{ $c1= $r['status'];
  
  }
$q=mysql_query("select status from device where name='tv'");
while($r=mysql_fetch_array($q))
{ $c2= $r['status'];
  
  }
  $q=mysql_query("select status from device where name='heater'");
while($r=mysql_fetch_array($q))
{ $c3= $r['status'];
  
  }
  $q=mysql_query("select status from device where name='tablelamp'");
while($r=mysql_fetch_array($q))
{ $c4= $r['status'];
  
  }
  $q=mysql_query("select status from device where name='vacuum'");
while($r=mysql_fetch_array($q))
{ $c5= $r['status'];
  
  }
  echo "fan:".$c.":lamp:".$c1.":tv:".$c2.":heater:".$c3.":tablelamp:".$c4.":vaccum:".$c5;
?>