<?php 
  $input1 = $_GET['evenOddValue'];

  if($input1 % 2 === 0){
    echo 'The number is even';
  }else{
    echo "the number is odd";
  }
?>