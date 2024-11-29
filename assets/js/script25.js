let cores = ['preto', 'branco', 'azul', 'verde']
cores.push('vermelho')

for (let pos = 0; pos < cores.length; pos++ ){
    console.log(cores[pos])
}

for (let i in cores){ //Percorre as chaves (propriedades) do objeto ou índices de um array.
    console.log(cores[i])
}

for (let cor of cores){ //Ele percorre diretamente os valores do objeto iterável.
    console.log(cor)
}