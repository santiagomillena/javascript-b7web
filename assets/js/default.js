document.getElementById('inputDados').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') { // Verifica se a tecla pressionada é "Enter"
    verificar(); // Chama a função "verificar"
    }
    
    });
function verificar(){
    var group = document.getElementById("inputDados").value
    var dados = group.value
    var result = document.getElementById ('result')

    if (document.getElementById('inputDados').value == ("")) {
    alert('Por favor, insira algum dado')
    return
    } else {
        var img = document.createElement('img')
        img.setAttribute('id', 'photo')
        if (group == 'aespa') {
        result.innerHTML = '<p>Você é um MY!<p>'
        img.setAttribute ('src', 'imagens/aespa250px.png')
        } else if (group == 'blackpink') {
            result.innerHTML = '<p>Você é um BLINK!</p>'
            img.setAttribute ('src', 'imagens/blackpink250px.png')
        } else if (group == 'itzy'){
            result.innerHTML = '<P>Você é um MIDZY!</P>'
            img.setAttribute ('src', 'imagens/itzy250px.png')
        } else if (group == 'mamamoo'){
            result.innerHTML = '<P>Você é um MOOMOO!</P>'
            img.setAttribute ('src', 'imagens/mamamoo250px.png')
        } else {
            result.innerHTML = '<p>Desculpe, grupo não reconhecido.</p>';
            img.setAttribute ('src', 'imagens/interrogacao.png')
        }
    result.appendChild(img)
    document.getElementById('inputDados').value = ""
    }
}
    function customReset (){
        document.getElementById('inputDados').value = ""
        document.getElementById('result').innerHTML = ""
    }
