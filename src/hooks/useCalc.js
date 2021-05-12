import { useState, useEffect } from "react";

const useCalc = () => {
    const [buttonData, setButtonData] = useState({});
    const [number, setNumber] = useState("");
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
        //Concat numeric values from buttons
        if (Object.keys(buttonData)[0] === "number" && currentVal.length < 12) {
            setCurrentVal(currentVal.concat(Object.values(buttonData)[0]));
        }

        //Concat decimal separator from buttons and prevents duplicated separator
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
