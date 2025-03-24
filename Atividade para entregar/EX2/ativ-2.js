function updateClock() {
    let now = new Date();
    let hours = now.getHours().toString().padStart(2, '0');
    let minutes = now.getMinutes()
    let seconds = now.getSeconds()
    let imagem = window.document.getElementById('imagem');
    let fundo = window.document.getElementById("fundo");

    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById('clock').textContent = timeString;

    if (hours >= 0 && hours < 5) {
        mensagem.innerText = "Boa Madrugada! 🌙";
        imagem.src = "imagem/Madrugada.jpg"
    } else if (hours >= 5 && hours < 12) {
        mensagem.innerText = "Bom dia! 🌞";
        imagem.src = "imagem/Manha.jpg"
    } else if (hours >= 12 && hours < 18) {
        mensagem.innerText = "Boa Tarde! ☀";
        imagem.src = "imagem/Tarde.jpg";
    } else {
        mensagem.innerText = "Boa Noite! 🌑";
        imagem.src = "imagem/Noite.jpg";
    }

}

// Atualiza o relógio a cada segundo
setInterval(updateClock, 1000);
// Chama imediatamente para evitar delay inicial
updateClock();