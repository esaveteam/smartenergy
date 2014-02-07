// jQuery script for search request with server
jQuery(document).ready(function($) {

		
		// Display a progress indicator
		$('#search_results').html('<img src="ajax_loader.gif"> Loading Tweets...');
		
		
		var search_value = encodeURIComponent("#energy");
		
		// Send the search terms to the server in an Ajax request
		// This URL is for illustration only
		// You MUST change it to your server
		$.ajax({
			url: 'http://170.224.192.51/tweet/search_server.php?q=' + search_value,
			success: function(data){
				
				// Display the results
				$('#search_results').html(data);
			}
		})
	
});