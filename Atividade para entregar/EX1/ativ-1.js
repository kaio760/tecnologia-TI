function startProcess() {
    let quantidade = Number(prompt("Quantos números você deseja inserir?"));
    
    if (!quantidade || quantidade <= 0) {
        alert("Por favor, insira um número válido.");
        return;
    }

    let numeros = [];
    
    while (numeros.length < quantidade) {
        let num = Number(prompt("Digite o número:"));
        if (!isNaN(num)) {
            numeros.push(num);
        } else {
            alert("Número inválido! Tente novamente.");
        }
    }

    numeros.push(10);
    numeros.sort((a, b) => a - b);

    document.getElementById("result").innerHTML = `
        <p><strong>Números ordenados:</strong> ${numeros.join(", ")}</p>
        <p><strong>Total de números digitados:</strong> ${quantidade}</p>
    `;
}