// function apertou(){
    
//     console.log('APERTOU')

// }

// function segurou() {
//     console.log('SEGUROU')

// }

// function soltou() {
//     console.log('SOLTOU')

// }
document.querySelector('#inputDados').addEventListener('keydown', function(event){
    if (event.key === 'Enter'){ // Verifica se a tecla pressionada é "Enter"
        apertou() // Chama a função "verificar"
    }
})

//------------------functions-------------------------//
function apertou(){
    let ul = document.querySelector('#teste')
    let newLi = document.createElement('li') 
        newLi.innerHTML = document.querySelector('#inputDados').value
        ul.append(newLi)
        document.querySelector('#inputDados').value = '' 
}

function customReset() {
    document.querySelector('#inputDados').value = ''
}

//OUTRA RESOLUÇÃO

// ELEMENTOS

const input = document.querySelector('#inputDados')
const ul = document.querySelector('#teste')

// FUNÇÕES

function handleKeyUp(event) {
    if (event.key === 'Enter'){
        // Adicionar elemento LI(newLi) na lista(#teste)
        const newLi = document.createElement('li')
        newLi.innerHTML = input.value
        ul.appendChild(newLi)

        //Limpa o campo de texto
        input.value = ''
    }
}

// EVENTOS

input.addEventListener('keyup', handleKeyUp)
