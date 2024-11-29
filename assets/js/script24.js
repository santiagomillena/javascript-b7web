// for (let n = 0; n < 10; n++) {
//     console.log (`Número ${n}`)
// }

for (let n= 1; n <=10; n++) {
    console.log(`Tabuada do numero ${n}`)
    for (let y = 1; y <= 10; y++){
        console.log(`${n} * ${y} = ${n * y}`);
    }
}

for (let n = 1; n<=10; n++){
    console.log(`Tabuada do ${n}`);

    for (let y = 0; y <= 10; y++) {
        let resultado = n*y;
        console.log(`${n} X ${y} = ${resultado}`)
    }
}

// for (let x = 1; x < 5; x++) {
//     console.log(`Tabuada do número ${x}`)
//     for (let y = 1; y < 5; y++){
//         console.log(`${x} X ${y} = ${x*y}`)
//     }
// }