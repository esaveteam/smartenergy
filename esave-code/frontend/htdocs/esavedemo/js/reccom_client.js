// jQuery script for search request with server
jQuery(document).ready(function($) {

		
		// Display a progress indicator
		$('#search_results').html('<img src="ajax_loader.gif"> Loading Recommendations...');
		var gridster;
     setTimeout(function (){

             gridster = $(".gridster > ul").gridster({
          widget_margins: [5, 5],
          widget_base_dimensions: [100, 55]
      }).data('gridster');

      var widgets = [
          ['<li><center><p>Amana NFW5700B*</p><hr/>143 kwh_year</center></li>', 1, 2],
          ['<li><center><p>Ariston ARWXF129+#*</p><hr/>105 kwh_year</center></li>', 3, 2],
          ['<li><center><p>Blomberg WM 67121 NBL00</p><hr/>142 kwh_year</center></li>', 3, 2],
          ['<li><center><p>Daewoo DWD-WD31WW*</p><hr/>123 kwh_year</center></li>', 2, 1],
          ];

      $.each(widgets, function(i, widget){
          gridster.add_widget.apply(gridster, widget)
      });

	$('#search_results').html('');	

         }, 5000);
    
});