var animalTypes = ["dog", "cat", "mouse", "ant", "fish"];
var animalName = "";
var animalType;
var animalAge;
var myAnimals = [];
function createAnimals(num) {
    for (var i = 0; i < num; i++) {
        var animal_1 = {
            id: i,
            name: getRandomName(),
            type: getRandomType(animalTypes),
            age: getRandomAge(animalType)
        };
        animalName = "";
        myAnimals[i] = animal_1;
    }
    console.log(myAnimals);
}
function getRandomType(animalTypes) {
    animalType = animalTypes[Math.floor((Math.random() * animalTypes.length))];
    return animalType;
}
function getRandomName() {
    var randNumber = Math.round(Math.random() * (5 - 3) + 3);
    for (var i = 0; i < randNumber; i++) {
        animalName += String.fromCharCode(Math.round(Math.random() * ("z".charCodeAt(0) - "a".charCodeAt(0)) + "a".charCodeAt(0)));
    }
    return animalName;
}
function getRandomAge(animalType) {
    if (animalType === "dog") {
        animalAge = Math.round(Math.random() * (16 - 8) + 8);
    }
    else if (animalType === "fish") {
        animalAge = Math.round(Math.random() * (5 - 2) + 2);
    }
    else if (animalType === "cat") {
        animalAge = Math.round(Math.random() * (18 - 12) + 12);
    }
    else if (animalType === "ant") {
        animalAge = Math.round(Math.random() * (2 - 1) + 1);
    }
    else if (animalType === "mouse") {
        animalAge = Math.round(Math.random() * (3 - 1) + 1);
    }
    return animalAge;
}
createAnimals(3);
function getTypeOfAnimal(myAnimals, type) {
    var arrOfType = [];
    var counter = 0;
    for (var i = 0; i < myAnimals.length; i++) {
        var animal_2 = myAnimals[i];
        if (animal_2.type === type) {
            arrOfType[counter] = animal_2;
            counter++;
        }
    }
    return arrOfType;
}
getTypeOfAnimal(myAnimals, "dog");
var animal = {
    id: '124'
};
function addAnimal(myAnimals) {
}
