import { useState, useEffect } from "react";
import { operations } from "../utils/operations";

const useCalc = () => {
    //Name and value of the buttons clicked.
    const [buttonData, setButtonData] = useState({});
    //Raw data without formatting
    const [inputRaw, setInputRaw] = useState("");
    //Formatted data (12 integers and 4 floats)
    const [inputData, setInputData] = useState({ integers: "", floats: "" });
    //Unified inputData as number
    const [current, setCurrent] = useState("");

    const [prev, setPrev] = useState("");
    const [operator, setOperator] = useState("");
    const [result, setResult] = useState(0);

    const handleClick = (e) => {
        const { name, value } = e.target;

        setButtonData({
            [name]: value,
        });
    };

    const getButtonData = () => {
        let btnKey = Object.keys(buttonData)[0];

        //Creates a string with raw data from buttons (Numbers and decimal separator).
        if (
            btnKey === "number" ||
            (btnKey === "decimal" && !inputRaw.includes("."))
        ) {
            setInputRaw(inputRaw.concat(Object.values(buttonData)[0]));
        }

        if (btnKey === "operator") {
            setOperator(Object.values(buttonData)[0]);
        }
    };

    useEffect(() => {
        getButtonData();
    }, [buttonData]);

    const getInputData = () => {
        //Saves only 12 integers from inputRaw
        if (!inputRaw.includes(".")) {
            inputData.integers.length < 12 &&
                setInputData({
                    ...inputData,
                    integers: Math.trunc(inputRaw).toString(),
                });
        }

        //Saves only 4 floats from inputRaw
        if (inputRaw.includes(".")) {
            inputData.floats.length < 5 &&
                setInputData({
                    ...inputData,
                    floats: inputRaw.slice(inputRaw.indexOf(".")),
                });
        }
    };

    useEffect(() => {
        getInputData();
    }, [inputRaw]);

    useEffect(() => {
        setCurrent(parseFloat(`${inputData.integers}${inputData.floats}`));
    }, [inputData]);

    const evaluateData = () => {
        // let result = operations(prev, current, operator);
        // setResult(result);
        // console.log(result);

        setPrev(current);
        setCurrent(0);
    };

    useEffect(() => {
        evaluateData();
        console.log("new operator:", operator);
    }, [operator]);

    return {
        handleClick,
        inputData,
    };
};

export default useCalc;
