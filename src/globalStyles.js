import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        font-family: 'Quicksand', sans-serif;
        background-color: #FFDEE9;
        background-image: linear-gradient(0deg, #FFDEE9 0%, #B5FFFC 100%);
        /* background-color: ${(props) => props.theme.color.bgLigth}; */
    }

    .react-icons {
        color: white;
        margin-left: 5px;
    }

`;

export default GlobalStyle;
