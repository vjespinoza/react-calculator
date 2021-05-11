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

const Display = ({ toggleDarkMode, darkMode }) => {
    const [time, setTime] = useState(getTime());
    const [history, setHistory] = useState(
        "453 x 874877 - 2343434 + 223435 - 123123 - 85 x 23 ÷ 25 + 4818711"
    );

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
                    <FaSun onClick={toggleDarkMode} />
                </span>
                <span>
                    <FaMoon onClick={toggleDarkMode} />
                </span>
            </DisplayTop>
            <DisplayHistory darkMode={darkMode}>{history}</DisplayHistory>
            {/* Prevent the input of more than 12 digits */}
            <DisplayValue darkMode={darkMode}>123,456,789,000</DisplayValue>
        </CalcDisplay>
    );
};

export default Display;
