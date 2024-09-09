<?php
$input1 = $_GET['factorialValue'];

if(is_numeric($input1) && $input1 > 0){ //is_numeric returns boolean value based on the type
    $factorialResult=1;
    
    for($i=1; $i<=$input1; $i++){
       $factorialResult*=$i;
    }

    echo $input1 . " Factorial is "  . $factorialResult;
}else{
    echo "Invalid Value";
}

?>