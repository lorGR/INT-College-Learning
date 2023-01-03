function ex1() {
    try {
        var num1 = Number(prompt("Enter first number"));
        var num2 = Number(prompt("Enter second number"));
        var num3 = Number(prompt("Enter third number"));
        if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
            throw new Error("All inputs should be numbers");
        }
        return num1 * num2 * num3;
    }
    catch (error) {
        console.error(error.message);
    }
}
// const result1 = ex1();
// console.log(result1);
function ex2(str) {
    try {
        var encripted = "";
        for (var i = 0; i < str.length; i++) {
            if (str[i].toLowerCase().charCodeAt(0) - 96 < 0 || str[i].toLowerCase().charCodeAt(0) - 96 > 26) {
                throw new Error("only letters between a-z or A-Z");
            }
            var letter = str[i];
            var codeAt = str.toLowerCase().charCodeAt(i) - 96;
            // console.log({ letter, codeAt });
            encripted += " " + codeAt;
        }
        console.log(encripted);
    }
    catch (error) {
        console.error(error.message);
    }
}
// ex2("Lior");
function exe2() {
    try {
        var message = prompt("Enter you message");
        var encripted = "";
        for (var i = 0; i < message.length; i++) {
            if (message[i].toLowerCase().charCodeAt(0) - 96 < 0 || message[i].toLowerCase().charCodeAt(0) - 96 > 26) {
                throw new Error("only letters between a-z or A-Z");
            }
            var codeAt = message.toLowerCase().charCodeAt(i) - 96;
            encripted += " " + codeAt;
        }
        return encripted;
    }
    catch (error) {
        console.error(error.message);
    }
}
function ex3(encrypt, message) {
    try {
        if (encrypt) {
            var encripted = "";
            for (var i = 0; i < message.length; i++) {
                if (message[i].toLowerCase().charCodeAt(0) - 96 < 0 || message[i].toLowerCase().charCodeAt(0) - 96 > 26)
                    throw new Error("Only letters between a-z or A-Z allowed");
                var keyCode = message.toLowerCase().charCodeAt(i) - 96;
                encripted += " " + keyCode;
            }
            console.log(encripted);
            return encripted;
        }
        else {
            var char = "";
            var decrypt = "";
            for (var i = 0; i < message.length; i++) {
                var charCode = message.charCodeAt(i) - 48;
                if (charCode !== -16) {
                    char += charCode;
                }
                else {
                    decrypt += helperEx3(Number(char));
                    char = "";
                }
            }
            console.log(decrypt);
            return decrypt;
        }
    }
    catch (error) {
        console.error(error.message);
    }
}
function helperEx3(num) {
    var characters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var result = "";
    for (var i = 0; i < characters.length; i++) {
        if (num === characters[i].charCodeAt(0) - 96) {
            result = characters[i];
            break;
        }
    }
    return result;
}
ex3(false, "1 2 2 1 ");
