let colors = ['blue', 'green', 'red'];
//colors [0] = 'green'
colors.push ('yellow'); //adds new items to the end of an array.
colors.push ('grey');
colors.sort(); //sorts the elements as strings in alphabetical and ascending order.
console.log (colors); // =>[ 'blue', 'green', 'grey', 'red', 'yellow' ]
console.log (colors.length); // => 5

let lista = ['blabla',['xx','yy']];

let segundaLista = lista[1][0]; // acessa o item na posição 1 no array lista:['xx','yy'] e depois acessa o item 0: ['xx']
console.log (segundaLista) // => xx

let lista2 = lista[1]; // mesmo código de cima, foi pego o que estava na posição indice 1: ['xx','yy'], lista 2 passa a ser : ['xx','yy']
console.log (lista2[0]); // => xx, o que está na posição 0 de: ['xx','yy'] é ['xx']

let list = ['algo', 30, 'blablabla', true];
console.log (list[0]); // => algo

let nomes = ['bonieky', 'pedro', 'silvia'];
console.log (nomes); // => ['bonieky', 'pedro', 'silvia' ]

let list2 = ['blablabla', nomes];
console.log (list2); // => [ 'blablabla', [ 'bonieky', 'pedro', 'silvia' ] ]