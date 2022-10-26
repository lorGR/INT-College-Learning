// write a function that accepts 3 args
// 1. Array
// 2. Index
// 3. Number (value)

// function updateByIndex(arr: number[], index: number, value: number) {
//     try {
//         if (index < 0) {
//             throw new Error("Index must be gratear than 0");
//         } else if (arr.length === 0) {
//             throw new Error("Array cann't be empty");
//         } else {
//             for (let i = 0; i < arr.length; i++) {
//                 if (i === index) {
//                     arr[i] = value;
//                     return arr;
//                 }
//             }
//         }
//     } catch (error) {
//         console.error(error.message);
//     }
// }

type Person  = {
    name: string,
    age: number
}

let personsArray: Person[] = [
    { name: "Lior", age: 23},
    { name: "Orel", age: 28},
    { name: "Hadar", age: 22}
];

let myPerson : Person = {
    name: "Lior",
    age: 23
}

function deletePerson(personsArray: Person[], person: Person) {
    try {
        // loop over the array
            // if the person that we got is exist in the array
                // return array without the person
            // else 
                // throw error this person is not exist
        if( personsArray.length === 0) {
            throw new Error("Array of persons must be greater than 0");
        }
        for (let i = 0; i < personsArray.length; i++) {
            if(personsArray[i].name === person.name && personsArray[i].age === person.age) {
                personsArray.splice(i,1);
                return personsArray;
            }
        }
        throw new Error("This person was not found in our array");
    } catch (error) {
        return (error.message);
    }
}

// deletePerson(personsArray, {name: "Hadar", age: 22});




