<?php require("header.php");?>
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
                    pie = r.piechart(320, 230, 100, [30, 19, 10, 35, 6], { legend: ["%%.%% - Television", "%%.%% - Personal Computer","%%.%% - PlayStation","%%.%% - VideoProjector","%%.%% - Sub Woofer"], legendpos: "west", href: []});

                r.text(320, 70, "Appliance Based Chart-Entertainment").attr({ font: "20px sans-serif" });
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
            };
        </script>
    </head>
    <body class="raphael" id="g.raphael.dmitry.baranovskiy.com">
        <div id="holder">
          </div>
    

</body></html>