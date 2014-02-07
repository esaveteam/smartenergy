<?php
session_start();
$nop=$_SESSION["nop"];
$enp=$_SESSION["enp"];

if($_POST)
{
$nofag=$_POST["nofag"];
$area=$_POST["area"];
$washer=$_POST["washer"];
$fridge=$_POST["fridge"];
$lights=$_POST["lights"];

}
$cost_fridge=array();
$cost_fridge["top"]=537;
$cost_fridge["bottom"]=598;
$cost_fridge["side"]=695;
$cost_fridge["upright"]=803;
$cost_fridge["chest"]=517;


$cost=$cost_fridge[$fridge]*$enp;
  mysql_connect("localhost", "root", "") or
         die("Could not connect: " . mysql_error());
        mysql_select_db("esave");
		
		$latlng=$_SESSION["latlng"];
		$l=explode(",",$latlng);
		$sql="insert into map(lat,lng,energy_consumption) values(".$l[0].",".$l[1].",".$cost.")";
 $result = mysql_query($sql) or die(mysql_error());
 
require_once('header.php') ;
?>
<br/>
<center><p>Estimated Cost:$<?php echo $cost;?></p></center>

