export const stringMath = (str) => {
    const regExp = /([\+\-\*\/])/g;

    //Splits string based on operator symbols
    const splitStr = str.split(regExp);

    //Format strings to numbers
    const formatStr = splitStr.map((val) => {
        if (!isNaN(val)) {
            return Number(val);
        } else {
            return val;
        }
    });

    //Determines arithmetic hierarchy based on the type of operator
    //It defines how the arithmetic operations will be solved
    for (let i = 0; i < formatStr.length; i++) {
        if (formatStr[i] === "*") {
            formatStr.splice(i - 1, 3, formatStr[i - 1] * formatStr[i + 1]);
        }
        if (formatStr[i] === "/") {
            formatStr.splice(i - 1, 3, formatStr[i - 1] / formatStr[i + 1]);
        }
        if (formatStr[i] === "-") {
            formatStr.splice(i, 2, formatStr[i + 1] * -1);
        }
        if (formatStr[i] === "+") {
            formatStr.splice(i, 1);
        }
    }

    let result = formatStr.reduce((a, b) => a + b);

    return result;
};
