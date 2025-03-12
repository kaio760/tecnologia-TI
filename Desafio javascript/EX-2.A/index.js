function clicar()
{
    let texto = window.document.getElementById('string');
    let valor = texto.value;
 
    let resposta =window.document.getElementById('resposta');
 
    console.log(valor);
 
    if(valor == 'Brasil')
    {
        resposta.innerText='Você é brasilerio!';
    }
    else if(valor == 'brasil')
    {
        resposta.innerText='Você é brasilerio!. Porem Brasil é com B maiusculo :)';
    }else {
        resposta.innerText='Você é estrangeiro';
    }
}