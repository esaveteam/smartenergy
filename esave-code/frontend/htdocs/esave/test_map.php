
 
<html>
    <head>
	
    <script src="http://code.jquery.com/jquery-1.8.3.min.js"></script>
			
			<style>
 
        BODY {font-family : Verdana,Arial,Helvetica,sans-serif; color: #000000; font-size : 13px ; }
 
        #map_canvas { width:100%; height: 100%; z-index: 0; }
    </style>
     <link href="https://google-developers.appspot.com/maps/documentation/javascript/examples/default.css"
        rel="stylesheet" type="text/css">
    <script type="text/javascript"
        src="https://maps.googleapis.com/maps/api/js?sensor=false&libraries=weather"></script>
    
 
    </head>
    <body onload="initialize()">
    <div id='input'>
 
        <?php
 
        //Connect to the MySQL database that is holding your data, replace the x's with your data
        mysql_connect("localhost", "root", "") or
         die("Could not connect: " . mysql_error());
        mysql_select_db("esave");
 
        //Initialize your first couple variables
        $encodedString = ""; //This is the string that will hold all your location data
        $x = 0; //This is a trigger to keep the string tidy
 
        //Now we do a simple query to the database
        $result = mysql_query("SELECT * FROM map");
 
        //Multiple rows are returned
        while ($row = mysql_fetch_array($result, MYSQL_NUM))
        {
            //This is to keep an empty first or last line from forming, when the string is split
            if ( $x == 0 )
            {
                 $separator = "";
            }
            else
            {
                 //Each row in the database is separated in the string by four *'s
                 $separator = "****";
            }
			$l1=$row[1]+0.5;
			$l2=$row[1]-0.5;
			$l3=$row[2]+0.5;
			$l4=$row[2]-0.5;
			$q1=mysql_query("select avg(energy_consumption) as avgs from map where lat>=".$l1." || lat<=".$l2." && lng>=".$l3." ||lng<=".$l4);
            $avg=0;
			while($r1=mysql_fetch_array($q1))
			{
			$avg=$r1["avgs"];
			}
			$encodedString = $encodedString.$separator.
            "<p class='content'><b>Lat:</b> ".$row[1].
            "<br><b>Long:</b> ".$row[2].
            "<br><b>Average Energy Consumption:</b> ".$avg.
            "<br><b>Energy_consumption: </b>".$row[3].
            "</p>&&&".$row[1]."&&&".$row[2]."&&&".$row[3];
            $x = $x + 1;
        }        
        ?>
 
        <input type="hidden" id="encodedString" name="encodedString" value="<?php echo $encodedString; ?>" />
    </div>
    <div id="map_canvas"></div>
    </body>
	<script type='text/javascript'>
 
    function initialize() {
          //Initialize the Google Maps
            var geocoder;
            var map;
            var markersArray = [];
            var infos = [];
 
            geocoder = new google.maps.Geocoder();
            var myOptions = {
                  zoom: 3,
                  mapTypeId: google.maps.MapTypeId.ROADMAP
                }
            //Load the Map into the map_canvas div
            var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
            map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
 
            //Initialize a variable that the auto-size the map to whatever you are plotting
            var bounds = new google.maps.LatLngBounds();
            //Initialize the encoded string       
            var encodedString;
            //Initialize the array that will hold the contents of the split string
            var stringArray = [];
            //Get the value of the encoded string from the hidden input
            encodedString = document.getElementById("encodedString").value;
            //Split the encoded string into an array the separates each location
            stringArray = encodedString.split("****");
 
            var x;
            for (x = 0; x < stringArray.length; x = x + 1)
            {
                var addressDetails = [];
                var marker;
                //Separate each field
                addressDetails = stringArray[x].split("&&&");
                //Load the lat, long data
                var lat = new google.maps.LatLng(addressDetails[1], addressDetails[2]);
               var cost=addressDetails[3];
			   var pinColor="";
		       var pinImage="";
			   var pinShadow="";
			    if(cost>60)
				{
				  pinColor = "FE7569";
     pinImage = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + pinColor,
        new google.maps.Size(21, 34),
        new google.maps.Point(0,0),
        new google.maps.Point(10, 34));
    pinShadow = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_shadow",
        new google.maps.Size(40, 37),
        new google.maps.Point(0, 0),
        new google.maps.Point(12, 35));
				
				}
				else
				{
				  pinColor = "FFFFFF";
     pinImage = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + pinColor,
        new google.maps.Size(21, 34),
        new google.maps.Point(0,0),
        new google.maps.Point(10, 34));
    pinShadow = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_shadow",
        new google.maps.Size(40, 37),
        new google.maps.Point(0, 0),
        new google.maps.Point(12, 35));
				
				}
                marker = new google.maps.Marker({
                    map: map,
                    position: lat,
                    //Content is what will show up in the info window
					icon: pinImage,
                    shadow: pinShadow,
					animation: google.maps.Animation.DROP,
                    content: addressDetails[0]
                });
                //Pushing the markers into an array so that it's easier to manage them
                markersArray.push(marker);
var weatherLayer = new google.maps.weather.WeatherLayer({
    temperatureUnits: google.maps.weather.TemperatureUnit.FAHRENHEIT
  });
  weatherLayer.setMap(map);

  var cloudLayer = new google.maps.weather.CloudLayer();
  cloudLayer.setMap(map);            
			google.maps.event.addListener( marker, 'click', function () {
                    closeInfos();
                    var info = new google.maps.InfoWindow({content: this.content});
                    //On click the map will load the info window
                    info.open(map,this);
                    infos[0]=info;
                });
               //Extends the boundaries of the map to include this new location
               bounds.extend(lat);
            }
            //Takes all the lat, longs in the bounds variable and autosizes the map
            map.fitBounds(bounds);
            map.setZoom(map.getZoom() + 2);
  
  //Manages the info windows
            function closeInfos(){
           if(infos.length > 0){
              infos[0].set("marker",null);
              infos[0].close();
              infos.length = 0;
           }
            }
 
    }
    </script>
</html>