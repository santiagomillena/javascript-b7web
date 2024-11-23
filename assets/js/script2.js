//Template String

let nome = "Lara"
let sobrenome = "Croft"
//let nomeCompleto = nome + ' ' + sobrenome
let nomeCompleto = `${nome} ${sobrenome}`
let idade = 26
let idadeSting = `Idade: ${idade} anos`

console.log ("Nome: " + nomeCompleto)
console.log (idadeSting)