document.addEventListener('DOMContentLoaded', function() {
    // Função para obter usuários do localStorage
    function getUsers() {
        const users = localStorage.getItem('users');
        return users ? JSON.parse(users) : [];
    }
    
    // Função para salvar usuários no localStorage
    function saveUsers(users) {
        localStorage.setItem('users', JSON.stringify(users));
    }
    
    // Inicializar ou atualizar usuário admin
    let users = getUsers();
    const adminIndex = users.findIndex(u => u.username.toLowerCase() === 'admin');
    if (adminIndex !== -1) {
        console.log('Atualizando usuário admin para senha 123');
        users[adminIndex] = { username: 'admin', password: '123' };
    } else {
        console.log('Inicializando usuário admin');
        users.push({ username: 'admin', password: '123' });
    }
    saveUsers(users);
    
    // Logar usuários armazenados para depuração
    console.log('Usuários armazenados:', getUsers());
    
    // Manipulação do formulário de login
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            const errorMessage = document.getElementById('error-message');
            
            console.log('Tentativa de login - Username:', username, 'Password:', password);
            
            const users = getUsers();
            const user = users.find(u => u.username.toLowerCase() === username.toLowerCase() && u.password === password);
            
            if (user) {
                console.log('Login bem-sucedido para:', username);
                window.location.href = 'jogos.html';
            } else {
                console.log('Falha no login: usuário ou senha incorretos');
                errorMessage.textContent = 'Usuário ou senha incorretos!';
            }
        });
    }
    
    // Manipulação do formulário de cadastro
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            const errorMessage = document.getElementById('error-message');
            
            const users = getUsers();
            const userExists = users.some(u => u.username.toLowerCase() === username.toLowerCase());
            
            if (userExists) {
                console.log('Falha no cadastro: usuário já existe', username);
                errorMessage.textContent = 'Usuário já existe! Escolha outro nome de usuário.';
            } else {
                users.push({ username, password });
                saveUsers(users);
                console.log('Cadastro realizado:', username);
                errorMessage.textContent = 'Cadastro realizado com sucesso! Redirecionando para o login...';
                setTimeout(() => {
                    window.location.href = 'login.html';
                }, 2000);
            }
        });
    }
});