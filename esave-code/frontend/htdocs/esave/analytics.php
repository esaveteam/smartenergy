
<?php require("header.php");?>
         <meta charset="utf-8">
         <script src="raphael-min.js"></script>
		 <script src="g.raphael-min.js"></script>
		 
		<style type="text/css">
		body
		{
		background:white !important;
		}
		</style>
        <script src="g.pie-min.js"></script>
        <script>
            window.onload = function () {
			   
                var r = Raphael("holder"),
                    pie = r.piechart(320, 230, 100, [15, 15, 40, 25, 5], { legend: ["%%.%% - Entertainment", "%%.%% - Cooking","%%.%% - Cooling and Heating","%%.%% - Cleaning","%%.%% - Miselleneous"], legendpos: "west", href: ["cooling.php","cleaning.php","entertainment.php","cooking.php",""]});

                r.text(320, 70, "Activity Based Chart").attr({ font: "20px sans-serif" });
                pie.hover(function () {
                    this.sector.stop();
                    this.sector.scale(1.1, 1.1, this.cx, this.cy);

                    if (this.label) {
                        this.label[0].stop();
                        this.label[0].attr({ r: 7.5 });
                        this.label[1].attr({ "font-weight": 800 });
                    }
                }, function () {
                    this.sector.animate({ transform: 's1 1 ' + this.cx + ' ' + this.cy }, 500, "bounce");

                    if (this.label) {
                        this.label[0].animate({ r: 5 }, 500, "bounce");
                        this.label[1].attr({ "font-weight": 400 });
                    }
                });
				$("a").each(function(){
			   $(this).attr("rel","external");
			   
			   });
            };
        </script>
		<script type="text/javascript" src="https://www.google.com/jsapi"></script>
    <script type="text/javascript">
      google.load("visualization", "1", {packages:["corechart"]});
      google.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Time', 'Cooling and Heating', 'Cooking', 'Cleaning','Entertainment'],
          ['12:00am',  1.2,    .16,0.23,0.10],
		  ['1:00am',  1.21,    0.16,0.22,0.11],
          ['2:00am',  1.22,    .16,0.23,0.10],
          ['3:00am',  1.20,   .16,0.35,0.12],
          ['4:00am',  1.1,   .14,0.45,0.11],
		  ['5:00am', 1.11, .15,0.36,0.10],
		  ['6:00am',  1.20,    0.16,0.22,0.10],
          ['7:00am',  1.12,    .76,0.23,0.25],
          ['8:00am',  1.3,    0.86,0.22,0.21],
          ['9:00am',  1.33,    .56,0.23,0.20],
          ['10:00am',  1.2,   .16,0.35,0.13],
          ['11:00am',  1.0,   .14,0.45,0.11],
		  ['12:00pm', 1.06, .29,0.36,0.28],
		  ['1:00pm',  1.1,    0.26,0.22,0.31],
          ['2:00pm',  1.08,    .17,0.23,0.30],
          ['3:00pm',  1.0,   .16,0.35,0.23],
          ['4:00pm',  1.10,   .14,0.45,0.26],
		  ['5:00pm', 1.3, .16,0.36,0.27],
		  ['6:00pm',  1.2,    0.36,0.22,0.41],
          ['7:00pm',  1.23,    .86,0.23,0.390],
          ['8:00pm',  1.3,   .76,0.35,0.383],
          ['9:00pm',  1.32,   .34,0.45,0.41],
		  ['10:00pm', 1.3, .16,0.36,0.50],
		  ['11:00pm',  1.2,    0.16,0.22,0.41],
          ]);

        var options = {
          title: 'Activity based consumption by time',
		  vAxis:{title: 'Energy consumption in kWh',  titleTextStyle: {color: 'red'}},
          hAxis: {title: 'Time',  titleTextStyle: {color: 'red'}}
        };

        var chart = new google.visualization.AreaChart(document.getElementById('chart_div'));
        chart.draw(data, options);
      }
    </script>
    </head>
    <body class="raphael" id="g.raphael.dmitry.baranovskiy.com">
        <div id="holder" style="float:left;width:40%">
          </div>
		  <br/>
		  <br/>
    <div id="chart_div" style="width: 60%; height: 300px;float:right"></div>

</body></html>