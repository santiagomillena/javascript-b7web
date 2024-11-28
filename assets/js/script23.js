let pessoa = {
    nome: 'Lara',
    sobrenome: 'Croft',
    idade: 26,
    nomeCompleto: function (){
        return `${this.nome} ${this.sobrenome}`
    }
}

console.log (pessoa.nomeCompleto())