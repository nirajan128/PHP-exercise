<?php

// Set the default timezone to use.
date_default_timezone_set('America/Toronto');

// Get the current hour and time.
$hour = date("H"); // Use 'H' for 24-hour format.
$time = date("h:i:s A");

// Determine if it's day or night based on the hour (6 AM to 6 PM is day).
$isDayTime = $hour >= 6 && $hour < 18;

$result = '<div>';

// Check if it's daytime or nighttime and display the corresponding image and time.
if ($isDayTime) {
    $result .= '<h1 style="color: #FFD700;">' . $time . '</h1>'; // Bright color for day
    $result .= '<img src="sun.png" alt="Daytime - Sun Image" height="100" width="100">'; // Assuming sun.png is in the same folder
} else {
    $result .= '<h1 style="color: #4A4A4A;">' . $time . '</h1>'; // Dark color for night
    $result .= '<img src="moon.png" alt="Nighttime - Moon Image" height="30" width="30">'; // Assuming moon.png is in the same folder
}

$result .= '</div>';

echo $result;

?>
