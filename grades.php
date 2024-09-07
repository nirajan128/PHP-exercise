<?php 
$input1 = $_GET['gradeInput']; // Added semicolon

// Added proper conditions and corrected syntax
if ($input1 >= 90) {
    echo "Your grade is A";
} elseif ($input1 >= 80) {
    echo "Your grade is B";
} elseif ($input1 >= 70) {
    echo "Your grade is C";
} elseif ($input1 >= 60) {
    echo "Your grade is D";
} else {
    echo "Your grade is F";
}
?>
