<?php
$devname=$_POST["devname"];;
if($devname=='fan')
{
 $a=file_get_contents('./fanfile.txt');
 $c = explode(":", $a);
 
 echo $c[3].",".$c[5];
}
if($devname=='lamp')
{
 $a=file_get_contents('./lampfile.txt');
 $c = explode(":", $a);
 
 echo $c[3].",".$c[5];
}
if($devname=='tv')
{
 $a=file_get_contents('./tvfile.txt');
 $c = explode(":", $a);
 
 echo $c[3].",".$c[5];
}
if($devname=='heater')
{
 $a=file_get_contents('./heaterfile.txt');
 $c = explode(":", $a);
 
 echo $c[3].",".$c[5];
}
if($devname=='tablelamp')
{
 $a=file_get_contents('./tablelampfile.txt');
 $c = explode(":", $a);
 
 echo $c[3].",".$c[5];
}

if($devname=='stove')
{
 $a=file_get_contents('./stovefile.txt');
 $c = explode(":", $a);
 
 echo $c[3];
}
if($devname=='vaccum')
{
 $a=file_get_contents('./vaccumfile.txt');
 $c = explode(":", $a);
 
 echo $c[3];
}
if($devname=='dishwasher')
{
 $a=file_get_contents('./dishwasherfile.txt');
 $c = explode(":", $a);
 
 echo $c[3];
}
if($devname=='boilingwateractivity')
{
 $a=file_get_contents('./boilingwateractivity.txt');
 $c = explode(":", $a);
 
 echo $c[3];
}
if($devname=='solaractivity')
{
 $a=file_get_contents('./solaractivity.txt');
 $c = explode(":", $a);
 
 echo $c[3];
}
if($devname=='fridgeactivity')
{
 $a=file_get_contents('./fridgeactivity.txt');
 $c = explode(":", $a);
 
 echo $c[3];
}
if($devname=='welcomeactivity')
{
 $a=file_get_contents('./welcomeactivity.txt');
 $c = explode(":", $a);
 
 echo $c[3];
}
if($devname=='heatfoodactivity')
{
 $a=file_get_contents('./heatingfoodactivity.txt');
 $c = explode(":", $a);
 
 echo $c[3];
}
?>
