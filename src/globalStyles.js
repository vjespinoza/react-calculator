import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        font-family: 'Quicksand', sans-serif;
    }

    .react-icons {
        color: white;
        margin-left: 5px;
    }

`;

export default GlobalStyle;
