<?php

$conn = mysql_connect('localhost','root','') or die(mysql_error());

//Selecting the Database
$db = mysql_select_db('esave') or die(mysql_error());
		$hname = $_POST["Hname"];
		$monitored = $_POST["monitored"];
		$temp = $_POST["temp"];
		$yeare = $_POST["yeare"];
		$htype=$_POST["htype"];
        $multi=$_POST["multi"];
        $floors=$_POST["floors"];
session_start();		
		$username=$_SESSION['uname'];
		
	 		$query="insert into profile(username,hname,monitored,temp,yeare,htype,multi,floors) values('".$username."','".$hname."','".$monitored."','".$temp."','".$yeare."','".$htype."','".$multi."',".$floors.")";
    
			//Run the query
			$result=mysql_query($query) or die(mysql_error());
			
			if($result){
				echo "user added successfully";
				header("location:http://170.225.98.69/re.html");
				}
				else{
					die(mysql_error());
					}

?>