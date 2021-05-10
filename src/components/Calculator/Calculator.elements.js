import styled from "styled-components";

const colDark = (props) => props.theme.color.bgDark;
const colLigth = (props) => props.theme.color.bgLigth;
const colPrimary = (props) => props.theme.color.primary;
const colAccent = (props) => props.theme.color.accent;

export const CalcContainer = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    width: 320px;
    height: 640px;
    background-color: ${colDark};
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
        background: ${colDark};
        filter: brightness(1.2);
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50px;
        height: 40px;
        position: absolute;
        top: 110%;
        left: 50%;
        transform: translateX(-100%);
        border-top-left-radius: 50%;
        border-bottom-left-radius: 50%;
    }

    & span:nth-child(4) {
        background: ${colDark};
        filter: brightness(1.2);
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50px;
        height: 40px;
        position: absolute;
        top: 110%;
        right: 50%;
        transform: translateX(100%);
        border-top-right-radius: 50%;
        border-bottom-right-radius: 50%;
    }

    & span:nth-child(3) > *,
    span:nth-child(4) > * {
        cursor: pointer;
    }
`;

export const TopLeft = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex: 1 1 auto;
    padding-left: 20px;

    & span {
        font-size: 0.8rem;
        font-weight: bold;
        color: white;
    }
`;

export const TopRigth = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex: 1 1 auto;
    padding-right: 20px;
`;

export const DisplayHistory = styled.div`
    display: flex;
    align-items: flex-end;
    color: white;
    /* background-color: orange; */
    flex: 5 1 0;
    padding: 0 15px;
    font-size: 0.8rem;
    text-align: right;
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
`;

export const DisplayValue = styled.div`
    display: block;
    /* background-color: pink; */
    flex: 3 1 0;
    padding: 0 15px;
    color: white;
    font-weight: bolder;
    font-size: 2rem;
    text-align: right;
    margin-top: 10px;
    word-break: break-all;
`;

//Keyboard elements
export const CalcKeyboard = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(5, 1fr);
    gap: 20px;
    padding: 25px;
    background: ${colDark};
    filter: brightness(1.2);
    width: 100%;
    height: 100%;
    flex: 3 1 0;
    border-radius: 30px 30px 0 0;
`;

export const CalcButton = styled.button`
    background: ${colDark};
    filter: brightness(0.9);
    outline: none;
    border: none;
    border-radius: 20px;
    color: ${(props) =>
        (props.accent === "accent" && colAccent) ||
        (props.accent === "primary" && colPrimary) ||
        "white"};
    font-size: 1.2rem;
    font-weight: bold;
    cursor: pointer;
`;
