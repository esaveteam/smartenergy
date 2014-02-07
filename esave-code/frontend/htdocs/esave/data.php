
<?php
$jsonObject = json_decode(file_get_contents("http://api.eia.gov/series/data/?series_id=ELEC.PRICE.MO-RES.M&api_key=D22C60AF55E84415CE625E0391B3779B"));

	
	var_dump($jsonObject->request);
		
	

?>