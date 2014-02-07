<?php
$curl = curl_init();
// Set some options - we are passing in a useragent too here
$key="QDPZ-RcefozDQlqMyJhHjNS1AS0gQSNIP_7e";
curl_setopt_array($curl, array(
    CURLOPT_RETURNTRANSFER => 1,
    CURLOPT_URL => 'https://data.energystar.gov/resource/energy-star-certified-clothes-washers.json?$where=annual_energy_use_kwh_year>2',
    CURLOPT_HTTPHEADER => array('X-App-Token: 4iadH4RiRMJa5xPsDYYsiUcOF'),
	CURLOPT_SSL_VERIFYPEER => false
));
// Send the request & save response to $resp
$xml = curl_exec($curl);
curl_close($curl);
$fileContents = str_replace(array("\n", "\r", "\t"), '', $xml);
        $fileContents = str_replace('"', "'", $fileContents);
      

$fileContents = str_replace('\\"','&quot;',$fileContents);
 $fileContents = str_replace('\"','&quot;',$fileContents);
$fileContents = str_replace('"','&quot;',$fileContents);
 
	   header("content-type:application/json");
echo json_encode($fileContents);
        
?>
