<?php

// Request Yahoo! REST Web Service using
// file_get_contents. PHP4/PHP5
// Author: Rasmus Lerdorf and Jason Levitt
// February 1, 2006

error_reporting(E_ALL);

$request =  'http://localhost:8080/esavews-war/rest/json/getdatabydevice';

// Make the request
$xml = file_get_contents($request);

// Retrieve HTTP status code
list($version,$status_code,$msg) = explode(' ',$http_response_header[0], 3);



// Output the XML
echo htmlspecialchars($xml, ENT_QUOTES);
?>