<?php

function generatePassword(){
    $password ="<p>";
    for($i=0; $i<=16; $i++){
        $randomPosition = rand(1,3);
        switch ($randomPosition){
            case 1:
                $password .= chr(rand(97,122)); //generate random Lowercase ASCII(97,122) Letter
                break;
            case 2:
                $password .= chr(rand(65,90)); //geerates random UpperCase ASCII(60,90) letter
            case 3:
                $password .= chr(rand(48,57));
        }
    }
     $password.="</p>";
    return $password;
}


$passwordList="<div>";


for($i=0; $i<=5; $i++){
    $passwordList .= generatePassword(); // Generate and append the password
}

$passwordList.="</div>";

echo $passwordList;

?>