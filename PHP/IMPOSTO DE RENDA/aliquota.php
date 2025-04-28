<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Imposto</title>
</head>
<body>
    <?php

$salario=$_GET["salario"];

    if($salario <= 2428.81){
        echo "Você está iseto do imposto";
    }

    else if($salario > 2428.82 && $salario <= 2826.65){
        $aliquota=7.5;

        $imposto =($salario - 2428.81) * ($aliquota/100);

        echo "Seu salario é R$ ".number_format($salario,2,',','.'). "<br>";
        echo "aliquiota do seu salario: {$aliquiota}%<br>";
        echo "Imposto a pagar: R$ ".number_format($imposto,2,',','.');
    }

    else if($salario > 2826.66 && $salario <=3751.05){
        $aliquiota1=7.5;
        $aliquiota2=15;

        $imposto = (100 * ($aliquota1/100) + ($salario - 2826.81) * ($aliquiota2/100));

        echo "Seu salario é R$ ".number_format($salario,2,',','.')."<br>";
        echo "aliquiota do seu salario: {$aliquiota1} %<br>";
        echo "Imposto a pagar: R$ ".number_format($imposto,2,',','.');
    }

    else if($salario > 3751.06 && $salario <= 4664.68){
        $aliquiota1=7.5;
        $aliquiota2=15;
        $aliquiota3=22.5

        $imposto = (100 * ($aliquiota1/100))+ (1000*($aliquiota2/100)) + (($salario - 3751.06) * ($aliquido3/100));

    }

    ?>
</body>
</html>