function getNextUserId() {
    let maxId = -1;
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (!key || !key.startsWith('user_')) continue; // corrigido: filtrar somente chaves de usuário

        const idNumber = parseInt(key.split('_')[1], 10);
        if (!Number.isNaN(idNumber) && idNumber > maxId) {
            maxId = idNumber;
        }
    }
    return maxId + 1;
}

let id = getNextUserId(); // corrigido: calcular ID com base nas chaves existentes do localStorage
const form = document.getElementById('userForm');

if (form) {
    form.addEventListener('submit', function(event) { // corrigido: usar submit para o envio do formulário
        event.preventDefault();

        const nameInput = document.getElementById('name'); // corrigido: id correto e método case-sensitive
        const emailInput = document.getElementById('email');

        const newUser = {
            name: nameInput.value,
            email: emailInput.value
        };

        localStorage.setItem(`user_${id}`, JSON.stringify(newUser)); // corrigido: setItem correto
        id++;

        nameInput.value = '';
        emailInput.value = '';
    });
} else {
    console.error('Form element not found: #userForm');
} 
