<?php
// Ensure both inputs are set and numeric, if not set the default 1 for input 1 and 10 for input 2
$input1 = isset($_GET['multInput1']) && is_numeric($_GET['multInput1']) ? (int)$_GET['multInput1'] : 1;
$input2 = isset($_GET['multInput2']) && is_numeric($_GET['multInput2']) ? (int)$_GET['multInput2'] : 10;

// Ensure input1 is less than or equal to input2
if ($input1 > $input2) {
    echo "Error: The starting number must be less than or equal to the ending number.";
} else {
    // Loop through numbers from input1 to input2
    for ($i = $input1; $i <= $input2; $i++) {
        echo "<strong>Multiplication table for $i:</strong><br>";
        for ($j = 1; $j <= 10; $j++) {
            echo "$i * $j = " . ($i * $j) . "<br>";
        }
        echo "<br>"; // Space between tables for readability
    }
}
?>
