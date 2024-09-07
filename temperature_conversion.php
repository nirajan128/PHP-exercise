<?php
if (isset($_GET['temp'])) {
    $temp = $_GET['temp'];
    $featureEnabled = isset($_GET['featureEnabled']) && $_GET['featureEnabled'] === '1'; // if featureEnable has a value/key and if its 1

    function c_to_f($temp) {
        return ($temp * 9 / 5) + 32;
    }

    function f_to_c($temp) {
        return ($temp - 32) * 5 / 9;
    }

    if ($featureEnabled) {
        $convertedTemp = f_to_c($temp);
        echo "$temp °F is " . round($convertedTemp, 2) . "°C";
    } else {
        $convertedTemp = c_to_f($temp);
        echo "$temp °C is " . round($convertedTemp, 2) . "°F";
    }
} else {
    echo "No temperature value provided.";
}
?>
