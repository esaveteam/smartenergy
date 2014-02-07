<?php
$conn = mysql_connect('localhost','root','') or die(mysql_error());

//Selecting the Database
$sleep_time=1;
$db = mysql_select_db('esave') or die(mysql_error());
$q=mysql_query("select sum(energy) as sum from device where devtype='cooling'");
while($r=mysql_fetch_array($q))
{ $c= $r['sum'];
  flush();
  sleep($sleep_time);
  }
  $q=mysql_query("select sum(energy) as sum from device where devtype='heating'");
while($r=mysql_fetch_array($q))
{ $c1= $r['sum'];
  flush();
  sleep($sleep_time);
  }
  $q=mysql_query("select sum(energy) as sum from device where devtype='cleaning'");
while($r=mysql_fetch_array($q))
{ $c2= $r['sum'];
  flush();
  sleep($sleep_time);
  }
  $q=mysql_query("select sum(energy) as sum from device where devtype='lighting'");
while($r=mysql_fetch_array($q))
{ $c3= $r['sum'];
  flush();
  sleep($sleep_time);
  }
  $q=mysql_query("select sum(energy) as sum from device where devtype='cooking'");
while($r=mysql_fetch_array($q))
{ $c4= $r['sum'];
  flush();
  sleep($sleep_time);
  }
  $q=mysql_query("select sum(energy) as sum from device where devtype='entertainment'");
while($r=mysql_fetch_array($q))
{ $c5= $r['sum'];
  flush();
  sleep($sleep_time);
  }
    $q=mysql_query("select sum(energy) as sum from device");
while($r=mysql_fetch_array($q))
{ $c6= $r['sum'];
  flush();
  sleep($sleep_time);
  }
  
  $c=$c/$c6;
  $c=$c*100;
  $c1=$c1/$c6;
   $c1=$c1*100;
  $c2=$c2/$c6;
   $c2=$c2*100;
  $c3=$c3/$c6;
   $c3=$c3*100;
  $c4=$c4/$c6;
   $c4=$c4*100;
  $c5=$c5/$c6;
   $c5=$c5*100;
  echo $c.":".$c1.":".$c2.":".$c3.":".$c4.":".$c5;
?>