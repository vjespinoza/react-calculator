import { useState, useEffect } from "react";

const useCalc = () => {
    const [buttonData, setButtonData] = useState({});
    const [value, setValue] = useState("");
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
        let integers = Math.trunc(value).toString();
        let decimals = value.slice(value.indexOf(".") + 1);

        //Format cuurentVal to 12 integers
        if (!value.includes(".")) {
            setCurrentVal(`${integers.slice(0, 12)}`);
        }

        //Format cuurentVal to 4 decimals
        if (value.includes(".")) {
            setCurrentVal(
                integers.slice(0, 12).concat(`.${decimals.slice(0, 4)}`)
            );
        }
    }, [value]);

    return {
        handleClick,
        currentVal,
    };
};

export default useCalc;
