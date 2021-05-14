import React from "react";
import Display from "./Display/Display";
import Keyboard from "./Keyboard/Keyboard";
import useCalc from "../../hooks/useCalc";

const Calculator = ({ toggleDarkMode, darkMode }) => {
    const { handleClick, inputData } = useCalc();
    return (
        <>
            <Display
                darkMode={darkMode}
                toggleDarkMode={toggleDarkMode}
                inputData={inputData}
            />
            <Keyboard handleClick={handleClick} darkMode={darkMode} />
        </>
    );
};

export default Calculator;
