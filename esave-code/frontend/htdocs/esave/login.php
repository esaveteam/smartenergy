


<!DOCTYPE html>
<html>
 <head>
	<!-- jQuery Assets/ -->
    <link rel="stylesheet" href="http://code.jquery.com/mobile/1.2.1/jquery.mobile-1.2.1.min.css" />
  <!---  <link rel="stylesheet" href="m-is.css" />--->
		<script src="http://code.jquery.com/jquery-1.8.3.min.js"></script>
			<script src="http://code.jquery.com/mobile/1.2.1/jquery.mobile-1.2.1.min.js"></script>
    <!-- /jQuery Assets -->
     <!--Overriding Local CSS-->
	 <!-- Add Facebook Friend Selector CSS -->
<link type="text/css" href="friend-selector/jquery.friend.selector-1.2.1.css" rel="stylesheet" />



<!-- Add Facebook Friend Selector JS -->
<script type="text/javascript" src="friend-selector/jquery.friend.selector-1.2.1.js"></script>

<!-- Friend Selector Integration  -->
<script type="text/javascript">
  jQuery(document).ready(function($) {
    $(".bt-fs-dialog").fSelector({
      getStoredFriends: [518640274, 529053659],
      onSubmit: function(response){
        alert(response);
      }
    });
  });
</script>
 	<link href="m-is.css" type="text/css" rel="stylesheet">   
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	<!-- This meta tag is required, else Mobile Safari attempts to scale this page -->
	<meta content="width=device-width, minimum-scale=1, maximum-scale=1" name="viewport">
	<title>ESAVE</title>
 </head>
<body>

    
    <div id= "firstpage" data-role="page">
    	
       <!-- Header -->
<link rel="stylesheet" href="m-is.css"/>
<link rel="stylesheet" href="styles.css"/>
<div data-role="header">
   <div id="univheader">
   <div id="logo"><a href="http://www.umkc.edu"><img src="images\logo.png" height="32px"></a></div>
   <div id="homeButton"><a href="login.php" rel="external" data-role="button" data-icon="home" data-iconpos="notext" class="ui-btn-right" data-theme="b">Home</a></div>
   </div> 
</div>
        
        <!-- Page Content -->
        <div class="ui-content" id="callAjaxPage" data-role="content" style="margin-bottom: 20px;">
        	
       
          
<!-- Facebook Integration  -->
<script src="//connect.facebook.net/en_US/all.js"></script>
<div id="fb-root"></div>
<script type="text/javascript">
  window.fbAsyncInit = function() {
    FB.init({
      appId  			: '163639753821939', // Facebook Application ID
      status 			: true, // check login status
      cookie 			: true, // enable cookies to allow the server to access the session
      xfbml  			: true, // parse XFBML
      channelUrl  : 'channel.html', // Channel File
    });


    FB.getLoginStatus(function(response) {
      if (response.authResponse) {
        $(".connect").attr("class", "logout").text("Logout");
        $(".fs-dialog-container").show();
		window.location.href="home.php";
        $(".logout").click(function(){
          FB.logout(function(response) {
            window.location.href="login.php";
          });
        });

      } else {

      }
    });

  };
  
  // Load the SDK Asynchronously
  (function(d){
     var js, id = 'facebook-jssdk'; if (d.getElementById(id)) {return;}
     js = d.createElement('script'); js.id = id; js.async = true;
     js.src = "//connect.facebook.net/en_US/all.js";
     d.getElementsByTagName('head')[0].appendChild(js);
   }(document));


  jQuery(document).ready(function($){

    $(".connect").click(function(){
      FB.login(function(response) {
	     
        if (response.authResponse) {
         window.location.href="home.php";
        } else {
          alert("Some problem with facebook...!");
        }
      }, {scope: 'user_groups'});
    });

  });

</script>

<center>
<br /><br /><br /><br /><br /><br />
<a href="javascript:{}" class="connect"><img src="images/button_fb-login.png"/></a>
<br/>

</center>
</body>
	   
		
		<div id="error"></div>
   
        </div> 
       <!-- Footer -->
<div style="position:absolute; bottom:0px; width: 100%;">
<div id="univfooter" class="ui-bar-b" data-position="fixed">
	<center>
    	<div id="footer-text"> University of Missouri-Kansas City - <a href="copyright.cfm" data-transition="slide">Copyright</a>
           		         </div>
    </center>
</div>
</div>
    
    
    
</body>
</html>

