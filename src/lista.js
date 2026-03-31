function displayUsers() {
    const userList = document.getElementById('userList');
    if (!userList) return;
    userList.innerHTML = '';

    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (!key || !key.startsWith('user_')) continue; // corrigido: filtrar somente chaves de usuário

        const userData = localStorage.getItem(key);
        if (!userData) continue;

        const user = JSON.parse(userData);
        if (!user || !user.name || !user.email) continue;

        const li = document.createElement('li');
        li.textContent = `Nome: ${user.name} | E-mail: ${user.email}`;
        userList.appendChild(li);
    }

    if (userList.children.length === 0) {
        const emptyMessage = document.createElement('li');
        emptyMessage.textContent = 'Nenhum usuário cadastrado.';
        userList.appendChild(emptyMessage);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    displayUsers(); // corrigido: não é necessário preventDefault no DOMContentLoaded
});

document.getElementById('clear').addEventListener('click', () => {
    localStorage.clear();
    displayUsers(); // corrigido: atualizar a lista após limpar o armazenamento
});