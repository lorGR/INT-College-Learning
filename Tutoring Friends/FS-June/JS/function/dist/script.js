// write a function that accepts 3 args
// 1. Array
// 2. Index
// 3. Number (value)
var personsArray = [
    { name: "Lior", age: 23 },
    { name: "Orel", age: 28 },
    { name: "Hadar", age: 22 }
];
var myPerson = {
    name: "Lior",
    age: 23
};
function deletePerson(personsArray, person) {
    try {
        // loop over the array
        // if the person that we got is exist in the array
        // return array without the person
        // else 
        // throw error this person is not exist
        if (personsArray.length === 0) {
            throw new Error("Array of persons must be greater than 0");
        }
        for (var i = 0; i < personsArray.length; i++) {
            if (personsArray[i].name === person.name && personsArray[i].age === person.age) {
                personsArray.splice(i, 1);
                return personsArray;
            }
        }
        throw new Error("This person was not found in our array");
    }
    catch (error) {
        return (error.message);
    }
}
// deletePerson(personsArray, {name: "Hadar", age: 22});
