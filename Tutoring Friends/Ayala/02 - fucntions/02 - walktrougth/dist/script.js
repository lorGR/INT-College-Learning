// function exOne(num1: number, num2: number , num3: number) {
//     try {
//         return num1 * num2 * num3;
//     } catch (error) {
//         console.error(error.message);
//     }
// }
// const userNumber1 = Number(prompt("Enter your first number"));
// const userNumber2 = Number(prompt("Enter your second number"));
// const userNumber3 = Number(prompt("Enter your third number"));
// if(isNaN(userNumber1) || isNaN(userNumber2) || isNaN(userNumber3)) {
//     console.log("All inputs should be numbers no characters allowed");
// } else {
//     const result = exOne(userNumber1, userNumber2, userNumber3);
//     console.log(result);
// }
// function exTwo(word: string) {
//     try {
//         let encripted = "";
//         for (let i = 0; i < word.length; i++) {
//             const char = word[i];
//             const codeChar = (char.toLowerCase().charCodeAt(0) - 96);
//             if(codeChar < 0 || codeChar > 26) {
//                 throw new Error("Please enter only charters between a-z or A-Z");
//             }
//             encripted += ` ${codeChar}`;
//         }
//         console.log(encripted);
//     } catch (error) {
//         console.error(error.message);
//     }
// }
// exTwo("");
