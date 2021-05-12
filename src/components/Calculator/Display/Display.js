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

const Display = ({ toggleDarkMode, darkMode, currentVal }) => {
    const [time, setTime] = useState(getTime());

    // const displayValues = numberFormat(currentVal);

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
            <DisplayHistory darkMode={darkMode}></DisplayHistory>
            {/* <DisplayValue darkMode={darkMode}>{displayValues}</DisplayValue> */}
            <DisplayValue darkMode={darkMode}>{currentVal}</DisplayValue>
        </CalcDisplay>
    );
};

export default Display;
