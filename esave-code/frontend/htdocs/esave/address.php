<?php
$a="";
if($_GET)
{
 $lat=$_GET['lat'];
 $lon=$_GET['lon'];
 $latlon=$lat.",".$lon;
 $url = 'http://maps.google.com/maps/api/geocode/json?latlng=' . urlencode($latlon) .'&sensor=true'; 
 $a=getGeoCounty($url);
 
}
if($_POST)
{
 $zipcode=$_POST['zipcode'];
 $url = 'http://maps.google.com/maps/api/geocode/json?address=' . urlencode($zipcode) .'&sensor=true'; 
 $a=getGeoCounty($url);
 
}
$b=explode(",",$a);


$url="http://api.eia.gov/series/data/?series_id=ELEC.PRICE.".$b[2]."-RES.M&api_key=D22C60AF55E84415CE625E0391B3779B";
$get     = file_get_contents($url);
$geoData = json_decode($get);
if(isset($geoData->series_data[0])) {
    $return = array();
	$return[]= $geoData->series_data[0]->data;
    $re=$return[0];
	$rey=$re[0];
	$ep= $rey[1]/100;
}
function getGeoCounty($url) {
//$url = 'http://maps.google.com/maps/api/geocode/json?address=' . urlencode($geoAddress) .'&sensor=false'; 
$get     = file_get_contents($url);
$geoData = json_decode($get);
if(isset($geoData->results[0])) {
    $return = array();
	$return1=array();
    foreach($geoData->results[0]->address_components as $addressComponet) {
        if(in_array('locality', $addressComponet->types)) {
            $return[] = $addressComponet->long_name; 
        }
		if(in_array('administrative_area_level_1', $addressComponet->types)) {
            $return[] = $addressComponet->long_name.",".$addressComponet->short_name; 
        }
    }
	        $lat = $geoData->results[0]->geometry->location->lat;
$lng=$geoData->results[0]->geometry->location->lng;
      
    session_start();
	$_SESSION["latlng"]=$lat.",".$lng;
	
    return implode(", ",$return);
}
return null; 
}
?>
<?php require_once('header.php') ;


?>
<center>
<form action="appliance.php" method="POST">
 <div data-role="collapsible-set">
      <div data-role="collapsible" data-collapsed="true">
        <h3>Location Information</h3>
 <label for="Address">Address:</label>
            <input type="text" name="Address" id="Address" data-mini="true" />
			<p><small><i>Leave this field blank to exclude from Energy Consumption Map</i></small></p> 
 <label for="City">City:</label>
            <input type="text" name="City" id="City" value="<?php echo $b[0];?>" data-mini="true"/>
 <label for="State">State:</label>
            <input type="text" name="State" id="State" value="<?php echo $b[1];?>" data-mini="true"/>
       </div>
	    <div data-role="collapsible" data-collapsed="true">
        <h3>Family Information</h3>
 <label for="noofp">People living in house:</label>
            <input type="number" name="nop" id="nop" data-mini="true" required/>
 
       </div>
	   <div data-role="collapsible" data-collapsed="true">
        <h3>Energy Prices</h3>
 <label for="enp">Electricity:</label>
            <input type="text" name="enp" id="enp" data-mini="true" value="<?php echo $ep;?>"/>$/kilowatt-hour
 
       </div>
	   </div>
	   
			<button type="submit">NEXT</button>
			
</form>
</center>
