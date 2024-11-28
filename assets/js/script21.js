let personagem = {
    nome: 'Lara',
    sobrenome: 'Croft',
    idade: 26,
    pais:'Inglaterra',
    olhos: ['castanho','cinza'], //array dentro de objetos
    skills: { //objeto dentro de um objeto
        forca: 20,
        inteligencia:55,
        velocidade: 35
    }
}
console.log (personagem)
console.log(personagem.sobrenome)
console.log (`${personagem.nome} ${personagem.sobrenome} tem ${personagem.idade} anos de idade e mora na ${personagem.pais}`)
console.log(`Atualmente ${personagem.nome} tem ${personagem.skills.inteligencia} pts de inteligência`)
console.log (personagem.olhos[0])