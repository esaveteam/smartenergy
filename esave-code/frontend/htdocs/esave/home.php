

<?php require_once('header.php') ;


?>
  
      <p id="demo"></p>
      
        <h3>Enter Location</h3>
            <form action="address.php" data-ajax='false' method="POST">
	  
	  <label for="zipcode">Zip Code:</label>
            <input type="number" pattern="[0-9]*" minlength="5" name="zipcode" id="zipcode" data-mini="true" required/>
			<button type="submit">GO</button>
			</form>
	  	  <center><p> OR </p></center>
	    <h3>Use GPS Loaction</h3>
             
			<button onclick="getLocation()">Use GPS Location</button>

     
</div>

	  <script>
var x=document.getElementById("demo");
function getLocation()
  {
  if (navigator.geolocation)
    {
    navigator.geolocation.getCurrentPosition(showPosition,showError);
    }
  else{
  x.innerHTML="Geolocation is not supported by this browser.";}
  }
function showPosition(position)
  {
  
  window.location = "http://170.224.192.51/esave/address.php?lat="+ position.coords.latitude +"&lon="+ position.coords.longitude;	
  }
function showError(error)
  {
  switch(error.code) 
    {
    case error.PERMISSION_DENIED:
      x.innerHTML="User denied the request for Geolocation."
      break;
    case error.POSITION_UNAVAILABLE:
      x.innerHTML="Location information is unavailable."
      break;
    case error.TIMEOUT:
      x.innerHTML="The request to get user location timed out."
      break;
    case error.UNKNOWN_ERROR:
      x.innerHTML="An unknown error occurred."
      break;
    }
  }
</script>
	  <div data-role="footer" data-position="fixed">		
	<div data-role="navbar">
		<ul>
		    <li><a href="#">Home</a></li>
			<li><a rel="external" href="http://170.224.192.51/esave/test_map.php">Energy Map</a></li>
			
			
			<li><a rel="external" href="http://170.224.192.51/esave/game.html">Game</a></li>
			
		    
		</ul>
	</div><!-- /navbar -->
</div><!-- /footer 