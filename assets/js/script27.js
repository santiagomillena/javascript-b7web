let fruits = ['Banana','Laranja','Maça','Pera'];

let bigFruits = fruits.filter((item) => {
    // filtra as que tem mais de 4 de length 
    return item.length > 4;
})

//let bigFruits = fruits.filter((item) => item.length > 4)
console.log (bigFruits)

let ok = fruits.every((value) =>{
    return value.length > 3
    // if (value.length > 3){
    //     return true
    // } else {
    //     return false
    // }
})

if (ok){
    console.log ('Todos são maior que 3')
} else {
    console.log ('Não são maior que 3')
}
//Usando a assinatura como referência:
let allHaveMoreThan3Letters = fruits.every((value, index, array) => {
    console.log(`Elemento: ${value}, Índice: ${index}, Array: ${array}`);
    return value.length > 3;
});

console.log(allHaveMoreThan3Letters);


if (fruits.includes('Uva')){ // verifica se tem o item dentro do array;
    console.log ('Tem uva sim!')
} else {
    console.log ('Não tem uva.')
}
