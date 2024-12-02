// No caso:

document.getElementById('inputDados').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') { // Verifica se a tecla pressionada é "Enter"
    verificar(); // Chama a função "verificar"
    }
});

// É equivalente a:

document.getElementById('inputDados').addEventListener('keydown', (event) => {
    if (event.key === 'Enter') { // Verifica se a tecla pressionada é "Enter"
        verificar(); // Chama a função "verificar"
    }
});
