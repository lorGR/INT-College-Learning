const animalTypes = ["dog", "cat", "mouse", "ant", "fish"];

let animalName = "";
let animalType;
let animalAge : number ;

type Animal = {
    id: number
    name: string
    age: number 
    type: string
}

const myAnimals: Array<Animal> = [];

function createAnimals(num: number) {
    for (let i = 0; i < num; i++) {
        const animal = {
            id: i,
            name: getRandomName(),
            type: getRandomType(animalTypes),
            age: getRandomAge(animalType)
        }
        animalName = "";
        myAnimals[i] = animal;
    }
    console.log(myAnimals);
}


function getRandomType(animalTypes) {
    animalType = animalTypes[Math.floor((Math.random() * animalTypes.length))];
    return animalType;
}

function getRandomName() {
    const randNumber = Math.round(Math.random() * (5 - 3) + 3);
    for (let i = 0; i < randNumber; i++) {
        animalName += String.fromCharCode(Math.round(Math.random() * ("z".charCodeAt(0) - "a".charCodeAt(0)) + "a".charCodeAt(0)));
    }
    return animalName;
}

function getRandomAge(animalType) {
    if(animalType === "dog") {
        animalAge = Math.round(Math.random() * (16 - 8)+ 8);
    } else if (animalType === "fish") {
        animalAge = Math.round(Math.random() * (5 - 2) + 2);
    } else if (animalType === "cat") {
        animalAge = Math.round(Math.random() * (18 - 12) + 12);
    } else if (animalType === "ant") {
        animalAge = Math.round(Math.random() * (2 - 1) + 1);
    } else if (animalType === "mouse") {
        animalAge = Math.round(Math.random() * (3 - 1) + 1);
    }
    return animalAge;
}

createAnimals(3);

function getTypeOfAnimal(myAnimals, type: string) {
    const arrOfType: Array<Animal> = [];
    let counter = 0;
    for(let i = 0; i < myAnimals.length; i++) {
        const animal = myAnimals[i];
        if(animal.type === type) {
            arrOfType[counter] = animal;
            counter++;
        }
    }
    return arrOfType;
}

getTypeOfAnimal(myAnimals, "dog");

const animal = {
    id: '124',
    
}

function addAnimal(myAnimals, ) {

}