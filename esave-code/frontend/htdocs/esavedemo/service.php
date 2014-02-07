<?php
$conn = mysql_connect('localhost','root','') or die(mysql_error());


//Selecting the Database
$db = mysql_select_db('esave') or die(mysql_error());

$devname=$_POST['devname'];
if($devname=='fan')
{
 $status=$_POST['flip-0'];
if(isset($_POST['slider-0']))
$speed=$_POST['slider-0'];
else
$speed=0;
$myFile = "fanFile.txt";
$fh = fopen($myFile, 'w') or die("can't open file");
$stringData = "device:Fan:";
fwrite($fh, $stringData);
$stringData = "status:$status:\n";
fwrite($fh, $stringData);
$stringData = "speed:$speed\n";
fwrite($fh, $stringData);
fclose($fh);
if($status=='on')
{

$q=mysql_query("update device set status='on',energy=200 where name='fan'") or die(mysql_error());
$q1=mysql_query("insert into log(name,status,dae) values('fan','on',CURRENT_TIMESTAMP())") or die(mysql_error());
echo "Status:Fan swiched on with speed:".$speed;
}
else
{
$q=mysql_query("update device set status='off',energy=0 where name='fan'") or die(mysql_error());
$q1=mysql_query("insert into log(name,status,dae) values('fan','off',CURRENT_TIMESTAMP())") or die(mysql_error());
echo "Status:Fan swiched off";
}}
if($devname=='heater')
{
 $status=$_POST['flip-0'];
if(isset($_POST['slider-0']))
$speed=$_POST['slider-0'];
else
$speed=0;
$myFile = "heaterFile.txt";
$fh = fopen($myFile, 'w') or die("can't open file");
$stringData = "device:heater:";
fwrite($fh, $stringData);
$stringData = "status:$status:\n";
fwrite($fh, $stringData);
$stringData = "speed:$speed\n";
fwrite($fh, $stringData);
fclose($fh);
if($status=='on')
{
$q=mysql_query("update device set status='on',energy=200 where name='heater'") or die(mysql_error());
$q1=mysql_query("insert into log(name,status,dae) values('heater','on',CURRENT_TIMESTAMP())") or die(mysql_error());
echo "Status:Heater swiched on with temperature:".$speed;
}
else
{$q=mysql_query("update device set status='on',energy=200 where name='heater'") or die(mysql_error());
$q1=mysql_query("insert into log(name,status,dae) values('heater','on',CURRENT_TIMESTAMP())") or die(mysql_error());

echo "Status:Heater swiched off";
}}
if($devname=='airconditioner')
{
 $status=$_POST['flip-0'];
if(isset($_POST['slider-0']))
$speed=$_POST['slider-0'];
else
$speed=0;
$myFile = "airconditionerFile.txt";
$fh = fopen($myFile, 'w') or die("can't open file");
$stringData = "device:airconditioner:";
fwrite($fh, $stringData);
$stringData = "status:$status:\n";
fwrite($fh, $stringData);
$stringData = "speed:$speed\n";
fwrite($fh, $stringData);
fclose($fh);
if($status=='on')
{
$q=mysql_query("update device set status='on',energy=200 where name='airconditioner'") or die(mysql_error());
$q1=mysql_query("insert into log(name,status,dae) values('airconditioner','on',CURRENT_TIMESTAMP())") or die(mysql_error());

echo "Status:Air Conditioner swiched on with temperature:".$speed;
}
else
{
$q=mysql_query("update device set status='on',energy=200 where name='airconditioner'") or die(mysql_error());
$q1=mysql_query("insert into log(name,status,dae) values('airconditioner','off',CURRENT_TIMESTAMP())") or die(mysql_error());

echo "Status:Air Conditioner swiched off";
}}

if($devname=='tv')
{
 $status=$_POST['flip-0'];
if(isset($_POST['slider-0']))
$speed=$_POST['slider-0'];
else
$speed=0;
$myFile = "tvFile.txt";
$fh = fopen($myFile, 'w') or die("can't open file");
$stringData = "device:tv:";
fwrite($fh, $stringData);
$stringData = "status:$status:\n";
fwrite($fh, $stringData);
$stringData = "channel:$speed\n";
fwrite($fh, $stringData);
fclose($fh);
if($status=='on')
{
$q=mysql_query("update device set status='on',energy=200 where name='tv'") or die(mysql_error());
$q1=mysql_query("insert into log(name,status,dae) values('tv','on',CURRENT_TIMESTAMP())") or die(mysql_error());

echo "Status:Television swiched on with channel:".$speed;

}
else
{
$q=mysql_query("update device set status='on',energy=200 where name='tv'") or die(mysql_error());
$q1=mysql_query("insert into log(name,status,dae) values('tv','off',CURRENT_TIMESTAMP())") or die(mysql_error());

echo "Status:Television swiched off";
}}

if($devname=='lamp')
{
$status=$_POST['flip-1'];
if(isset($_POST['slider-1']))
$speed=$_POST['slider-1'];
else
$speed=0;
$myFile = "lampFile.txt";
$fh = fopen($myFile, 'w') or die("can't open file");
$stringData = "device:Lamp:";
fwrite($fh, $stringData);
$stringData = "status:$status:\n";
fwrite($fh, $stringData);
$stringData = "intensity:$speed\n";
fwrite($fh, $stringData);
fclose($fh);
if($status=='on')
{
$q=mysql_query("update device set status='on',energy=200 where name='lamp'") or die(mysql_error());
$q1=mysql_query("insert into log(name,status,dae) values('lamp','on',CURRENT_TIMESTAMP())") or die(mysql_error());

echo "Status:Lamp swiched on with Intensity:".$speed;
}
else
{
$q=mysql_query("update device set status='on',energy=200 where name='lamp'") or die(mysql_error());
$q1=mysql_query("insert into log(name,status,dae) values('lamp','off',CURRENT_TIMESTAMP())") or die(mysql_error());

echo "Status:Lamp swiched off";
}}
if($devname=='tablelamp')
{
$status=$_POST['flip-1'];
if(isset($_POST['slider-1']))
$speed=$_POST['slider-1'];
else
$speed=0;
$myFile = "tablelampFile.txt";
$fh = fopen($myFile, 'w') or die("can't open file");
$stringData = "device:TableLamp:";
fwrite($fh, $stringData);
$stringData = "status:$status:\n";
fwrite($fh, $stringData);
$stringData = "intensity:$speed\n";
fwrite($fh, $stringData);
fclose($fh);
if($status=='on')
{
echo "Status:Table Lamp swiched on with Intensity:".$speed;
}
else
echo "Status:Table Lamp swiched off";
}
if($devname=='stove')
{
$status=$_POST['flip-0'];
$myFile = "stoveFile.txt";
$fh = fopen($myFile, 'w') or die("can't open file");
$stringData = "device:stove:";
fwrite($fh, $stringData);
$stringData = "status:$status:\n";
fwrite($fh, $stringData);
fclose($fh);
if($status=='on')
{
echo "Status:Stove swiched on";
}
else
echo "Status:Stove swiched off";
}
if($devname=='vaccum')
{
$status=$_POST['flip-0'];
$myFile = "vaccumFile.txt";
$fh = fopen($myFile, 'w') or die("can't open file");
$stringData = "device:vaccum:";
fwrite($fh, $stringData);
$stringData = "status:$status:\n";
fwrite($fh, $stringData);
fclose($fh);
if($status=='on')
{
echo "Status:Vacuum swiched on";
}
else
echo "Status:Vacuum cleaner swiched off";
}
if($devname=='welcomeactivity')
{
$status=$_POST['flip-0'];
$myFile = "welcomeactivity.txt";
$fh = fopen($myFile, 'w') or die("can't open file");
$stringData = "device:welcomeactivity:";
fwrite($fh, $stringData);
$stringData = "status:$status:\n";
fwrite($fh, $stringData);
fclose($fh);
if($status=='on')
{
echo "Status:Welcome Activity started";
}
else
echo "Status:Welcome Activity stopped";
}
if($devname=='heatingfoodactivity')
{
$status=$_POST['flip-0'];
$myFile = "heatingfoodactivity.txt";
$fh = fopen($myFile, 'w') or die("can't open file");
$stringData = "device:heatingfoodactivity:";
fwrite($fh, $stringData);
$stringData = "status:$status:\n";
fwrite($fh, $stringData);
fclose($fh);
if($status=='on')
{
echo "Status:Heating Food Acitivity started";
}
else
echo "Status:Heating Food Activity stopped";
}
if($devname=='solaractivity')
{
$status=$_POST['flip-0'];
$myFile = "solaractivity.txt";
$fh = fopen($myFile, 'w') or die("can't open file");
$stringData = "device:solaractivity:";
fwrite($fh, $stringData);
$stringData = "status:$status:\n";
fwrite($fh, $stringData);
fclose($fh);
if($status=='on')
{
echo "Status:Solar Harvesting Acitivity started";
}
else
echo "Status:Solar Harvesting Activity stopped";
}
if($devname=='boilingwateractivity')
{
$status=$_POST['flip-0'];
$myFile = "boilingwateractivity.txt";
$fh = fopen($myFile, 'w') or die("can't open file");
$stringData = "device:boilingwateractivity:";
fwrite($fh, $stringData);
$stringData = "status:$status:\n";
fwrite($fh, $stringData);
fclose($fh);
if($status=='on')
{
echo "Status:Boiling water Acitivity started";
}
else
echo "Status:Boiling water Activity stopped";
}
if($devname=='fridgeactivity')
{
$status=$_POST['flip-0'];
$myFile = "fridgeactivity.txt";
$fh = fopen($myFile, 'w') or die("can't open file");
$stringData = "device:fridgeactivity:";
fwrite($fh, $stringData);
$stringData = "status:$status:\n";
fwrite($fh, $stringData);
fclose($fh);
if($status=='on')
{
echo "Status:Taking an item from refrigerator Acitivity started";
}
else
echo "Status:Taking an item from refrigerator Activity stopped";
}
if($devname=='dishwasher')
{
$status=$_POST['flip-0'];
$myFile = "dishwasherFile.txt";
$fh = fopen($myFile, 'w') or die("can't open file");
$stringData = "device:dishwasher:";
fwrite($fh, $stringData);
$stringData = "status:$status:\n";
fwrite($fh, $stringData);
fclose($fh);
if($status=='on')
{
echo "Status:Dish Washer swiched on";
}
else
echo "Status:Dish Washer swiched off";
}
?>
