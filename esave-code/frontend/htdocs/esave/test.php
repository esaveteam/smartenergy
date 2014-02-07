<?php
$url="http://api.eia.gov/series/data/?series_id=ELEC.PRICE.MO-RES.M&api_key=D22C60AF55E84415CE625E0391B3779B";
$get     = file_get_contents($url);
$geoData = json_decode($get);
if(isset($geoData->series_data[0])) {
    $return = array();
	$return[]= $geoData->series_data[0]->data;
    $re=$return[0];
	$rey=$re[0];
	echo $rey[1];
}
?>