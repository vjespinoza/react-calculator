import { useState } from "react";
import Calculator from "./components/Calculator/Calculator";
import {
    CalcContainer,
    MainWrap,
} from "./components/Calculator/Calculator.elements";

function App() {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode((darkMode) => !darkMode);
    };

    return (
        <MainWrap darkMode={darkMode}>
            <CalcContainer darkMode={darkMode}>
                <Calculator
                    darkMode={darkMode}
                    toggleDarkMode={toggleDarkMode}
                />
            </CalcContainer>
        </MainWrap>
    );
}

export default App;
