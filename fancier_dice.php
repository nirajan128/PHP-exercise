<?php

$result = "<div class='d-flex flex-row justify-space-between'>";
for($i = 0 ; $i <= 5 ; $i++){
    $value = rand(1,6);
    $color = ""; // Initialize $color
    switch ($value){
        case 1:
            $color = "bg-danger";
            break;
        case 2:
            $color = "bg-primary";
            break;
        case 3:
            $color = "bg-warning";
            break;
        case 4:
            $color = "bg-secondary";
            break;
        case 5:
            $color = "bg-info";
            break;
        case 6:
            $color = "bg-info-subtle";
            break;
        default:
            break;
    }
    // Fix concatenation for $color and HTML string
    $result .= "<p class='text-dark text-center p-2 border border-black " . $color . "'>" . $value . "</p> <br>";
}
$result .= "</div>";
echo $result;

?>
