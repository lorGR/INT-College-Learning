function negativeNumber(number: number): string {
    const result = number * -1;
    return `${number} in his negative form is ${result}`;
}

const exe1 = negativeNumber(240);
// console.log(myNumber);

function square(number: number): number {
    const result = (number * number);
    return result;
}

const exe2 = square(6);
// console.log(exe2);

function celToFeh(cel: number): number {
    const result = cel * 1.8 + 32;
    return result;
}

const exe3 = celToFeh(29);
// console.log(exe3);

function getBigger(num1: number, num2: number): number | string {

    if (num1 === num2) {
        return `Both numbers are the same. The number are: ${num1}`;
    } else if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

const exe4 = getBigger(5, 5);
// console.log(exe4);

function getDiff(gender: string, height: number): string | number {

    if (gender === "male") {

        const diff = height - 174;
        return diff;

    } else if (gender === "female") {

        const diff = height - 159;
        return diff;

    } else {
        return `I can't know the average of this gender :${gender}`;
    }
}

const exe5 = getDiff("other", 161);
// console.log(exe5);


function reverseNumber(number: number): string {
    const strNumber = number.toString();
    let result = "";
    for (let i = strNumber.length - 1; i >= 0; i--) {
        result += strNumber[i];
        // result = result + strNumber[i];
    }
    return result;
}

const exe6 = reverseNumber(987654321);
console.log(exe6);
