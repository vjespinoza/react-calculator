import React from "react";
import Display from "./Display/Display";
import Keyboard from "./Keyboard/Keyboard";
import useCalc from "../../hooks/useCalc";

const Calculator = ({ toggleDarkMode, darkMode }) => {
    const { handleClick, currentVal } = useCalc();
    return (
        <>
            <Display
                currentVal={currentVal}
                darkMode={darkMode}
                toggleDarkMode={toggleDarkMode}
            />
            <Keyboard handleClick={handleClick} darkMode={darkMode} />
        </>
    );
};

export default Calculator;
