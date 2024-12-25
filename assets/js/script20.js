// 1. No array abaixo, qual o número que pega a Ferrari?
let carros = ['BMW', 'Ferrari', 'Mercedez'];
let x = 1
console.log(`1. ` + carros [x]);


// 2. Troque a Ferrari por Audi

console.log (`2. Lista com Audi: `)
carros[1] = 'Audi'
console.log (carros);


// 3. Adicione o Volvo a lista

console.log (`3. Lista com Volvo:`)
carros.push('Volvo')
console.log (carros);

// 4.Exiba quantos itens tem no array

console.log (`4. items no array: ${carros.length}`)

// Faça um loop que mostra todas as frutas
let fruits = ['Maçã', 'Uva', 'Banana'];
for (let i = 0; i < fruits.length ; i++){
    console.log(fruits[i]);
}


// Conte de 1 á 100 através de um while

let count = 1;

while (count <= 100) { //precisamos colocar o = para que ele inclua o N° 100
    console.log(count)
    count++ 
}

let cars = [
    {brand: 'Fiat', year: 2022},
    {brand: 'BMW', year: 2018},
    {brand: 'Ferrari', year: 2020}
]

cars.sort((a,b) => {
    //return a.year - b.year;
    if (a.year > b.year){
        return 1;
    } else if (a.year < b.year){
        return -1;
    } else {
        return 0
    }
})
console.log(cars);