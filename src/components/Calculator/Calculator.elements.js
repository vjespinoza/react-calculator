import styled from "styled-components";

const colDark = (props) => props.theme.color.bgDark;
const colLigth = (props) => props.theme.color.bgLigth;
const colPrimary = (props) => props.theme.color.primary;
const colAccent = (props) => props.theme.color.accent;

export const MainWrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: ${(props) => (props.darkMode ? colDark : colLigth)};
`;

export const CalcContainer = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    width: 320px;
    height: 640px;
    background-color: ${(props) => (props.darkMode ? colLigth : colDark)};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    overflow: hidden;
`;

//Display elements
export const CalcDisplay = styled.div`
    display: flex;
    flex-direction: column;
    background-color: transparent;
    width: 100%;
    height: 100%;
    flex: 2 1 0;
`;

export const DisplayTop = styled.div`
    display: flex;
    /* background-color: cyan; */
    flex: 1 1 0;
    padding-top: 5px;
    margin-bottom: 50px;
    position: relative;

    & span:nth-child(3) {
        background: ${(props) => (props.darkMode ? colLigth : colDark)};
        filter: brightness(1.2);
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40px;
        height: 30px;
        position: absolute;
        top: 110%;
        left: 50%;
        transform: translateX(-50%);
        border-radius: 10px;
    }

    & span > svg {
        cursor: pointer;
        fill: ${(props) => (props.darkMode ? colDark : "white")};
        margin: 0;
        font-size: 0.9rem;
    }
`;

export const TopLeft = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex: 1 1 auto;
    padding-left: 20px;
    color: ${(props) => (props.darkMode ? colDark : "white")};

    & span {
        font-size: 0.8rem;
        font-weight: bold;
    }
`;

export const TopRigth = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex: 1 1 auto;
    padding-right: 20px;

    & > svg {
        fill: ${(props) => (props.darkMode ? colDark : "white")};
    }
`;

export const DisplayHistory = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    color: ${(props) => (props.darkMode ? colDark : "white")};
    /* background-color: orange; */
    flex: 5 1 0;
    overflow: hidden;
    font-size: 1rem;
    font-weight: bold;

    & p {
        padding: 0 10px;
        height: 100%;
        text-align: right;
        /* background-color: red; */
        overflow: auto;

        /* width */
        &::-webkit-scrollbar {
            width: 5px;
        }

        /* Track */
        &::-webkit-scrollbar-track {
            background: transparent;
        }

        /* Handle */
        &::-webkit-scrollbar-thumb {
            background: #3d414d;
            border-radius: 5px;
        }

        /* Handle on hover */
        &::-webkit-scrollbar-thumb:hover {
            background: #555;
        }
    }
`;

export const DisplayValue = styled.input`
    display: block;
    /* background-color: pink; */
    background: ${(props) => (props.darkMode ? colLigth : colDark)};
    flex: 3 1 0;
    padding: 0 15px;
    color: ${(props) => (props.darkMode ? colDark : "white")};
    font-weight: bold;
    font-size: 1.4rem;
    text-align: right;
    line-height: 2.5;
    word-break: break-all;
    outline: none;
    border: none;
`;

//Keyboard elements
export const CalcKeyboard = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(5, 1fr);
    gap: 20px;
    padding: 25px;
    background: ${(props) => (props.darkMode ? colLigth : colDark)};
    filter: brightness(1.2);
    width: 100%;
    height: 100%;
    flex: 3 1 0;
    border-radius: 30px 30px 0 0;
`;

export const CalcButton = styled.button`
    background: ${(props) => (props.darkMode ? colLigth : colDark)};
    filter: brightness(0.9);
    outline: none;
    border: none;
    border-radius: 20px;
    color: ${(props) =>
        (props.accent === "accent" && colAccent) ||
        (props.accent === "primary" && colPrimary) ||
        (props.darkMode ? colDark : "white")};
    font-size: 1.2rem;
    font-weight: bold;
    cursor: pointer;
`;
