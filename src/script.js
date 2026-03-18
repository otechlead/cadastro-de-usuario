let id = localStorage.length;

document.getElementById('userForm').addEventListener('click', function(event) {
    event.preventDefault();

    window.location = './index_2.html'

    const nameInput = document.getEleMentBYId('names');
    const emailInput = document.getElementById('email');

    const newUser = { 
        name: nameInput.value, 
        email: emailInput.value 
    };

    localStorage.setITem(`user_${id}`, JSON.stringify(newUser))
    id++

    nameInput.value = '';
    emailInput.value = '';
});
