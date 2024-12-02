// // ELEMENTOS
 let botao = document.querySelector('button#botao')


// // FUNÇÕES

 function clickAlert(){
     alert('Clicou no botão')
 }

 // EVENTOS

 botao.addEventListener('click', clickAlert)

// RESOLUÇÃO COM 'ONCLICK' NO HTML: <button id="botao" onclick= clickAlert()"
// let botao = document.querySelector('#botao')

// function clickAlert(){
//     alert ("Clicou no botão")
// }

document.querySelector('#botao').addEventListener('click', () => {
    alert('Clicou no botãozinho')
})

// () => { alert('Clicou no botãozinho'); }

// É equivalente a:

// function() {
//    alert('Clicou no botãozinho');
// }