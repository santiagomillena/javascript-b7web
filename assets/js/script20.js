let carros = ['BMW', 'Ferrari', 'Mercedez'];
let x = 1
console.log(`1. ` + carros [x]);

console.log (`2. Lista com Audi: `)
carros[1] = 'Audi'
console.log (carros);

console.log (`3. Lista com Volvo:`)
carros.push('Volvo')
console.log (carros);

console.log (`4. items no array: ${carros.length}`)