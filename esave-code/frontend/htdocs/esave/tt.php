<?php
function solution($S) {
    //checking whether the string is a palindrome or not.
    $char_array=str_split($S);
    $temp=0;
    for($i=0;$i<count($char_array);$i++)
    {
        $temp ^= 1 << ($char_array[$i] - "a");
    }
    if(($temp & ($temp - 1)) == 0)
    {
        return 1;
    }
    else
    {
        return 0;
    }
}

$S="sadasdsasa";
$b=solution($S);
echo $b;
?>