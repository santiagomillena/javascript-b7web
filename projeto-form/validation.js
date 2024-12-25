// Seleciona o formulário pelo ID
const form = document.getElementById('myForm');

// Adiciona um evento de escuta para quando o formulário for enviado
form.addEventListener('submit', function (event) {
    // Previne o envio padrão do formulário
    event.preventDefault();

    // Seleciona os campos do formulário
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');

    // Captura os valores dos campos
    const nameValue = nameInput.value.trim(); // Remove espaços extras
    const emailValue = emailInput.value.trim();

    // Variável para rastrear se há erros
    let isValid = true;

    // Validação do campo "Nome"
    if (nameValue === '') {
        showError(nameInput, 'O campo Nome é obrigatório.'); // Exibe o erro
        isValid = false; // Marca como inválido
    } else {
        showSuccess(nameInput); // Marca o campo como válido
    }

    // Validação do campo "Email"
    if (!isValidEmail(emailValue)) {
        showError(emailInput, 'Por favor, insira um email válido.');
        isValid = false;
    } else {
        showSuccess(emailInput);
    }

    // Se todos os campos estiverem válidos, envia o formulário
    if (isValid) {
        alert('Formulário enviado com sucesso!');
        form.submit(); // Submete o formulário
    }
});

// Função para exibir uma mensagem de erro
function showError(input, message) {
    const formControl = input.parentElement; // Seleciona o elemento pai do input
    formControl.className = 'form-control error'; // Adiciona a classe de erro
    const small = formControl.querySelector('small'); // Seleciona o elemento <small>
    small.innerText = message; // Define a mensagem de erro
}

// Função para exibir o sucesso na validação
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success'; // Adiciona a classe de sucesso
}

// Função para verificar se o email é válido usando uma expressão regular
function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expressão regular para validar email
    return re.test(email); // Retorna true se o email for válido
}
