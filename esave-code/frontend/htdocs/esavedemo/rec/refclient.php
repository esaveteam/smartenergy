<?php 
$tweet_data = json_decode(file_get_contents("http://170.224.192.51/tendril/refre.php"),true);
   
		$jsondata = file_get_contents($tweet_data);
$obj = json_decode($jsondata,true);
echo $obj;
	// Handle errors from API request
	

?>