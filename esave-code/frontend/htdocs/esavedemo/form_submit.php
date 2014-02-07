<?php

$conn = mysql_connect('localhost','root','') or die(mysql_error());

//Selecting the Database
$db = mysql_select_db('esave') or die(mysql_error());
		$fname = $_POST["fname"];
		$lname = $_POST["lname"];
		$phone = $_POST["phone"];
		$email = $_POST["email"];
		$username=$_POST["username"];
        $password=$_POST["password"];
        $address=$_POST["address"];		
		
		
	 		$query="insert into user(username,password,fname,lname,email,phone,address) values('".$username."','".$password."','".$fname."','".$lname."','".$email."','".$phone."','".$address."')";
    
			//Run the query
			$result=mysql_query($query) or die(mysql_error());
			
			if($result){
			session_start();
			$_SESSION['uname']=$username;
				echo "user added successfully";
				header("location:http://170.225.98.69/profile.html");
		    
		}
				else{
					die(mysql_error());
					}

?>