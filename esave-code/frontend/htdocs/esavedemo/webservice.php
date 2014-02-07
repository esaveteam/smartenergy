<?php
$ini = ini_set("soap.wsdl_cache_enabled", 0);
$devname=$_POST['devname'];
 $wsdl = "http://localhost:8080/test/services/Test?wsdl";
 
  // The connection options.
   $options = array(
        'cache_wsdl'    => WSDL_CACHE_BOTH,
        'compression'   => SOAP_COMPRESSION_ACCEPT | SOAP_COMPRESSION_GZIP,
        'encoding'      => 'ISO-8859-1',
        'trace'         => 1
    );


  // Create a new SoapClient.
  $client = new SoapClient($wsdl, $options);
  
 
  // Call the add operation.
  $result = $client->FindSuperClassUnderThing('PizzaBase');


echo $result;

?>