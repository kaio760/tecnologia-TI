function clickmenu() {
    if (itens.style.display == "block") {
        itens.style.display = "none"
    }
    else {
        itens.style.display = "block"
    }
}

function mudouTamanho() {
    if (window.innerWidth >= 768) {
        itens.style.display = 'block'
    }
    else {
        itens.style.display = 'none'
    }
}

//carrossel
const imagens = document.querySelector('.imagem-slide');
const totalImagens = imagens.children.length;
let index = 0;

document.querySelector('.proximo').addEventListener('click', () => {
    index = (index + 1) % totalImagens;
    atualizarCarrossel();
});

document.querySelector('.anterior').addEventListener('click', () => {
    index = (index - 1 + totalImagens) % totalImagens;
    atualizarCarrossel();
});

function atualizarCarrossel() {
    const largura = 800;
    imagens.style.transform = `translateX(${-index * largura}px)`;
}