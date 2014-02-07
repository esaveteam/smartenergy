<!DOCTYPE HTML>
<?php
$curl = curl_init();

curl_setopt_array($curl, array(
    CURLOPT_RETURNTRANSFER => 1,
    CURLOPT_URL => 'http://170.224.192.51:8080/esavews-war/rest/json/getdata',
    CURLOPT_HTTPHEADER => array('Content-type: application/json'),
	CURLOPT_SSL_VERIFYPEER => false
));
// Send the request & save response to $resp
$xml = curl_exec($curl);
curl_close($curl);
$val=explode(",",$xml);

?>

<html>
	<head>
		<title>ESAVE-FULL WEATHER</title>
		
		<link href="http://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600|Arvo:700" rel="stylesheet" type="text/css" />
		<!--[if lte IE 8]><script src="js/html5shiv.js"></script><![endif]-->
		<link rel="stylesheet" href="http://code.jquery.com/ui/1.10.3/themes/smoothness/jquery-ui.css">
  <script src="http://code.jquery.com/jquery-1.9.1.js"></script>
  <script src="http://code.jquery.com/ui/1.10.3/jquery-ui.js"></script>
		<script src="js/jquery.dropotron.js"></script>
		<script src="js/config.js"></script>
		<script src="js/skel.min.js"></script>
		<script src="js/skel-panels.min.js"></script>
		<link href="css/search_client.css" type="text/css" rel="stylesheet" />
	<link href="css/tweet.css" type="text/css" rel="stylesheet" />
	
	<script src="js/search_client.js"></script>
		<noscript>
			<link rel="stylesheet" href="css/skel-noscript.css" />
			<link rel="stylesheet" href="css/style.css" />
			<link rel="stylesheet" href="css/style-desktop.css" />
		</noscript>

<style>


body {
  font: 13px 'Open Sans', "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
  
}

#weather {
  width: 425px;
  margin: 0px auto;
  text-align: center;
  text-transform: uppercase;
}

#weather h2 {
  margin: 0 0 8px;
  font-size: 150px;
  font-weight: 300;
  text-align: center;
  text-shadow: 0px 1px 3px rgba(0, 0, 0, 0.15);
}
#weather h4 {
  margin: 0 0 8px;
  font-size: 10px;
  font-weight: 50;
  text-align: center;
  text-shadow: 0px 1px 3px rgba(0, 0, 0, 0.15);
}
#weather ul {
  margin: 0;
  padding: 0;
}

#weather li {
   padding: 20px;
  display: inline-block;
}

#weather .currently {
  margin: 0 20px;
}
</style>
<script>
$(document).ready(function() {
  var d = new Date();

  $.simpleWeather({
    zipcode: '64110',
    woeid: '',
    location: '',
    unit: 'f',
    success: function(weather) {
      html = '<h2>'+weather.temp+'&deg;'+weather.units.temp+'</h2>';
      html += '<h4>Inside Temperature:<?php echo $val[0];?>&degF</h4>';
	  html += '<h4>Humidity:<?php echo $val[1]?>%</h4>';
	  html += '<ul><li>'+weather.city+', '+weather.region+'</li>';
      html += '<li class="currently">'+weather.currently+'</li>';
	  html += '<br/>';
	  
  
      $("#weather").html(html);
    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  });
});



(function(e){"use strict";e.extend({simpleWeather:function(t){t=e.extend({zipcode:"",woeid:"2357536",location:"",unit:"f",success:function(e){},error:function(e){}},t);var n=new Date;var r="http://query.yahooapis.com/v1/public/yql?format=json&rnd="+n.getFullYear()+n.getMonth()+n.getDay()+n.getHours()+"&diagnostics=true&callback=?&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&q=";if(t.location!==""){r+='select * from weather.forecast where location in (select id from weather.search where query="'+t.location+'") and u="'+t.unit+'"'}else if(t.zipcode!==""){r+='select * from weather.forecast where location in ("'+t.zipcode+'") and u="'+t.unit+'"'}else if(t.woeid!==""){r+="select * from weather.forecast where woeid="+t.woeid+' and u="'+t.unit+'"'}else{t.error("Could not retrieve weather due to an invalid WOEID or location.");return false}e.getJSON(r,function(n){if(n!==null&&n.query.results!==null&&n.query.results.channel.description!=="Yahoo! Weather Error"){e.each(n.query.results,function(e,n){if(n.constructor.toString().indexOf("Array")!==-1){n=n[0]}var r=new Date;var i=new Date(r.toDateString()+" "+n.astronomy.sunrise);var s=new Date(r.toDateString()+" "+n.astronomy.sunset);if(r>i&&r<s){var o="d"}else{var o="n"}var u=["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW","N"];var a=u[Math.round(n.wind.direction/22.5)];if(n.item.condition.temp<80&&n.atmosphere.humidity<40){var f=-42.379+2.04901523*n.item.condition.temp+10.14333127*n.atmosphere.humidity-.22475541*n.item.condition.temp*n.atmosphere.humidity-6.83783*Math.pow(10,-3)*Math.pow(n.item.condition.temp,2)-5.481717*Math.pow(10,-2)*Math.pow(n.atmosphere.humidity,2)+1.22874*Math.pow(10,-3)*Math.pow(n.item.condition.temp,2)*n.atmosphere.humidity+8.5282*Math.pow(10,-4)*n.item.condition.temp*Math.pow(n.atmosphere.humidity,2)-1.99*Math.pow(10,-6)*Math.pow(n.item.condition.temp,2)*Math.pow(n.atmosphere.humidity,2)}else{var f=n.item.condition.temp}if(t.unit==="f"){var l="c";var c=Math.round(5/9*(n.item.condition.temp-32));var h=Math.round(5/9*(n.item.forecast[0].high-32));var p=Math.round(5/9*(n.item.forecast[0].low-32));var d=Math.round(5/9*(n.item.forecast[1].high-32));var v=Math.round(5/9*(n.item.forecast[1].low-32))}else{var l="f";var c=Math.round(9/5*n.item.condition.temp+32);var h=Math.round(9/5*n.item.forecast[0].high+32);var p=Math.round(9/5*n.item.forecast[0].low+32);var d=Math.round(5/9*(n.item.forecast[1].high+32));var v=Math.round(5/9*(n.item.forecast[1].low+32))}var m={title:n.item.title,temp:n.item.condition.temp,tempAlt:c,code:n.item.condition.code,todayCode:n.item.forecast[0].code,timeOfDay:o,units:{temp:n.units.temperature,distance:n.units.distance,pressure:n.units.pressure,speed:n.units.speed,tempAlt:l},currently:n.item.condition.text,high:n.item.forecast[0].high,highAlt:h,low:n.item.forecast[0].low,lowAlt:p,forecast:n.item.forecast[0].text,wind:{chill:n.wind.chill,direction:a,speed:n.wind.speed},humidity:n.atmosphere.humidity,heatindex:f,pressure:n.atmosphere.pressure,rising:n.atmosphere.rising,visibility:n.atmosphere.visibility,sunrise:n.astronomy.sunrise,sunset:n.astronomy.sunset,description:n.item.description,thumbnail:"http://l.yimg.com/a/i/us/nws/weather/gr/"+n.item.condition.code+o+"s.png",image:"http://l.yimg.com/a/i/us/nws/weather/gr/"+n.item.condition.code+o+".png",tomorrow:{high:n.item.forecast[1].high,highAlt:d,low:n.item.forecast[1].low,lowAlt:v,forecast:n.item.forecast[1].text,code:n.item.forecast[1].code,date:n.item.forecast[1].date,day:n.item.forecast[1].day,image:"http://l.yimg.com/a/i/us/nws/weather/gr/"+n.item.forecast[1].code+"d.png"},city:n.location.city,country:n.location.country,region:n.location.region,updated:n.item.pubDate,link:n.item.link};t.success(m)})}else{if(n.query.results===null){t.error("An invalid WOEID or location was provided.")}else{t.error("There was an error retrieving the latest weather information. Please try again.")}}});return this}})})(jQuery)
</script>

		<style>
		.ui-widget-header {
border: 1px solid #aaaaaa;
background: green !important;
color: #0E0909;
font-weight: bold;
}
		</style>
	</head>
	<body class="right-sidebar">

		<!-- Header Wrapper -->
			<div id="header-wrapper">
						
				<!-- Header -->
					<div id="header" class="container">
						
						
							<nav id="nav">
								<ul>
									<li><a class="icon icon-home"><span>DASHBOARD</span></a></li>
									<li>
										<a href="energy_use.php" class="icon icon-bar-chart"><span>YOUR ENERGY USE</span></a>
									</li>
									<li><a href="control.php" class="icon icon-cog"><span>CONTROL DEVICES</span></a></li>
									<li><a href="reccom.php" class="icon-info-sign"><span>RECCOMENDATIONS</span></a></li>
									
								</ul>
							</nav>

					</div>

			</div>
			
		<!-- Main Wrapper -->
			<div id="main-wrapper">

				<!-- Main -->
					<div id="main" class="container">
						<div class="row">
						
							<!-- Content -->
								<div id="content" class="8u skel-cell-mainContent">

									<!-- Post -->
										<article class="is-post">
											<header>
												<h2>WEATHER</h2>
											</header>
										
											TEMPERATURE
											<br/>
											<script type="text/javascript" src="http://ajax.googleapis.com/ajax/static/modules/gviz/1.0/chart.js"> {"dataSourceUrl":"http://docs.google.com/spreadsheet/tq?key=0AhuR1ISrt5B1dFlpel9aUlFzS2Q4dDN5ZThfdmkwWkE&transpose=0&headers=1&gid=0&pub=1","options":{"scaleColumns": 2,"displayAnnotations":true,"titleTextStyle":{"fontSize":16},"animation":{"duration":500},"allValuesSuffix":"&degF","width":640,"fill":1,"hAxis":{"useFormatFromData":true,"minValue":null,"viewWindow":{"min":null,"max":null},"maxValue":null},"wmode":"opaque","vAxes":[{"useFormatFromData":true,"minValue":null,"viewWindow":{"min":null,"max":null},"maxValue":null},{"useFormatFromData":true,"minValue":null,"viewWindow":{"min":null,"max":null},"maxValue":null}],"booleanRole":"certainty","title":"UMKC ENERGY GRAPH","height":302,"legend":"right"},"state":{},"view":{},"isDefaultVisualization":true,"chartType":"AnnotatedTimeLine","chartName":"Chart 1"} </script>
											<br/>	<br/>
											HUMIDTY
											<br/>
											<script type="text/javascript" src="http://ajax.googleapis.com/ajax/static/modules/gviz/1.0/chart.js"> {"dataSourceUrl":"http://docs.google.com/spreadsheet/tq?key=0AhuR1ISrt5B1dE94LWsxb1Y4SnhONzhpVTFRUGxmNHc&transpose=0&headers=1&gid=0&pub=1","options":{"scaleColumns": 2,"displayAnnotations":true,"titleTextStyle":{"fontSize":16},"animation":{"duration":500},"allValuesSuffix":"%","width":640,"fill":1,"hAxis":{"useFormatFromData":true,"minValue":null,"viewWindow":{"min":null,"max":null},"maxValue":null},"wmode":"opaque","vAxes":[{"useFormatFromData":true,"minValue":null,"viewWindow":{"min":null,"max":null},"maxValue":null},{"useFormatFromData":true,"minValue":null,"viewWindow":{"min":null,"max":null},"maxValue":null}],"booleanRole":"certainty","title":"UMKC ENERGY GRAPH","height":302,"legend":"right"},"state":{},"view":{},"isDefaultVisualization":true,"chartType":"AnnotatedTimeLine","chartName":"Chart 1"} </script>
											
										</article>
								
								</div>
								
							<!-- Sidebar -->
								<div id="sidebar" class="4u">
								
									<!-- Excerpts -->
										<section>
											<ul class="divided">
												<li>

													<!-- Excerpt -->
														<article class="is-excerpt">
															<div id="weather"></div>
															<center><a href="fullweather.php">Full Weather</a></center>
														</article>

												</li>
												
											</ul>
										</section>
								
									
								
								</div>

						</div>
					</div>

			</div>

		
				

	</body>
</html>