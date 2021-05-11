import { useState, useEffect } from "react";

const useCalc = () => {
    const [buttonData, setButtonData] = useState({});
    const [number, setNumber] = useState("");
    const [operator, setOperator] = useState("");
    const [currentVal, setCurrentVal] = useState("0");
    const [history, setHistory] = useState("");

    const handleClick = (e) => {
        const { name, value } = e.target;

        setButtonData({
            [name]: value,
        });
    };

    useEffect(() => {
        if (Object.keys(buttonData)[0] === "number") {
            setCurrentVal(currentVal.concat(Object.values(buttonData)[0]));
        }
        if (
            Object.keys(buttonData)[0] === "decimal" &&
            !currentVal.includes(".")
        ) {
            setCurrentVal(currentVal.concat(Object.values(buttonData)[0]));
        }
    }, [buttonData]);

    return {
        handleClick,
        currentVal,
    };
};

export default useCalc;
