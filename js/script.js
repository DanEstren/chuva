// script.js

// Função para carregar o carrossel de jogos em destaque na página inicial
function carregarCarrossel() {
    const carrossel = document.querySelector('.carrossel');
    if (!carrossel) return;

    // Selecionar um jogo de cada categoria
    const categorias = ['acao', 'rpg', 'aventura', 'estrategia'];
    const jogosDestaque = categorias.map(categoria => {
        return jogos.find(jogo => jogo.categoria === categoria);
    }).filter(jogo => jogo !== undefined); // Remove undefined caso não haja jogo em alguma categoria

    carrossel.innerHTML = ''; // Limpar o carrossel

    jogosDestaque.forEach(jogo => {
        const destaqueItem = document.createElement('div');
        destaqueItem.className = 'destaque-item';
        destaqueItem.innerHTML = `
            <img src="${jogo.imagem}" alt="${jogo.titulo}" class="destaque-imagem">
            <div class="destaque-info">
                <h3>${jogo.titulo}</h3>
                <p>${jogo.descricao}</p>
                <p class="destaque-preco">R$ ${jogo.preco.toFixed(2)}</p>
                <button onclick="adicionarAoCarrinho(${jogo.id})">Adicionar ao Carrinho</button>
            </div>
        `;
        carrossel.appendChild(destaqueItem);
    });
}

// Função para aplicar filtro de categoria a partir da URL
function aplicarFiltroCategoria() {
    const urlParams = new URLSearchParams(window.location.search);
    const categoria = urlParams.get('categoria');
    const buscaInput = document.getElementById('busca');
    const categoriaFiltro = document.getElementById('categoria-filtro');

    if (categoria && categoriaFiltro) {
        categoriaFiltro.value = categoria;
        carregarJogos(buscaInput ? buscaInput.value : '', categoria);
    }
}

// Inicialização quando a página carrega
document.addEventListener('DOMContentLoaded', () => {
    // Carregar carrossel na página inicial
    if (document.querySelector('.carrossel')) {
        carregarCarrossel();
    }

    // Aplicar filtro de categoria na página de jogos
    if (document.getElementById('jogos-container')) {
        aplicarFiltroCategoria();
    }
});