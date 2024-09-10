<?php

$result = "<div class='d-flex flex-row justify-space-between'>";
for($i = 0 ; $i <=5 ; $i++){
     $result .=  "<p class='bg-secondry text-dark text-center p-2 border border-black'>" . rand(1,6) .  "</p> <br>";
}
$result .= "</div>";
echo $result;
?>