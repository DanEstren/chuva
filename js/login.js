document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');
    
    // Validação simples
    if (username === 'admin' && password === '123') {
        // Login bem-sucedido - redirecionar para a página de jogos
        window.location.href = 'jogos.html';
    } else {
        errorMessage.textContent = 'Usuário ou senha incorretos!';
    }
});