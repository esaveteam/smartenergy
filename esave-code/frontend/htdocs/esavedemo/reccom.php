<!DOCTYPE HTML>

<html>
	<head>
		<title>ESAVE-RECCOMENDATION'S</title>
		
		<link href="http://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600|Arvo:700" rel="stylesheet" type="text/css" />
		<!--[if lte IE 8]><script src="js/html5shiv.js"></script><![endif]-->
		<link rel="stylesheet" href="http://code.jquery.com/ui/1.10.3/themes/smoothness/jquery-ui.css">
  <script src="http://code.jquery.com/jquery-1.9.1.js"></script>
  <script src="http://code.jquery.com/ui/1.10.3/jquery-ui.js"></script>
		<script src="js/jquery.dropotron.js"></script>
		<script src="js/config.js"></script>
		<script src="js/skel.min.js"></script>
		<script src="js/skel-panels.min.js"></script>
		<script src="js/gridster.js"></script>
		<link href="css/search_client.css" type="text/css" rel="stylesheet" />
		<link href="js/gridster.css" type="text/css" rel="stylesheet" />
	<link href="css/tweet.css" type="text/css" rel="stylesheet" />
	
	<script src="js/reccom_client.js"></script>
		<noscript>
			<link rel="stylesheet" href="css/skel-noscript.css" />
			<link rel="stylesheet" href="css/style.css" />
			<link rel="stylesheet" href="css/style-desktop.css" />
		</noscript>
		<style>
		.ui-widget-header {
border: 1px solid #aaaaaa;
background: green !important;
color: #0E0909;
font-weight: bold;
}
.gridster * {
  margin:0;
  padding:0;
}

ul {
  list-style-type: none;
}


/*/
/* demo
/*/


body {
    font-size: 16px;
    font-family: 'Helvetica Neue', Arial, sans-serif;
    margin: 30px 40px;
}

.controls {
    margin-bottom: 20px;
}

/*/
/* gridster
/*/

.gridster ul {
    background-color: #EFEFEF;
}

.gridster li {
    font-size: 1em;
    font-weight: bold;
    text-align: center;
    line-height: 100%;
}


.gridster {
    margin: 0 auto;

    opacity: .8;

    -webkit-transition: opacity .6s;
    -moz-transition: opacity .6s;
    -o-transition: opacity .6s;
    -ms-transition: opacity .6s;
    transition: opacity .6s;
}

.gridster .gs-w {
    background: #DDD;
    cursor: pointer;
}

.gridster .player {
    background: #BBB;
}


.gridster .preview-holder {
    border: none!important;
    background: red!important;
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
												<h2>Recommendation's</h2>
											</header>
											<div id="search_results"></div>
											<div class="gridster">
        <ul></ul>
    </div>
										</article>
								
								</div>

						</div>
					</div>

			</div>

		
				

	</body>
</html>