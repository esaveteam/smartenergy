<?php
if(isset($_POST['devname']))
$dev=$_POST['devname'];
else
$dev='a';

$conn = mysql_connect('localhost','root','') or die(mysql_error());

//Selecting the Database
$sleep_time=1;
$db = mysql_select_db('esave') or die(mysql_error());
if($dev=='fan')
{
$a=0;
$q=mysql_query("select sum(energy) as sum from device where status='on' and name='fan'");
while($r=mysql_fetch_array($q))
{ $a=$r['sum'];
  flush();
  sleep($sleep_time);
  }
echo $a;
}
else
{
$q=mysql_query("select sum(energy) as sum from device where status='on'");
while($r=mysql_fetch_array($q))
{ echo $r['sum'];
  flush();
  sleep($sleep_time);
  }
}
?>