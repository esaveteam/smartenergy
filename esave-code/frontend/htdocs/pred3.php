<?php
$curl = curl_init();
// Set some options - we are passing in a useragent too here
$username="83682026770877742724-83682026770877742724@kcpl.com";
$password="password";
date_default_timezone_set('America/Chicago');
$today  = date(DATE_ATOM,mktime(date("H")-1, 0, 0, date("m")  , date("d"), date("Y")));
$td  = date(DATE_ATOM,mktime(date("H"), 0, 0, date("m")  , date("d"), date("Y")));

curl_setopt_array($curl, array(
    CURLOPT_RETURNTRANSFER => 1,
    CURLOPT_URL => 'https://kcpl-clone.tendrildemo.com/api/rest/user/current-user/account/default-account/location/default-location/device/001db7000002cfa9/consumption/HOURLY;from='.$today.';to='.$td,
    CURLOPT_USERPWD => $username . ":" . $password,   // authentication
    CURLOPT_HTTPHEADER => array('Content-type: application/json'),
	CURLOPT_SSL_VERIFYPEER => false
));
// Send the request & save response to $resp
$xml = curl_exec($curl);
curl_close($curl);

$fileContents = str_replace(array("\n", "\r", "\t"), '', $xml);
        $fileContents = trim(str_replace('"', "'", $fileContents));
        $simpleXml = simplexml_load_string($fileContents);
        $json = json_encode($simpleXml);
		$jsonIterator = new RecursiveIteratorIterator(
    new RecursiveArrayIterator(json_decode($json, TRUE)),
    RecursiveIteratorIterator::SELF_FIRST);

foreach ($jsonIterator as $key => $val) {
    if(is_array($val)) {
        
    } else {
		if($key=="toDate")
		{
		 $toDate=$val;
		}
		if($key=="fromDate")
		{
		 $fromDate=$val;
		}
		if($key=="cost")
		{
		 $cost=$val;
		}
		if($key=="consumption")
		{
		 $consumption=$val;
		 break;
		}
        
    }
}
 $x = date("Y-m-d H:i:s", strtotime($toDate));

  mysql_connect("localhost", "root", "") or
         die("Could not connect: " . mysql_error());
        mysql_select_db("esave");
		
		
		$sql="insert into device(deviceid,Date,cost,consumption) values('001db7000002cfa9','".$x."',".$cost.",".$consumption.")";
 $result = mysql_query($sql) or die(mysql_error());
 


		
?>
