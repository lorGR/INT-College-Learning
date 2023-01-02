function ex1() {
    try {

        let num1 = Number(prompt("Enter first number"));
        let num2 = Number(prompt("Enter second number"));
        let num3 = Number(prompt("Enter third number"));

        if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
            throw new Error("All inputs should be numbers");
        }

        return num1 * num2 * num3;

    } catch (error) {
        console.error(error.message);
    }
}

// const result1 = ex1();
// console.log(result1);

function ex2(str: string) {
    try {

        let encripted = "";
        for (let i = 0; i < str.length; i++) {
            if (str[i].toLowerCase().charCodeAt(0) - 96 < 0 || str[i].toLowerCase().charCodeAt(0) - 96 > 26) {
                throw new Error("only letters between a-z or A-Z");
            }
            const letter = str[i];
            const codeAt = str.toLowerCase().charCodeAt(i) - 96
            // console.log({ letter, codeAt });
            encripted += ` ${codeAt}`;
        }
        console.log(encripted);
    } catch (error) {
        console.error(error.message);
    }
}


// ex2("Lior");

function exe2() {
    try {
        const message = prompt("Enter you message");
        let encripted = "";
        for (let i = 0; i < message!.length; i++) {
            if (message![i].toLowerCase().charCodeAt(0) - 96 < 0 || message![i].toLowerCase().charCodeAt(0) - 96 > 26) {
                throw new Error("only letters between a-z or A-Z");
            }
            const codeAt = message!.toLowerCase().charCodeAt(i) - 96;
            encripted += ` ${codeAt}`
        }
        return encripted;
    } catch (error) {
        console.error(error.message);
    }
}

function ex3(encrypt: boolean, message: string) {
    try {
        if (encrypt) {
            let encripted = "";
            for (let i = 0; i < message.length; i++) {
                if (message[i].toLowerCase().charCodeAt(0) - 96 < 0 || message[i].toLowerCase().charCodeAt(0) - 96 > 26)
                    throw new Error("Only letters between a-z or A-Z allowed");
                const keyCode = message.toLowerCase().charCodeAt(i) - 96;
                encripted += ` ${keyCode}`;
            }
            console.log(encripted);
            return encripted;
        } else {
            let char = "";
            let decrypt = "";
            for (let i = 0; i < message.length; i++) {
                const charCode = message.charCodeAt(i) - 48;
                if (charCode !== -16) {
                    char += charCode;
                } else {
                    decrypt += helperEx3(Number(char));
                    char = "";
                }
            }
            console.log(decrypt);
            return decrypt;
        }
    } catch (error) {
        console.error(error.message);
    }
}

function helperEx3(num: number) {
    const characters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let result = ""
    for(let i = 0; i < characters.length; i++) {        
        if(num === characters[i].charCodeAt(0) - 96) {
            result = characters[i];
            break;
        }
    }
    return result;
}

ex3(false, "1 2 2 1 ");