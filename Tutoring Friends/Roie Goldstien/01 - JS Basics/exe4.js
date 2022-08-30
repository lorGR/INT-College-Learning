// Giveing an array of numbers 
// print the avrage of grades
// [70, 80, 50, 100, 67]
// output: the average of my grades
// var myFriends = ["Roie", "Miachel", "Maor", "Daniel"];

// How to calc average?
// sumGrades = sum + all grades (70 + 80 + 90 + 100)
// average = sumGrades / 4 (number the grades)

//              0   1   2   3  
var myGrades = [70, 80, 90, 100];
var sumGrades = 0;

for (var i = 0; i < myGrades.length; i++) {
    sumGrades = sumGrades + myGrades[i];
}

console.log(sumGrades/myGrades.length);



