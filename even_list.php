<?php
// Get and validate inputs
$input1 = isset($_GET['startInput']) && is_numeric($_GET['startInput']) ? (int)$_GET['startInput'] : 1;
$input2 = isset($_GET['endInput']) && is_numeric($_GET['endInput']) ? (int)$_GET['endInput'] : 10;

// Initialize result variable
$result = "<ul>";

// Check if input1 is greater than input2
if ($input1 > $input2) {
    echo 'Input 1 must be less than or equal to Input 2';
} else {
    // Loop through numbers from input1 to input2
    for ($i = $input1; $i <= $input2; $i++) {
        if ($i % 2 === 0) { // Check if the number is even
            $result .= "<li>" . $i . "</li>"; // Concatenate the even numbers to the result
        }
    }
    $result .= "</ul>"; // Close the unordered list
    echo $result;
}
?>
