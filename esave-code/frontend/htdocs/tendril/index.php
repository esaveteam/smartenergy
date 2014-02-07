<!DOCTYPE HTML>

<html>
	<head>
		<title>ESAVE-DASHBOARD</title>
		
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
									<li><a class="icon icon-cog"><span>CONTROL DEVICES</span></a></li>
									
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
												<h2>News Feed</h2>
											</header>
											<div id="search_results"></div>
											
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
															<header style="width: 100%;padding-bottom: 5px;border-bottom: 1px solid #d5d5d5">
																<span style="width: 100%;font-weight: bold">Your Energy Use</span>
															</header>
															<p><h3>Billing Period:</h3>$40.36</p>
															<p>Next Billing Period: 27 days to go</p>
															<div id="progressbar"></div>
 <script>
$( "#progressbar" ).progressbar({
  value: 10
});
</script>
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