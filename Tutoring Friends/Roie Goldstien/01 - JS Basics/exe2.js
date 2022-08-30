// Write a JavaScript conditional statement to sort three numbers.
// Display an alert box to show the result.

var num1 = 9;
var num2 = 5;
var num3 = 1;

if (num1 < num2 && num1 < num3) {
    console.log(num1, "is the smaller");
    if(num2 < num3) {
        console.log(num1, num2, num3);
    }

} else if (num2 < num1 && num2 < num3) {
    console.log(num2, "is the smaller");
    if(num1 < num3) {
        console.log(num2, num1, num3);
    }

} else if (num3 < num1 && num3 < num2) {
    console.log(num3, "is the smaller");
    if(num2 < num1) {
        console.log(num3, num2, num1);
    }
}