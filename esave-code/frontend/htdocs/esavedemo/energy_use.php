<!DOCTYPE HTML>
<?php include_once('lightbox-jquery.php'); ?>
<html>
	<head>
		<title>ESAVE-YOUR ENERGY USE</title>
		
		<link href="http://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600|Arvo:700" rel="stylesheet" type="text/css" />
		<!--[if lte IE 8]><script src="js/html5shiv.js"></script><![endif]-->
		
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
	</head>
	<body class="right-sidebar">

		<!-- Header Wrapper -->
			<div id="header-wrapper">
						
				<!-- Header -->
					<div id="header" class="container">
						
						
							<nav id="nav">
								<ul>
									<li><a href="index.php" class="icon icon-home"><span>DASHBOARD</span></a></li>
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
												<h2>OVERALL Use</h2>
											</header>
											<br/>
											CONSUMPTION
											<br/>
											
											<script type="text/javascript" src="http://ajax.googleapis.com/ajax/static/modules/gviz/1.0/chart.js"> {"dataSourceUrl":"http://docs.google.com/spreadsheet/tq?key=0AhuR1ISrt5B1dEVEd1p5MzBVSFhiMEI5QW1TWU96ZWc&transpose=0&headers=1&gid=0&pub=1","options":{"scaleColumns": 2,"displayAnnotations":true,"titleTextStyle":{"fontSize":16},"animation":{"duration":500},"allValuesSuffix":"kW","width":640,"fill":1,"hAxis":{"useFormatFromData":true,"minValue":null,"viewWindow":{"min":null,"max":null},"maxValue":null},"wmode":"opaque","vAxes":[{"useFormatFromData":true,"minValue":null,"viewWindow":{"min":null,"max":null},"maxValue":null},{"useFormatFromData":true,"minValue":null,"viewWindow":{"min":null,"max":null},"maxValue":null}],"booleanRole":"certainty","title":"UMKC ENERGY GRAPH","height":302,"legend":"right"},"state":{},"view":{},"isDefaultVisualization":true,"chartType":"AnnotatedTimeLine","chartName":"Chart 1"} </script>
											<br/>
											COST
											<br/>
											<script type="text/javascript" src="http://ajax.googleapis.com/ajax/static/modules/gviz/1.0/chart.js"> {"dataSourceUrl":"http://docs.google.com/spreadsheet/tq?key=0AhuR1ISrt5B1dEc1WU84M0VRbkRMSGlGU2YtdUt2emc&transpose=0&headers=1&gid=0&pub=1","options":{"scaleColumns": 2,"displayAnnotations":true,"titleTextStyle":{"fontSize":16},"animation":{"duration":500},"allValuesSuffix":"$","width":640,"fill":1,"hAxis":{"useFormatFromData":true,"minValue":null,"viewWindow":{"min":null,"max":null},"maxValue":null},"wmode":"opaque","vAxes":[{"useFormatFromData":true,"minValue":null,"viewWindow":{"min":null,"max":null},"maxValue":null},{"useFormatFromData":true,"minValue":null,"viewWindow":{"min":null,"max":null},"maxValue":null}],"booleanRole":"certainty","title":"UMKC ENERGY GRAPH","height":302,"legend":"right"},"state":{},"view":{},"isDefaultVisualization":true,"chartType":"AnnotatedTimeLine","chartName":"Chart 1"} </script>
											
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
															<header style="width: 100%;padding-bottom: 5px;
border-bottom: 1px solid #d5d5d5">
																<span style="width: 100%;font-weight: bold">So far this year</span>
															</header>
															<p><b>Your total use:</b>280 kWh</p>
<h3>
Approximate Cost</h3>
<h4>$45.79</h4>

														</article>

												</li>
												<li><a class="group" data-fancybox-type="iframe" href="../esave/login.php">Estimate your energy</li>
											</ul>
										</section>
								
									
								
								</div>

						</div>
					</div>

			</div>

		
				

	</body>
</html>