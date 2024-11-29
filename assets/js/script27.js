let fruits = ['Banana','Laranja','Maça','Pera'];

let bigFruits = fruits.filter((item) => {
    return item.length > 4;
})

//let bigFruits = fruits.filter((item) => item.length > 4)
console.log (bigFruits)

let ok = fruits.every((value) =>{
    return value.length > 3
})

if (ok){
    console.log ('Todos são maior que 3')
} else {
    console.log ('Não são maior que 3')
}