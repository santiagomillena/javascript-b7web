class Person {

    age = 0
    steps = 0


    constructor(name) {
        this.name = name
    }

    takeAStep(){
         this.steps++
    }
    setAge(newAge){
        if (typeof newAge == 'number'){
            this.age == newAge
        }
    }
}

let p1 = new Person('João', 20)
let p2 = new Person('Maria', 30)
let p3 = new Person('Pedro', 40)

p1.newAge(20)

p1.takeAStep()
console.log(`Passos de ${p1.name}: ${p1.steps}`)

// p1.age = 20

// console.log(`P1 = ${p1.name} tem ${p1.age} anos`)
// console.log(`P2 = ${p2.name} tem ${p2.age} anos`)
// console.log(`P3 = ${p3.name} tem ${p3.age} anos`)