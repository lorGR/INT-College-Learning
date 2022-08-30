// Write a JavaScript conditional statement to find the largest of five numbers.
// Display an alert box to show the result
// 1,3,6,9,12 = 12 is the biggest
// 1,3,12,9,6 = 12 is the biggest

var num1 = 1;
var num2 = 10;
var num3 = 7;
var num4 = 5;
var num5 = 2;
var num6 = 5;

if ((num1 > num2) && (num1 > num3) && (num1 > num4) && (num1 > num5)) {
    console.log(num1,"is the biggest number");
} else if (num2 > num1 && num2 > num3 && num2 > num4 && num2 > num5) {
    console.log(num2, "is the biggest number");
} else if (num3 > num1 && num3 > num2 && num3 > num4 && num3 > num5) {
    console.log(num3, "is the biggest number");
} else if (num4 > num1 && num4 > num2 && num4 > num3 && num4 > num5) {
    console.log(num4, "is the biggest number");
} else {
    console.log(num5, "is the biggest number");
}