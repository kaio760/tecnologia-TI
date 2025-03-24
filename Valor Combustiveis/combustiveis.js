function startProcess() {
    // Get DOM elements
    const valor = parseFloat(document.getElementById("ValorCombustivel").value);
    const eficiencia = parseFloat(document.getElementById("Eficiencia").value) / 100;
    const resultadoDiv = document.getElementById("resultado");

    // Validation
    if (!valor || valor <= 0) {
        resultadoDiv.innerHTML = "<p style='color: red;'>Digite um valor válido!</p>";
        return;
    }

    const etanolChecked = document.getElementById("Etanol").checked;
    const gasolinaChecked = document.getElementById("Gasolina").checked;

    if (!etanolChecked && !gasolinaChecked) {
        resultadoDiv.innerHTML = "<p style='color: red;'>Escolha Etanol ou Gasolina!</p>";
        return;
    }

    // Calculation logic
    let mensagem = "";
    if (etanolChecked) {
        const limiteGasolina = valor / eficiencia;
        mensagem = `Com etanol a R$${valor.toFixed(2)}, é vantajoso usar gasolina se ela custar mais que R$${limiteGasolina.toFixed(2)}.`;
    } else if (gasolinaChecked) {
        const limiteEtanol = valor * eficiencia;
        mensagem = `Com gasolina a R$${valor.toFixed(2)}, é vantajoso usar etanol se ele custar menos que R$${limiteEtanol.toFixed(2)}.`;
    }

    // Display result
    resultadoDiv.innerHTML = `<p>${mensagem}</p>`;

    // Clear input
    document.getElementById("ValorCombustivel").value = "";
    document.getElementById("Etanol").checked = false;
    document.getElementById("Gasolina").checked = false;
}