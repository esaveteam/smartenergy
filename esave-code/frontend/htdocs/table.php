
<?php

 mysql_connect("localhost", "root", "") or
         die("Could not connect: " . mysql_error());
        mysql_select_db("esave");
		




$q1 = mysql_query("select * from tendril");
//$q1 = mysql_query("select a.question_id, a.question, a.option1, a.option2, a.option3, a.option4, a.solution, b.answer, a.question_type from exam_question a LEFT JOIN exam_student b on a.exam_id = b.exam_id and a.question_id=b.question_id where a.exam_id = 2");
$rows = mysql_num_rows($q1);

?>
<html>
<style>
*{margin:0;padding:0;list-style:none;}
ul{overflow:auto;clear:both;}
ul li{float:left;}
li{padding-right:1em;}
#footer{clear:all;}
#itsthetable{
  font-family:arial,sans-serif;
  overflow:auto;
  background:#fff;
}
#nav{position:absolute;top:1.6em;left:15em;}
h1{
  font-size:180%;
  color:#060;
}
h2{
  font-size:120%;
  font-family:calibri,helvetica,arial,sans-serif;
}
#header a,#meta a,#intro a{
  color:#030;
  text-decoration:underline;
}
#textcontent{
  font-family:helvetica,arial,sans-serif;
  padding:1em;
}
#ads{
  background:#fff;
}
#textcontent h2,#textcontent h3{
  font-family:calibri,helvetica,arial,sans-serif;
  font-size:120%;
  margin:1em 0;
}
#textcontent h3{
  margin:0;
}
#textcontent a{
  color:#030;
}

#textcontent p{
  padding-bottom:.5em;
}
#ads{
 text-align:center;
}
ul#tla{
  font-size:.8em;
  width:740px;
  padding:1em;
  font-family:arial,sans-serif;
  display:block;
  margin:0 auto;
}
#textcontent ul{
  padding-bottom:.5em;
}
#textcontent li{
  float:none;
  padding:5px 0;
}
#ads{font-family:arial,sans-serif;margin:1em;color:#999;font-size:80%;
  margin:2em 0;}
  #dough{padding:1em 0;margin-top:8em;}
#ads li{padding-right:1em;}
#ads a{color:#999;}
#intro{
  background:#ccc;
  -moz-border-radius:5px;
  -webkit-border-radius:5px;
  border-radius:5px;
  -moz-box-shadow:4px 4px 4px rgba(0,0,0,.3);
  -webkit-box-shadow:4px 4px 4px rgba(0,0,0,.3);
  box-shadow:4px 4px 4px rgba(0,0,0,.3);
  position:absolute;
  width:500px;
  right:20px;top:5px;
}
#tla{overflow:auto;width:80%;padding:0;margin:0;}
#header,#footer,#intro{
  padding:1em;
  font-family:calibri,arial,sans-serif;
}
#header{
  top:0;
  margin-left:-2em;
  background:#fff;
  position:fixed;
  width:72%;
  z-index:200;
  -moz-box-shadow:0px 0px 2em rgba(0,0,0,.4);
  -webkit-box-shadow:0px 0px 2em rgba(0,0,0,.4);
  box-shadow:0px 0px 2em rgba(0,0,0,.4);
  height:7em;
}
#footer{
  border-top:2px solid #333;
  text-align:right;
}
html,body{
  color:#000;
  background:#fff;
}
#boundary{font-size:.9em;
  margin:0 auto;width:70%;
  min-width:700px;
  position:relative;
}
#content,#textcontent{background:#fff;}
</style>
<body>
<table>
<thead>
<th>
ToDate</th>
<th>From Date</th>
<th>Cost</th>
<th>Consumption</th>
</thead>
<?php
while($r = mysql_fetch_array($q1))
{
   echo "<tr>";
   echo "<td>"+$r[1];+"</td>";
   echo "<td>"+$r[2];+"</td>";
   echo "<td>"+$r[3];+"</td>";
   echo "<td>"+$r[4];+"</td>";
	
}




?>

