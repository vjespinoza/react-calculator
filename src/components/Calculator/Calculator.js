import React from "react";
import Display from "./Display/Display";
import Keyboard from "./Keyboard/Keyboard";

const Calculator = ({ toggleDarkMode, darkMode }) => {
    return (
        <>
            <Display darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <Keyboard darkMode={darkMode} />
        </>
    );
};

export default Calculator;
