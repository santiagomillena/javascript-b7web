//ARRAYS

let ingredientes = [
    'leite',
    'trigo',
    'ovo',
    'fermento',
    'acucar',
    'limão'
];
/*
ingredientes.pop() //remove o ultimo item do array
ingredientes.shift() //remover o primeiro item do array
ingredientes[5] = 'corante';
ingredientes[ingredientes.length -1] = 'corante';
*/
ingredientes [5] = 'corante'; // é preferível q não use esse método
ingredientes.push ('manteiga') // e sim esse, para adicionar itens num array
console.log (ingredientes);
console.log (`Total de ingredientes: ${ingredientes.length}`);
//FUNÇÕES DE ARRAYS

let fruits = ['maçã', 'uva', 'morango','banana'];

console.log(`Lista de frutas: ${fruits}`);
console.log(fruits.length);
//fruits[3] = 'pêra';
fruits[fruits.length - 1] = 'pêra';// na ultima posição add 'pêra'

// OU

fruits.pop(); //remove o ultimo item do array
fruits.push('pêra'); //adiciona 'pêra'
console.log(`Nova lista de frutas : ${fruits}`);
console.log(fruits.length);


// Resumo: no primeiro caso alterei o item, no segundo caso removi o item e adicionei outro


/*
Pop( ), Push( ), Shift( ) e Unshift( )
Métodos de inserção e remoção de items no array do Javascript
Pop() -> remove o último elemento de um array e retorna este elemento
Push() -> adiciona um ou mais elementos ao final de um array e retorna o tamanho deste array
Shift() -> remove o primeiro elemento de um array e retorna esse elemento
Unshift() -> adiciona um ou mais elementos no início de um array e retorna o tamanho deste array
*/