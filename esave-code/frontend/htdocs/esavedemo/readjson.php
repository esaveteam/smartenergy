
<?php

 mysql_connect("localhost", "root", "") or
         die("Could not connect: " . mysql_error());
        mysql_select_db("esave");
		




$q1 = mysql_query("select * from tendril");
//$q1 = mysql_query("select a.question_id, a.question, a.option1, a.option2, a.option3, a.option4, a.solution, b.answer, a.question_type from exam_question a LEFT JOIN exam_student b on a.exam_id = b.exam_id and a.question_id=b.question_id where a.exam_id = 2");
$rows = mysql_num_rows($q1);
if($rows)
{
while($r = mysql_fetch_array($q1))
{

	$read[] =  array('id'=>$r[0],'toDate'=>$r[1],'fromDate'=>$r[2],'cost'=>$r[3],'consumption'=>$r[4]);
}
}
else
{
	$read[]=array('id'=>0);
}
mysql_close();
header('Content-type: application/json');
echo json_encode($read);


?>

