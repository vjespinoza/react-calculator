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

const Display = () => {
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
            <DisplayTop>
                <TopLeft>
                    <span>{time}</span>
                </TopLeft>
                <TopRigth>
                    <FaSignal />
                    <FaWifi />
                    <FaBatteryThreeQuarters />
                </TopRigth>
                <span>
                    <FaSun />
                </span>
                <span>
                    <FaMoon />
                </span>
            </DisplayTop>
            <DisplayHistory>{history}</DisplayHistory>
            {/* Prevent the input of more than 12 digits */}
            <DisplayValue>123,456,789,000</DisplayValue>
        </CalcDisplay>
    );
};

export default Display;
