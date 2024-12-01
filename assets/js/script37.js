class Person {

    age = 0

    constructor(name) {
        this.name = name
    }

    sayHi(){
        console.log(`${this.name} diz Oi!`)
    }
}

class Student extends Person {
    constructor(name,id){
        super(name)
        this.id = id
    }

    sayHello(){
        super.sayHi()
    }
}

let p1 = new Student('Bonieky', 1)
p1.age = 20

p1.sayHi()
console.log(`${p1.name} tem ${p1.age} anos e matricula é ${p1.id}`)