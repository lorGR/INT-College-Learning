//Write a JavaScript program that accept two numbers and display the larger.

// לבקש שני מספרים מהמתמש 
// לבדוק איזה מספר גדול יותר
// האם מספר 1 גדול יותר ממספר 2
// להדפיס את המסםר הגדול מהין שניהם

var num1 = parseInt(prompt("Enter your first number:"));
var num2 = parseInt(prompt("Enter your second number:"));

// num1 = 5
// num2 = 10


if(num1 > num2) {
    //האם התנאי נכון
    console.log("The bigger number is:");
    console.log(num1);
} else {
    // כל עוד התנאי לא מתקיים
    console.log("The bigger number is:");
    console.log(num2);
}
