Catálogo de Jogos "Chuuva"
Bem-vindo ao projeto Chuuva, um catálogo de jogos online desenvolvido com HTML, CSS e JavaScript. Este projeto apresenta uma interface simples e responsiva para explorar jogos por categorias, com uma página inicial que exibe jogos em destaque, uma página de catálogo com filtros e uma página de login com validação básica.

Páginas

index.html: Página inicial com um carrossel exibindo um jogo de cada categoria (ação, RPG, aventura, estratégia) e um botão "Explorar o Catálogo" que leva à página jogos.html. Inclui uma seção de categorias para fins visuais (sem interatividade).
jogos.html: Página do catálogo com uma grade de jogos, filtros por busca (nome do jogo) e categoria, e botões para adicionar jogos ao carrinho (simulação).
login.html: Página de login com validação simples (usuário: admin, senha: 123). Após login bem-sucedido, redireciona para jogos.html.

Funcionalidades

Carrossel de Destaques: Exibe quatro jogos na página inicial, um de cada categoria, sem barra de rolagem em telas de desktop.
Filtros no Catálogo: Permite filtrar jogos por nome (busca por texto) e categoria (ação, RPG, aventura, estratégia) na página jogos.html.
Carrinho Simulado: Botões "Adicionar ao Carrinho" adicionam jogos a um array carrinho no dados.js com um alerta de confirmação.
Design Responsivo: O layout se adapta a diferentes tamanhos de tela, com ajustes no carrossel e navegação para dispositivos móveis.
Logos: Duas logos (logo.png e Chuuvalogo.png) são exibidas lado a lado no cabeçalho de todas as páginas, com a Chuuvalogo.png maior horizontalmente.

Pré-requisitos
Para executar o projeto localmente, você precisará do XAMPP instalado. O XAMPP é uma ferramenta que fornece um servidor Apache para hospedar aplicações web localmente.

Sistema Operacional: Windows, macOS ou Linux.
XAMPP: Versão mais recente (disponível em https://www.apachefriends.org).
Navegador Web: Qualquer navegador moderno (Chrome, Firefox, Edge, etc.).
Imagens: Certifique-se de que as imagens (logo.png, Chuuvalogo.png e as imagens dos jogos na pasta img/jogos/) estejam disponíveis.

Como Configurar e Executar com XAMPP
Siga os passos abaixo para configurar e executar o projeto no XAMPP:

Instalar o XAMPP:

Baixe o XAMPP no site oficial: https://www.apachefriends.org.
Siga as instruções de instalação para seu sistema operacional (Windows, macOS ou Linux).
Após a instalação, o XAMPP será configurado com uma pasta padrão para hospedar arquivos web, geralmente localizada em:
Windows: C:\xampp\htdocs
macOS/Linux: /opt/lampp/htdocs (pode variar dependendo da instalação).


Copiar o Projeto para a Pasta htdocs:

Crie uma pasta chamada chuuva-catalogo dentro da pasta htdocs do XAMPP.
Copie todos os arquivos e pastas do projeto (index.html, login.html, jogos.html, css/, js/, img/) para a pasta chuuva-catalogo.
A estrutura final deve ser semelhante à descrita na seção "Estrutura do Projeto".


Iniciar o Servidor Apache:

Abra o XAMPP Control Panel.
Clique no botão Start ao lado de Apache para iniciar o servidor web.
Certifique-se de que a porta padrão (geralmente 80) esteja livre. Se houver conflitos, você pode alterar a porta no arquivo de configuração do Apache (httpd.conf) ou liberar a porta.


Acessar o Projeto no Navegador:

Abra um navegador web e digite o seguinte endereço:http://localhost/chuva/index.html


Isso abrirá a página inicial do projeto. Você pode navegar para as outras páginas (jogos.html e login.html) usando os links no menu de navegação.


Testar o Login:

Na página de login (http://localhost/chuuva-catalogo/login.html), use as credenciais:
Usuário: admin
Senha: 123


Um login bem-sucedido redirecionará para jogos.html. Credenciais incorretas exibirão uma mensagem de erro.


Licença
© 2025 Chuuva. Todos os direitos reservados.
