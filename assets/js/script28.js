function clicou () {
    const teste = document.querySelector('#teste')
    const ul = document.querySelector('ul')
    
    ul.children[0].append('(alterado)') //adiciona de fato um elemento e só funciona para texto
    //ul.children[0].innerHTML =+ '(alterado)' nesse caso ele altera a memoria; ele reescreve o conteudo com o que foi adicionado
}