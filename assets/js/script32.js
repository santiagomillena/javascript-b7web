function clicou () {
    let input = document.querySelector('input')
    let botao = document.querySelector('#botao')


    if ( input.getAttribute('type')==='text'){
        input.setAttribute('type', 'password')
        botao.innerHTML = 'Mostrar Senha'
    } else {
        input.setAttribute('type', 'text')
        botao.innerHTML = 'Ocultar Senha'
    }
}


// setAttribute	- Este método é usado para definir ou atualizar o valor de um atributo de um elemento HTML. Define ou atualiza o valor de um atributo.	Não retorna nada (modifica o DOM).

//        input.setAttribute('placeholder','Alterado')


/* 
 const div = document.createElement("div");
div.setAttribute("id", "minhaDiv"); // Adiciona o atributo id com valor "minhaDiv"
div.setAttribute("class", "classeExemplo"); // Adiciona o atributo class
console.log(div.outerHTML); // <div id="minhaDiv" class="classeExemplo"></div>
*/


// getAttribute	- Este método é usado para obter o valor de um atributo de um elemento HTML. Obtém o valor de um atributo.	Retorna o valor ou null se não existir.

// Ex:     console.log (input.getAttribute(type))
//         retorna text

// hasAttribute	Verifica se o atributo existe em um elemento.	Retorna true ou false.

//         if (input.hasAttribute('placeholder')){
//             console.log('Tem placeholder SIM')
//         } else {
//             console.log('Não tem placeholer...')
//         }