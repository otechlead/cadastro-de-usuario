function displayUsers() {
    const userList = document.getElementById('userList');
    userList.innerHTML = '';

    for(let i = 0; i <= localStorage.length; i++) {
        const user = JSON.parse(localStorage.getItem(`user_${i}`));
        const li = document.createElement('li');
        li.textContent = `Nome: ${user.name} | E-mail: ${user.email}`;
        userList.appendChild(li);
    }
}

document.addEventListener('DOMContentLoaded', (e) => {
    e.preventDefault();
    displayUsers();
})

document.getElementById('clear') .addEventListener('click', () => {
    localStorage.clear()
})