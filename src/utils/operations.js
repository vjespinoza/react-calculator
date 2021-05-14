export const operations = (prev, current, op) => {
    let result = 0;
    op === "+" && (result = prev + current);
    op === "-" && (result = prev - current);
    op === "*" && (result = prev * current);
    op === "/" && (result = prev / current);

    return result;
};

// operations(5, 100.2, "+");
// operations(100, 10, "-");
// operations(2, 20, "*");
// operations(100, 33, "/");
// operations(200, 5, "%");
