<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>imc</title>
</head>
<body>
<?php
 $peso = 65; // em quilogramas
 $altura = 1.65; // em metros

     if ($peso < 50) {
         echo "Você está abaixo do seu peso ideal!<br>Seu peso atual é: {$peso}kg";
     } 
     else if ($peso > 50 && $peso < 68) {
         echo "Parabéns, você está em seu peso ideal!<br>Seu peso atual é: {$peso}kg";
     } 
     else {
         echo "Sobrepeso - Você está acima do seu peso ideal.<br>Seu peso atual é {$peso}kg";
     }

// $imc = $peso / ($altura * $altura);
// echo ". Seu imc é: " . round($imc, 2);
?>
</body>
</html>