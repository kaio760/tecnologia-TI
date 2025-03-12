function verificarVelocidade() {

    let velocidadeCarro = parseFloat(prompt("Digite a velocidade do carro (km/h):"));
    let limiteVia = parseFloat(prompt("Digite o limite da via (km/h):"));

    function verificarExcesso(velocidade, limite) {
        return velocidade - limite;
    }


    let excesso = verificarExcesso(velocidadeCarro, limiteVia);
    let mensagem = (isNaN(velocidadeCarro) || isNaN(limiteVia))
        ? "Erro: Insira valores válidos!"
        : velocidadeCarro > limiteVia
            ? `Passou do limite em ${excesso.toFixed(2)} km/h!`
            : "Dentro do limite de velocidade.";

    // Exibe o resultado
    alert(`Velocidade do carro: ${velocidadeCarro} km/h\nLimite da via: ${limiteVia} km/h\nResultado: ${mensagem}`);
}