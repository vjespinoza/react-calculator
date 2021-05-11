export const convertNumbers = (string) => {
    let int = null;
    // let decimals = null;

    if (string.includes(".")) {
        let decimals = string.slice(string.indexOf(".") + 1);
        console.log(decimals.length);
        int = parseFloat(string).toPrecision(decimals.length + 1);
    } else {
        int = parseInt(string);
    }

    const converted = int.toLocaleString("en-US");

    return converted;
};
