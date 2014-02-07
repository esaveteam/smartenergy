<?php 
$find=$_GET["find"];
$keyword=$_GET["keyword"];
$tweet_data = json_decode(file_get_contents("http://170.224.192.51:8080/esavews-war/rest/json/searchrep?find=$find&keyword=$keyword"));

		// Load the template for tweet display
		$tweet_template= file_get_contents('tweet_template.html');
		
		// Load the library of tweet display functions
		require 'display_lib.php';	
		
		// Create a stream of formatted tweets as HTML
		$tweet_stream = '';
		foreach($tweet_data as $tweet) {
				
			
			// Get a fresh copy of the tweet template
			$tweet_html = $tweet_template;
			
			$tweet_html = str_replace('[tweet_text]',
				linkify($tweet),$tweet_html);
			
			// Add the HTML for this tweet to the stream
			$tweet_stream .= $tweet_html;
		}
			
		// Pass the tweets HTML back to the Ajax request
		print $tweet_stream;
		

?>