function SelecionarNacionalidade()
//veficiar a nacionalidade do usuario
{
    let pais = document.getElementById("nacionalidade");
    let resultado = document.getElementById("resultado");selecao = Number(pais);

    console.log(selecao)

     if (selecao == 0) {
        resultado.innerHTML = "Brasileiro";
    }

    if (selecao == 1){
        resultado.innerHTML = "estados unidos";
    }

    if (selecao ==2){
        resultado.innerHTML = "argentino";
    }
    
    else {
        resultado.innerHTML = "Estrangeiro";
    }

    /*else if (pais == "Brasil") {
        resultado.innerHTML = "Brasileiro";
        resultado.style.color = "yellow";
    }

    else if (pais == "EUA") {
        resultado.innerHTML = "Estadounidense";
        resultado.style.color = "red";
    }

    else if (pais == "Argentina") {
        resultado.innerHTML = "Argentino";
        resultado.style.color = "blue";
    }

    else if (pais == "Mexico") {
        resultado.innerHTML = "Mexicano";
        resultado.style.color = "green";
    }

    else if (pais == "Japao") {
        resultado.innerHTML = "Japones";
        resultado.style.color = "gray";
    }

    else {
        resultado.innerHTML = "Estrangeiro";
        resultado.style.color = "black";
    }*/
}