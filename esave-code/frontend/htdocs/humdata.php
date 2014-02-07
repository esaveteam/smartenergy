
<?php

 mysql_connect("localhost", "root", "") or
         die("Could not connect: " . mysql_error());
        mysql_select_db("esave");
		




$q1 = mysql_query("SELECT * FROM esave.DATA ORDER BY times DESC LIMIT 0,1");
$rows = mysql_num_rows($q1);

?>
<?php
while($r = mysql_fetch_array($q1))
{
	$read=$r[3].",".$r[4];
}
mysql_close();
echo $read;



?>

