<?php
require_once "lib/nusoap.php";

function getfanstatus() {
    header('Content-disposition: attachment; filename=fanfile.txt');
header('Content-type: application/txt');
readfile('fanfile.txt');
}

function getlampstatus() {
    header('Content-disposition: attachment; filename=lampfile.txt');
header('Content-type: application/txt');
readfile('lampfile.txt');
}

$server = new soap_server();
$namespace = "http://e-save.com";
// create a new soap server
$server = new soap_server();
// configure our WSDL
$server->configureWSDL("esavedownloadService");
// set our namespace
$server->wsdl->schemaTargetNamespace = $namespace;

$server->register("getfanstatus",array('value' => 'xsd:string'), array('return' => 'xsd:string'), 'urn:server', 'urn:server#getfanstatus');
$server->register("getlampstatus",array('value' => 'xsd:string'), array('return' => 'xsd:string'), 'urn:server', 'urn:server#getlampstatus');
$HTTP_RAW_POST_DATA = isset($HTTP_RAW_POST_DATA) ? $HTTP_RAW_POST_DATA : '';
$server->service($HTTP_RAW_POST_DATA);

?>