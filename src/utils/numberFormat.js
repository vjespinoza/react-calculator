export const numberFormat = (string) => {
    let decimals = string.slice(string.indexOf(".") + 1);

    let int = parseFloat(string);

    //Prevents 'isNaN' to appear on display when calculator is initialized.
    if (string === "") {
        int = "0";
    }

    //Formats string based on the existance of decimals
    if (string.includes(".")) {
        return int.toLocaleString("en-US", {
            minimumFractionDigits: Math.min(decimals.length, 4),
        });
    } else {
        return int.toLocaleString("en-US");
    }
};
