import { useState, useEffect } from "react";

const useCalc = () => {
    const [buttonData, setButtonData] = useState({});
    const [value, setValue] = useState("");
    const [integers, setIntegers] = useState("");
    const [decimals, setDecimals] = useState("");
    const [operator, setOperator] = useState("");
    const [currentVal, setCurrentVal] = useState("");
    const [history, setHistory] = useState("");

    const handleClick = (e) => {
        const { name, value } = e.target;

        setButtonData({
            [name]: value,
        });
    };

    useEffect(() => {
        //Get values from buttons and concatenates them
        //Prevents duplicated concatenation of decimal separator.
        if (
            Object.keys(buttonData)[0] === "number" ||
            (Object.keys(buttonData)[0] === "decimal" && !value.includes("."))
        ) {
            setValue(value.concat(Object.values(buttonData)[0]));
        }

        //Displays '0.' when display is empty en the decimal separator is clicked.
        if (value.length === 0 && Object.keys(buttonData)[0] === "decimal") {
            setValue(value.concat("0."));
        }

        //Prevents 0 (to the left) concatenation if display is empty or decimal
        //separator was not clicked yet.
        if (
            value.length === 0 &&
            Object.keys(buttonData)[0] === "number" &&
            Object.values(buttonData)[0] === "0"
        ) {
            setValue("");
        }
    }, [buttonData]);

    useEffect(() => {
        if (!value.includes(".")) {
            integers.length < 12 && setIntegers(Math.trunc(value).toString());
            setCurrentVal(integers);
        }

        if (value.includes(".")) {
            decimals.length < 4 &&
                setDecimals(value.slice(value.indexOf(".") + 1));
            setCurrentVal(`${integers}.${decimals}`);
        }
    }, [value]);

    return {
        handleClick,
        currentVal,
    };
};

export default useCalc;
