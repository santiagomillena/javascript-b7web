function maiorDeIdade(idade) {
    if (idade > 18) {
        return true
    } else {
        return false
    }
}
 //let idade = 15
 //console.log (maiorDeIdade(idade))

 let verificacao = maiorDeIdade (15)
 console.log (verificacao)

 if (verificacao){
    console.log ('É maior de idade')
 } else {
    console.log ('É menor de idade')
 }