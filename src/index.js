import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import GlobalStyle from "./globalStyles";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { IconContext } from "react-icons";

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <IconContext.Provider value={{ className: "react-icons" }}>
                <GlobalStyle />
                <App />
            </IconContext.Provider>
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
