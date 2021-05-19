import { useState, useEffect } from "react";
import { stringMath } from "../utils/stringMath";

const useCalc = () => {
    //Name and value of the buttons clicked.
    const [buttonData, setButtonData] = useState({});
    //Current operator
    // const [operator, setOperator] = useState("");
    //Raw data without formatting
    const [inputRaw, setInputRaw] = useState("");
    //Formatted data (12 integers and 4 floats)
    const [inputData, setInputData] = useState({ integers: "", floats: "" });
    //Unified inputData as number
    const [current, setCurrent] = useState("");
    //String containing all values and operators
    const [history, setHistory] = useState("");

    // const [prev, setPrev] = useState("");
    // const [result, setResult] = useState(0);

    const handleClick = (e) => {
        const { name, value } = e.target;

        setButtonData({
            [name]: value,
        });
    };

    // const handleMouseDown = () => {
    //     if (history === "") {
    //         setHistory(operator);
    //     }

    //     if (history !== "") {
    //         setHistory(history.concat(operator + current));
    //     }
    // };

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
            // setOperator(Object.values(buttonData)[0]);
            setHistory(history.concat(current + Object.values(buttonData)[0]));
            setInputRaw("");
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

    return {
        handleClick,
        inputData,
    };
};

export default useCalc;
