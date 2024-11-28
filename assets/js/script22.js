// let personagem = {
//     nome: 'Lara',
//     sobrenome: 'Croft',
//     idade: 26,
//     pais:'Inglaterra',
//     olhos: ['castanho','cinza'], //array dentro de objetos
//     skills: { //objeto dentro de um objeto
//         forca: 20,
//         inteligencia:55,
//         velocidade: 35
//     }
// }

// personagem.nome = 'Gaara'
// personagem.skills.forca += 5

// personagem.olhos.push('azul')

// console.log (`Nome: ${personagem.nome} Força: ${personagem.skills.forca}`)


let personagem = {
    nome: 'Lara',
    sobrenome: 'Croft',
    idade: 26,
    carros: [
        {modelo: 'Fiat', cor: 'preto'},
        {modelo: 'Ferrari', cor: 'vermelho'}
    ]
}
console.log (personagem.carros[1].modelo)