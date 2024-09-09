<?php
$input1 = $_GET['dowValue'];

if($input1 >=1 && $input1<=7){
    switch ($input1){
        case 1:
            echo "The Day: Monday";
            break;
        case 2:
            echo "The Day is: Tuesday";
            break;
        case 3:
            echo "The Day is: Wednesday";
            break;
        case 4:
            echo "The Day is: Thursday";
            break;
        case 5:
            echo "The Day is: Firday";
            break;
        case 6:
            echo "The Day is: Saturday";
            break;
        case 7:
            echo "The Day is: Sunday";
            break;
        default:
            echo  "Enter a number between 1 and 7";
    }
}else{
    echo  "Invalid number";
}

?>