import React from "react";
import { CalcButton, CalcKeyboard } from "../Calculator.elements";
import { buttons } from "../../../utils/buttons";

const Keyboard = () => {
    return (
        <CalcKeyboard>
            {buttons.map((button) => {
                return (
                    <CalcButton
                        key={button.name}
                        name={button.name}
                        value={button.value}
                        accent={button.color}
                    >
                        {button.icon}
                    </CalcButton>
                );
            })}
        </CalcKeyboard>
    );
};

export default Keyboard;
