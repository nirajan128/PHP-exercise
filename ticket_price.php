<?php
  $input1 = $_GET['ageValue'];

  if($input1 >= 65){
    echo "Tikcet Price: $10";
  }elseif($input1 <= 64 && $input1 >= 18){
    echo "Ticket Price: $12";
  }elseif($input1 <=17 && $input1 >=6){
    echo "Ticket price: $8";
  }else{
    echo "Ticket price: Free";
  }

 ?>