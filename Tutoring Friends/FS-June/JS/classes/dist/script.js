var empolyee = /** @class */ (function () {
    function empolyee(hours, extraHours, type) {
        this.hours = hours;
        this.extraHours = extraHours;
        this.type = type;
    }
    empolyee.prototype.salary = function () {
        var workerSalary = 0;
        if (this.type === 1) {
            workerSalary = (this.hours * 40) + (this.extraHours * 50);
            return workerSalary;
        }
        else {
            workerSalary = (this.hours * 70) + (this.extraHours * 87.5);
            return workerSalary;
        }
    };
    return empolyee;
}());
var ourEmployees = [];
function createEmployees(numberEmployees) {
    for (var i = 0; i < numberEmployees; i++) {
        var newEmployee = new empolyee(randomHours(), randomExtraHours(), randomType());
        ourEmployees.push(newEmployee);
    }
}
function printsWorkersSalary(ourEmployees) {
    for (var i = 0; i < ourEmployees.length; i++) {
        console.log("worker number:" + (i + 1) + " salary's " + ourEmployees[i].salary());
    }
}
//              0  1  2  3  4
// cosnt arr = [1, 2, 3, 4, 5]
// arr.push(5); -> adds to the last of the array
function randomHours() {
    return Math.floor(Math.random() * (190 - 80) + 80);
}
function randomExtraHours() {
    return Math.floor(Math.random() * (60 - 30) + 30);
}
function randomType() {
    return Math.round(Math.random() * (2 - 1) + 1);
}
// interface User{
//     firstName: string,
//     lastName: string,
//     age?: number,
//     country? : string
// }
// const myUser : User = {
//     firstName : "lior",
//     lastName: "Grishin",
// }
// const yourUser : User = {
//     firstName: "Daniel",
//     lastName: "John",
//     age: 45,
//     country: "Israel"
// }
