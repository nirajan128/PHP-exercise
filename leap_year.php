<?php
 $input1 = $_GET['yearValue'];

 if(($input1 % 4 == 0 && $input1 % 100 != 0) || $input1 % 400 == 0){
    echo $input1 . " is a leap year";
 } else {
    echo $input1 . " is not a leap year";
 }
?>
