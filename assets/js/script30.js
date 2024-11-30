function clicou () {
    const teste = document.querySelector('#teste')
    const ul = document.querySelector('ul')

    const newButton = document.createElement('button')
    newButton.innerHTML = 'Botão'

    ul.after(newButton) //Cria o button depois o elemento ul

}
