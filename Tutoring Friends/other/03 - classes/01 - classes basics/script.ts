interface Animal {
    names : string,
    age: number
}

interface Dog {
    names : string,
    age: number,
    weight: number
}

interface Cat {
    names : string,
    age: number,
    height: number,
}

class Animal {
    constructor(names, age){
        this.names = names;
        this.age = age;
    }
    makeSound() {
        return `Some noise`;
    }

    static animalColor() {
        console.log("This is animal private method");
    }

    static #aniamlOnly() {
        console.log("Animal Only");
    };
}



class Dog extends Animal {
    constructor(names, age, weight){
        super(names, age);
        this.weight = weight;
    }
    makeSound() {
        return `Bark!!!`
    }
}

class Cat extends Animal {
    constructor(names, age, height) {
        super(names, age);
        this.height = height;
    }

    makeSound() {
        return `Meow!!!`;
    }
}

const a1 = new Animal("Balu", 7);
const b1 = new Dog("Balu", 7 ,8);
const c1 = new Cat("Julia", 18, 5);

console.log(a1.makeSound());
console.log(b1.makeSound());
console.log(c1.makeSound());

Animal.animalColor();





