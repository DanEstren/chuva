// Dados dos jogos - você pode substituir por um fetch de JSON se preferir
const jogos = [
    {
        id: 1,
        titulo: "Cyber Adventures",
        imagem: "img/jogos/games1.png",
        preco: 89.99,
        categoria: "acao",
        descricao: "Um jogo de ação futurista com gráficos impressionantes."
    },
    {
        id: 2,
        titulo: "Reino dos Androides",
        imagem: "img/jogos/games2.png",
        preco: 49.99,
        categoria: "aventura",
        descricao: "Explore mundos e aventuras com os androides."
    },
    {
        id: 3,
        titulo: "Antigo Reino",
        imagem: "img/jogos/games3.jpg",
        preco: 129.99,
        categoria: "rpg",
        descricao: "Batalhas desafiadoras o aguardam."
    },
    {
        id: 4,
        titulo: "Guerra Eterna",
        imagem: "img/jogos/games4.jpg",
        preco: 99.99,
        categoria: "estrategia",
        descricao: "Comande exércitos em batalhas táticas."
    },
    {
        id: 5,
        titulo: "Bruxos Mortais",
        imagem: "img/jogos/games5.png",
        preco: 29.99,
        categoria: "rpg",
        descricao: "Aventure em batalhas com o Bruxo poderoso."
    },
    {
        id: 6,
        titulo: "Batalha Mortal",
        imagem: "img/jogos/games6.jpg",
        preco: 99.99,
        categoria: "acao",
        descricao: "Lute contra opnentes sanguinários."
    },
    {
        id: 7,
        titulo: "Derrota da Luz",
        imagem: "img/jogos/games7.jpg",
        preco: 15.99,
        categoria: "aventura",
        descricao: "Sobreviva a este tenebroso desafio, de zombies mortais."
    },
    {
        id: 8,
        titulo: "Avante ao Rei",
        imagem: "img/jogos/games8.jpg",
        preco: 35.99,
        categoria: "estrategia",
        descricao: "Controle suas tropas para que consiga cumprir o desafio."
    }
    // Adicione mais jogos conforme necessário
];

// Simulação de carrinho
let carrinho = [];

// Função para carregar jogos na página
function carregarJogos(filtro = '', categoria = 'todos') {
    const container = document.getElementById('jogos-container');
    container.innerHTML = '';

    const jogosFiltrados = jogos.filter(jogo => {
        const passaFiltro = jogo.titulo.toLowerCase().includes(filtro.toLowerCase());
        const passaCategoria = categoria === 'todos' || jogo.categoria === categoria;
        return passaFiltro && passaCategoria;
    });

    if (jogosFiltrados.length === 0) {
        container.innerHTML = '<p class="sem-resultados">Nenhum jogo encontrado.</p>';
        return;
    }

    jogosFiltrados.forEach(jogo => {
        const jogoCard = document.createElement('div');
        jogoCard.className = 'jogo-card';
        jogoCard.innerHTML = `
            <img src="${jogo.imagem}" alt="${jogo.titulo}" class="jogo-imagem">
            <div class="jogo-info">
                <h3 class="jogo-titulo">${jogo.titulo}</h3>
                <p class="jogo-preco">R$ ${jogo.preco.toFixed(2)}</p>
                <span class="jogo-categoria">${jogo.categoria.toUpperCase()}</span>
                <button onclick="adicionarAoCarrinho(${jogo.id})">Adicionar ao Carrinho</button>
            </div>
        `;
        container.appendChild(jogoCard);
    });
}

// Função para adicionar ao carrinho (simulado)
function adicionarAoCarrinho(idJogo) {
    const jogo = jogos.find(j => j.id === idJogo);
    if (jogo) {
        carrinho.push(jogo);
        alert(`${jogo.titulo} foi adicionado ao carrinho!`);
    }
}

// Carregar jogos quando a página for carregada
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('jogos-container')) {
        carregarJogos();
        
        // Configurar filtros
        document.getElementById('busca').addEventListener('input', (e) => {
            const categoria = document.getElementById('categoria-filtro').value;
            carregarJogos(e.target.value, categoria);
        });
        
        document.getElementById('categoria-filtro').addEventListener('change', (e) => {
            const busca = document.getElementById('busca').value;
            carregarJogos(busca, e.target.value);
        });
    }
});