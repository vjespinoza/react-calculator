export const numberFormat = (integers, floats) => {
    let string = integers + floats;

    let int = parseFloat(string);

    if (isNaN(int)) {
        int = "0";
    }

    if (floats === "." && integers === "0") {
        int = "0.";
    }

    // if (integers !== "0" && floats === ".") {
    //     int = integers + ".";
    // }

    return int.toLocaleString("en-US", {
        maximumFractionDigits: floats.length,
    });
};
