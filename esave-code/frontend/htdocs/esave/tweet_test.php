<?php

require_once('TwitterAPIExchange.php');

/** Set access tokens here - see: https://dev.twitter.com/apps/ **/
$settings = array(
    'oauth_access_token' => "156595758-6UuoCvBXi8BxchXAZJjoRAfwqtuyEA8vt1AXKEH0",
    'oauth_access_token_secret' => "RVdZg3vFwqyunlRoBRrxBqJjsxGmL7ryj5H7ywxWns",
    'consumer_key' => "oMIJ8huoHBE7BVD6iBQYA",
    'consumer_secret' => "KPsMc2qGyGWRfyvciLf0hHZ8sgLV88XeCaLRvy3Bno0"
);

/** URL for REST request, see: https://dev.twitter.com/docs/api/1.1/ **/
$url = 'https://api.twitter.com/1.1/blocks/create.json';
$requestMethod = 'POST';

/** POST fields required by the URL above. See relevant docs as above **/
$postfields = array(
    'screen_name' => 'yashu_010', 
    'skip_status' => '1'
);

/** Perform a POST request and echo the response **/
$twitter = new TwitterAPIExchange($settings);
echo $twitter->buildOauth($url, $requestMethod)
             ->setPostfields($postfields)
             ->performRequest();
