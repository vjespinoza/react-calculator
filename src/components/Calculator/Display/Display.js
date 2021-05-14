import React, { useState, useEffect } from "react";
import {
    CalcDisplay,
    DisplayTop,
    DisplayHistory,
    DisplayValue,
    TopLeft,
    TopRigth,
} from "../Calculator.elements";
import {
    FaSignal,
    FaWifi,
    FaBatteryThreeQuarters,
    FaSun,
    FaMoon,
} from "react-icons/fa";
import { getTime } from "../../../utils/time";
import { numberFormat } from "../../../utils/numberFormat";
// import { numberFormat } from "../../../utils/numberFormat";

const Display = ({ toggleDarkMode, darkMode, inputData }) => {
    const [time, setTime] = useState(getTime());

    useEffect(() => {
        setInterval(() => {
            setTime(getTime());
        }, 1000);
    }, []);

    return (
        <CalcDisplay>
            <DisplayTop darkMode={darkMode}>
                <TopLeft darkMode={darkMode}>
                    <span>{time}</span>
                </TopLeft>
                <TopRigth darkMode={darkMode}>
                    <FaSignal />
                    <FaWifi />
                    <FaBatteryThreeQuarters />
                </TopRigth>
                <span>
                    {darkMode ? (
                        <FaMoon onClick={toggleDarkMode} />
                    ) : (
                        <FaSun onClick={toggleDarkMode} />
                    )}
                </span>
            </DisplayTop>
            <DisplayHistory darkMode={darkMode}>
                <p>{numberFormat(inputData.integers, inputData.floats)}</p>
            </DisplayHistory>
            <DisplayValue
                type="text"
                disabled
                darkMode={darkMode}
                value={numberFormat(inputData.integers, inputData.floats)}
            />
        </CalcDisplay>
    );
};

export default Display;
