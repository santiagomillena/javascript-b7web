function clicou () {
    const teste = document.querySelector('#teste')
    const ul = document.querySelector('ul')

//    ul.innerHTML += '<li>item adicionado</li>'
    
    let newLi = document.createElement('li')
    newLi.innerHTML = 'item adicionado'

    ul.appendChild(newLi)
}
// Em um documento HTML, o método document.createElement() cria o elemento HTML especificado por tagName,tagName: É o nome da tag HTML do elemento que você quer criar. Por exemplo: "div", "p", "img", etc.
//Ex: 

//   var img = document.createElement('img')
//   img.setAttribute('id', 'photo')
//   if (group == 'aespa') {
//   result.innerHTML = '<p>Você é um MY!<p>'
//   img.setAttribute ('src', 'imagens/aespa250px.png')
//   }
//   result.appendChild(img)


//  ul.appendChild(newLi)
// parentElement.appendChild(childElement);

// parentElement: O elemento existente no qual o novo filho será adicionado.
//  ul
// childElement: O novo elemento que será anexado como filho.
//  newLi
// appendChild adiciona um elemento DOM como último filho de outro elemento.
// É ideal para criar e manipular elementos dinamicamente na página.

//adicicionando um elemento no final do conteudo que já tem