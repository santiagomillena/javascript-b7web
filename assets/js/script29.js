function clicou () {
    const teste = document.querySelector('#teste')
    const ul = document.querySelector('ul')

//    ul.innerHTML += '<li>item adicionado</li>'
    
    let newLi = document.createElement('li')
    newLi.innerHTML = 'item adicionado'

    ul.appendChild(newLi)
}
//  ul.appendChild(newLi)
// parentElement.appendChild(childElement);

// parentElement: O elemento existente no qual o novo filho será adicionado.
//  ul
// childElement: O novo elemento que será anexado como filho.
//  newLi
// appendChild adiciona um elemento DOM como último filho de outro elemento.
// É ideal para criar e manipular elementos dinamicamente na página.