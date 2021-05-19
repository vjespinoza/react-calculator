import React from "react";
import { CalcButton, CalcKeyboard } from "../Calculator.elements";
import { buttons } from "../../../utils/buttons";

const Keyboard = ({ darkMode, handleClick, handleMouseDown }) => {
    return (
        <CalcKeyboard darkMode={darkMode}>
            {buttons.map((button, i) => {
                return (
                    <CalcButton
                        darkMode={darkMode}
                        key={i}
                        name={button.name}
                        value={button.value}
                        accent={button.color}
                        onClick={handleClick}
                        // onMouseDown={
                        //     button.name === "operator"
                        //         ? handleMouseDown
                        //         : undefined
                        // }
                    >
                        {button.icon}
                    </CalcButton>
                );
            })}
        </CalcKeyboard>
    );
};

export default Keyboard;
