
<?php

require_once('connection.php');


$exam_id = $_GET['exam_id'];


$q1 = mysql_query("select count(exam_id) from exam_question where exam_id=".$exam_id);
//$q1 = mysql_query("select a.question_id, a.question, a.option1, a.option2, a.option3, a.option4, a.solution, b.answer, a.question_type from exam_question a LEFT JOIN exam_student b on a.exam_id = b.exam_id and a.question_id=b.question_id where a.exam_id = 2");
$rows = mysql_num_rows($q1);
if($rows)
{
while($r = mysql_fetch_array($q1))
{

	$exam[] =  array('count'=>$r[0]);
}
}
else
{
	$exam[]=array('question_id'=>0);
}

header('Content-type: application/json');
echo json_encode($exam);


?>

