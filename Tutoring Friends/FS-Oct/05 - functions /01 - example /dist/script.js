function negativeNumber(number) {
    var result = number * -1;
    return number + " in his negative form is " + result;
}
var exe1 = negativeNumber(240);
// console.log(myNumber);
function square(number) {
    var result = (number * number);
    return result;
}
var exe2 = square(6);
// console.log(exe2);
function celToFeh(cel) {
    var result = cel * 1.8 + 32;
    return result;
}
var exe3 = celToFeh(29);
// console.log(exe3);
function getBigger(num1, num2) {
    if (num1 === num2) {
        return "Both numbers are the same. The number are: " + num1;
    }
    else if (num1 > num2) {
        return num1;
    }
    else {
        return num2;
    }
}
var exe4 = getBigger(5, 5);
// console.log(exe4);
function getDiff(gender, height) {
    if (gender === "male") {
        var diff = height - 174;
        return diff;
    }
    else if (gender === "female") {
        var diff = height - 159;
        return diff;
    }
    else {
        return "I can't know the average of this gender :" + gender;
    }
}
var exe5 = getDiff("other", 161);
// console.log(exe5);
function reverseNumber(number) {
    var strNumber = number.toString();
    var result = "";
    for (var i = strNumber.length - 1; i >= 0; i--) {
        result += strNumber[i];
        // result = result + strNumber[i];
    }
    return result;
}
var exe6 = reverseNumber(987654321);
console.log(exe6);
